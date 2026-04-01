function generateNumber() {

    const start = Math.ceil(document.querySelector(".start-number").value)
    const final = Math.floor(document.querySelector(".final-number").value)

    if (start >= final) {

        alert("FINAL Value must be bigger than START Value")

    } else {

        const result = Math.floor(Math.random() * (final - start + 1)) + start;

        alert(result)
    }

     }