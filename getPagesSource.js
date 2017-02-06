// @author Dan Romero
// HTML Slurp

function DOMtoString(document_root) {
    var full_name = String(document.querySelector(".full-name").innerHTML);
    var job_title = String(document.querySelector(".title").innerHTML);
    var public_url = String(document.querySelector(".view-public-profile"));
    var result = String(full_name + "\n" + job_title + "\n" + public_url);
    return result;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});