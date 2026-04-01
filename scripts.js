function generateNumber() {
    
    const start = Math.ceil(document.querySelector(".start-number").value)
    const final = Math.floor(document.querySelector(".final-number").value)

    const result = Math.floor(Math.random() * (final - start + 1)) + start;

    alert(result)
}

