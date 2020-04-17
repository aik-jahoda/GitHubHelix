import { storageGet } from "./utils";

const main = async () => {
    const items = await storageGet({ mergeBtnWarning: false })
    if (items.mergeBtnWarning) {
        const mergeBtn = document.querySelector("button.btn-group-merge");
        if (mergeBtn) {
            mergeBtn.className += " btn-danger"
        }
    }
}

console.log("Conversation plugin loaded.")
main()