const generateFile = (mb) => {
    let kiloBytes = mb * 1024;
    let bytes = kiloBytes * 1024;
    let text = ''
    for (let i = 1; i <= bytes; i++) {
        let hex = i.toString(16)
        while (hex.length < 8) {
            hex = '0' + hex;
        }
            text += hex;
    }
    console.log(text)

    let uriContent = URL.createObjectURL(new Blob([text], {type: 'text/plain'}));
    let element= document.createElement('a');
    element.setAttribute('href', uriContent);
    element.setAttribute('download', 'HexNumbers');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

generateFile(1)
