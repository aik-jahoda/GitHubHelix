//use strict


/**
 * @param {any} message
 * @returns {Promise<any>}
 */
const sendMessage = async (message) => {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage(
            message,
            (response) => response.error ?
                reject(response.error) :
                resolve(response.data));
    });
}

/**
 * @param {string} name
 * @param { {
 * className?: string,
 * innerText?: string,
 * innerHTML?: string
 * } } [props]
 */
const createElement = (name, props) => {
    let element = document.createElement(name)

    if (props) {
        if (props.className)
            element.className = props.className;
        if (props.innerText)
            element.innerText = props.innerText;
        if (props.innerHTML)
            element.innerHTML = props.innerHTML;
    }
    return element
}

/**
 * @param {string} workItem
 * @param {string} job
 * @param {string} apiVersion
 */
const appendHelixArea = async (job, workItem, apiVersion) => {

    const api = `https://helix.dot.net/api/${apiVersion}`
    const workItemsApi = `${api}/jobs/${job}/workitems/${workItem}`

    const markdownAreas = document.getElementsByClassName("markdown-body");

    if (markdownAreas.length === 1) {

        const markdownArea = markdownAreas[0]
        const parentNode = markdownArea.parentNode

        if (!parentNode)
            return;

        const consoleUrl = `${workItemsApi}/console `


        const helixArea = createElement("div", { className: "f5 mb-4 mx-4" })
        helixArea.innerHTML = `<div>Work item: ${workItem}</div> <div>Job: ${job}</div> <div><a href="${consoleUrl}">Console</a></div>`

        parentNode.insertBefore(helixArea, markdownArea.nextSibling);

        /** @type { {Name:string, Link:string}[] }*/
        const files = await sendMessage({ fetch: `${workItemsApi}/files` })


        //<details class="details-reset Details-element js-merge-review-section">

        const filesArea = createElement("details", { className: "f5" })
        helixArea.appendChild(filesArea);

        const title = createElement("summary", {
            className: "f6 text-normal text-uppercase text-gray-light",
            innerText: "Files"
        })

        filesArea.appendChild(title)

        for (const file of files) {
            const fileItem = createElement("div", {
                innerHTML: `<a href="${file.Link}">${file.Name}</a>`
            })
            filesArea.appendChild(fileItem)
        }
    }
}

const checks_main = () => {



    const re = /Work item ([^\/]*)\/([^ ]*) in/
    const reVersion = /https:\/\/helix.dot.net\/api\/([^\/]*)\//

    const x = document.getElementsByTagName("pre");

    /** @type {string | undefined} */
    let job = undefined;
    /** @type {string | undefined} */
    let workItem = undefined;
    /** @type {string | undefined} */
    let apiVersion = undefined;

    for (const element of x) {
        const regexResult = re.exec(element.innerText)

        if (regexResult && regexResult.length === 3) {
            workItem = regexResult[2];
            job = regexResult[1];
        }

        const regexVersionResult = reVersion.exec(element.innerText)

        if (regexVersionResult && regexVersionResult.length === 2) {
            apiVersion = regexVersionResult[1]
        }

        if (job && workItem && apiVersion)
            break;
    }

    if (job && workItem && apiVersion) {
        appendHelixArea(job, workItem, apiVersion);
    }

}

checks_main();