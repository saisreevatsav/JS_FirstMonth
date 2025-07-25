function attachEventLis() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xy() { //callback function with the count
        console.log("button clicked", ++count);
    });
}
attachEventLis();
