import { sendMessage } from "./utils"

export type JobDetail = {
    Properties: {
        operatingSystem: string,
        configuration: string,
        architecture: string
    },
    Type: string
}

export type WorkItemDetail = {
    FailureReason: null,
    Id: string,
    MachineName: string,
    ExitCode: number,
    ConsoleOutputUri: string,
    Errors: any[],
    Warnings: any[],
    Logs:
    {
        Module: string,
        Uri: string
    }[] | null,
    Files: { FileName: string, Uri: string }[],
    Analysis: {
        xunit:
        {
            ResultXmlUrl: string,
            Results:
            {
                Name: string,
                Result: "Skip" | "Failure" | "Pass",
                FailureExceptionType: string,
                FailureMessage: string,
                FailureStackTrace: string,
                Reason: string,
                Duration: number,
                Output: string | null,
                FailureReason: string | null,
                Type: string,
                Method: string,
                Arguments: string
            }[]
        } | null,
        external: null
    },
    OtherEvents: null,
    Job: string,
    Name: string,
    State: string
}

const api = (apiVersion: string) => `https://helix.dot.net/api/${apiVersion}`
export const jobsApi = (apiVersion: string, job: string) => `${api(apiVersion)}/jobs/${job}`
export const workItemsApi = (apiVersion: string, job: string, workItem: string) => `${jobsApi(apiVersion, job)}/workitems/${workItem}`

export const fetchJobDetail = (apiVersion: string, job: string) => sendMessage<JobDetail>({ type: 'fetch', payload: { resultType: 'json', url: `${jobsApi(apiVersion, job)}/details` } })
export const fetchWorkItemDetail = (apiVersion: string, job: string, workItem: string) => sendMessage<WorkItemDetail>({ type: 'fetch', payload: { resultType: 'json', url: `${workItemsApi(apiVersion, job, workItem)}` } })

//export const workItemFiles = (apiVersion: string, job: string, workItem: string) => sendMessage<{ Name: string, Link: string }[]>({ type: 'fetch', payload: { resultType: 'json', url: `${workItemsApi(apiVersion, job, workItem)}/files` } })

export type HelixStatus = "Pass"
    | "Fail"
    | "BadExit"
    | "None"
    | "Error"
    | "DeadLetter"
    | "InfraRetry"
    | "PassOnRetry"
    | "Timeout"

const helixStatusMap: Record<HelixStatus, string> = {
    "Pass": "Work item did everything as expected, and its exit code was 0.",
    "Fail": "Work item did everything as expected including reporting results, but had a non-zero exit code.",
    "BadExit": "A non-zero exit code, typically a crash, where also no results were reported",
    "None": "No network problems to Azure components, and stuff worked, but we were unable to start your work item. Often this will be caused by problems like no space left on the device or a payload that is so large it cannot be downloaded within 10 minutes, but can also be indicative of a misconfigured machine. We strive for 0 of these from machine configuration, but given we intentionally do not set limits on payloads this can and does happen for the former reasons.",
    "Error": "Same as None except that the Helix client catches it and sends telemetry saying it knew it was in error.",
    "DeadLetter": "Multiple Helix machines tried to run the work item “Max Delivery Count” times (typically configured as 3), and were unable to complete it, OR the queue is deprecated (end-of life: happening more in these core-reduction times). No output is registered, and the console log is redirected to a page explaining what DeadLetter means.",
    "InfraRetry": "Work item completed as expected, but on the 2nd-Nth attempt; this can be a requested-by-the-workitem retry, machine being rebooted or deleted during execution, or any number of random Azure components being flaky. Typically ignoreable for test runs.",
    "PassOnRetry": "Special legacy retry functionality which is purposefully obsoleted as it does not play well with Azure DevOps test reporting (reporting the same facts twice causes issues)",
    "Timeout": "Work Item did not complete within its specified timeout and was forcibly killed. Corresponds to exit code -3 (made up value since the process never exited)",
}

export const helixStatusToString = (status: HelixStatus) => helixStatusMap[status]