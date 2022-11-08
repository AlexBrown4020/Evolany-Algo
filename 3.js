const generateFile = (mb) => {
    let bytes = (1024 * 1024) * mb;
    let text = ''
    for (let i = 1; i <= bytes; i++) {
        if (text.length > bytes) {
            break;
        }
        let hex = i.toString(16)
        while (hex.length < 8) {
            hex = '0' + hex;
        }
            text += hex;
    }
    let element= document.createElement('a');
    let uriContent = URL.createObjectURL(new Blob([text], {type: 'text/plain'}));
    element.setAttribute('href', uriContent);
    element.setAttribute('download', 'HexNumbers');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
