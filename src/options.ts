import { storageSet, storageGet } from "./utils";




var mergeBtnWarning = document.getElementById('mergeBtnWarning') as HTMLInputElement | null;

// Saves options to chrome.storage
async function save_options() {

    let mergeBtnWarningValue = false
    if (mergeBtnWarning) {
        mergeBtnWarningValue = mergeBtnWarning.checked
    }
    await storageSet({
        mergeBtnWarning: mergeBtnWarningValue,
    })
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    if (status)
        status.textContent = 'Options saved.';
    setTimeout(() => {
        if (status) status.textContent = '';
    }, 750);
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
async function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    const items = await storageGet({
        mergeBtnWarning: false
    })
    if (mergeBtnWarning) {
        mergeBtnWarning.checked = items.mergeBtnWarning;
    }
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save')?.addEventListener('click',
    save_options);