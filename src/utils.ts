export const storageSet = (items: object) => {
    return new Promise<void>((resolve) =>
        chrome.storage.sync.set(items, resolve))
}


export const storageGet = (items: ExtensionStorage) => {
    return new Promise<ExtensionStorage>((resolve) =>
        chrome.storage.sync.get(items, items => resolve(items as any)))
}

export interface ExtensionStorage {
    mergeBtnWarning: boolean;
}

export declare type Message = { type: 'fetch', payload: { resultType: 'json' | 'text', url: string } }

export const sendMessage = async <T>(message: Message) => {
    return new Promise<T>((resolve, reject) => {
        chrome.runtime.sendMessage(
            message,
            (response) => response.error ?
                reject(response.error) :
                resolve(response.data));
    });
}

const getElementByTagName = (element: Element | null, name: string) => {
    const failures = element?.getElementsByTagName(name)
    return failures?.length === 1 ? failures[0] : null
}

export type TestResult = {
    name: string,
    result: string,
    message?: string,
    stackTrace?: string,
    output?: string
}[]

export const loadTestResults = async (url: string) => {
    const testResult = await sendMessage<string>({ type: 'fetch', payload: { resultType: 'text', url } })

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(testResult, "text/xml");

    const tests: TestResult = []

    for (const test of xmlDoc.getElementsByTagName("test")) {
        const result = test.getAttribute("result")
        const name = test.getAttribute("name")
        if (result === "Fail" && name) {
            const failure = getElementByTagName(test, "failure")

            tests.push({
                name,
                result,
                message: getElementByTagName(failure, "message")?.textContent || undefined,
                stackTrace: getElementByTagName(failure, "stack-trace")?.textContent || undefined,
                output: getElementByTagName(test, "output")?.textContent || undefined
            })
        }
    }

    return tests
}