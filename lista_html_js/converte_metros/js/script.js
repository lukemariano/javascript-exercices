const converteMetros = () => {
    let metros = parseFloat(document.getElementById("entrada").value) * 100;
    return document.querySelector('input[name="output"]').value = metros;
}

const converteCentimetros = () => {
    let centimetros = parseFloat(document.getElementById("output").value) / 100;
    return document.querySelector('input[name="entrada"]').value = centimetros;
}
