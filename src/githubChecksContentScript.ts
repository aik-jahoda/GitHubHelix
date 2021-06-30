import { attachReact } from "./HelixInfo"

const main = () => {

    const regexes = [
        /Failure log: https:\/\/helix.dot.net\/api\/(?<version>\d{4}-\d\d-\d\d)\/jobs\/(?<job>[^\/]*)\/workitems\/(?<workItem>[^\/]*)\/console/,
        /Work item ([^\/]*)\/([^ ]*) in/
    ]
    const x = document.getElementsByTagName("pre")

    for (const element of x) {
        let job: string | undefined = undefined;
        let workItem: string | undefined = undefined;
        let apiVersion = "2019-06-17";

        for (const re of regexes) {
            const result = re.exec(element.innerText)
            if (result?.groups) {
                apiVersion = result.groups.version ?? apiVersion;
                job = result.groups.job;
                workItem = result.groups.workItem;
                break;
            }
        }

        if (job && workItem) {
            const e = element.parentElement?.parentElement?.parentElement?.appendChild(document.createElement("div"))
            if (e) {
                attachReact(e, { apiVersion, job, workItem });
            }
        }
    }
}
console.log("Checks plugin loaded.")
main();