const checkbox = document.getElementById("checkbox");
const downloadLink = document.getElementById("downloadLink");

checkbox.addEventListener("change", function () {
    if (this.checked) {
        downloadLink.classList.remove("disabled");
    } else {
        downloadLink.classList.add("disabled");
    }
});