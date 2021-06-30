import React, { useEffect, useState, useCallback } from 'react'
import ReactDOM from 'react-dom';
import { jobsApi, workItemsApi, fetchWorkItemDetail, WorkItemDetail, JobDetail, fetchJobDetail } from './helixApi';
import { TestResult, loadTestResults } from './utils';

type ApiDescriptionProps = { apiVersion: string, job: string, workItem: string }

export const attachReact = (markdownArea: Element, props: ApiDescriptionProps) => {
    ReactDOM.render(<HelixInfo {...props} />, markdownArea);
}

const HelixInfo = (props: ApiDescriptionProps) => {
    const [workItemDetail, setWorkItemDetail] = useState<WorkItemDetail>()
    useEffect(() => { fetchWorkItemDetail(props.apiVersion, props.job, props.workItem).then(setWorkItemDetail) }, [])

    const [jobDetail, setjobDetail] = useState<JobDetail>()
    useEffect(() => { fetchJobDetail(props.apiVersion, props.job).then(setjobDetail) }, [])

    const [testResult, setTestResult] = useState<Record<string, TestResult>>()
    const [isLoadingResult, setIsLoadingResult] = useState(false)

    const loadTest = useCallback(async (resultsXml: string, fileName: string) => {
        setIsLoadingResult(true)
        setTestResult({...testResult, [fileName]: await loadTestResults(resultsXml)})
        setIsLoadingResult(false)
    }, [setTestResult, setIsLoadingResult])

    return <div className="f5 mb-4 mx-4">
        <HelixDetail {...props} workItemDetail={workItemDetail} jobDetail={jobDetail} />
        <Files workItemDetail={workItemDetail} loadTest={loadTest} isLoadingResult={isLoadingResult} />
        <Job jobDetail={jobDetail} />
        {testResult && Object.entries(testResult).map(([key, value])=><TestResult key={key} testResult={value} name={key} />)}
    </div>
}

const HelixDetail = (props: ApiDescriptionProps & { workItemDetail?: WorkItemDetail, jobDetail?: JobDetail }) => {
    return <div>
        <div>Job: <a href={jobsApi(props.apiVersion, props.job)}>{props.job}</a></div>
        <div>Work item: <a href={workItemsApi(props.apiVersion, props.job, props.workItem)}>{props.workItem}</a></div>
        <div><a href={`${workItemsApi(props.apiVersion, props.job, props.workItem)}/console`}>Console</a><div id="helix-testArea" /></div>
        {props.workItemDetail?.Logs?.map((x, i) => <div key={i}><a href={x.Uri}>{x.Module}</a><div id="helix-testArea" /></div>)}
    </div>
}

const Job = (props: { jobDetail?: JobDetail }) => {
    return <details className="f5" >
        <summary className="f6 text-normal text-uppercase text-gray-light">Job detail</summary>
        <div>OS: {props.jobDetail?.Properties?.operatingSystem}</div>
        <div>architecture: {props.jobDetail?.Properties?.architecture}</div>
        <div>configuratioin: {props.jobDetail?.Properties?.configuration}</div>
        <div>type: {props.jobDetail?.Type}</div>
    </details>
}

const Files = (props: { workItemDetail?: WorkItemDetail, loadTest: (resultsXml: string, fileName: string) => void, isLoadingResult: boolean }) => {
    return <details className="f5">
        <summary className="f6 text-normal text-uppercase text-gray-light">Files</summary>
        {props.workItemDetail?.Files.map((file, i) =>
            <div key={i}> <a href={file.Uri}>{file.FileName}</a>
                {file.FileName.endsWith("testResults.xml") &&
                    <button disabled={props.isLoadingResult}
                        onClick={() => props.loadTest(file.Uri, file.FileName)}>load tests</button>
                }
            </div>
        )}
    </details>
}


const TestResult = (props: { testResult?: TestResult, name: string}) =>
    <details className="f5" >
        <summary className="f6 text-normal text-uppercase text-gray-light">Tests results: {props.name}</summary>
        {props.testResult?.map((test, i) => (
            <div key={i} className="pl-2" >
                <details>
                    <summary className="f6 text-normal text-gray-light" style={{ wordBreak: "break-all" }} >{test.name}</summary>
                    <div className="pl-2">
                        <div className="f6 text-normal text-gray-light">message:</div>
                        <div>{test.message}</div>
                        <div className="f6 text-normal text-gray-light">stack trace:</div>
                        <pre>{test.stackTrace}</pre>
                        <div className="f6 text-normal text-gray-light">output:</div>
                        <pre>{test.output}</pre>
                    </div>
                </details>
            </div>
        ))}
    </details>

