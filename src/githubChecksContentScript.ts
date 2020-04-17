import { attachReact } from "./HelixInfo"

const main = () => {

    const re = /Work item ([^\/]*)\/([^ ]*) in/

    const x = document.getElementsByTagName("pre")

    for (const element of x) {
        let job: string | undefined = undefined;
        let workItem: string | undefined = undefined;
        let apiVersion = "2019-06-17";

        const regexResult = re.exec(element.innerText)

        if (regexResult && regexResult.length === 3) {
            workItem = regexResult[2];
            job = regexResult[1];
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