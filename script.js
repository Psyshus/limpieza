document.getElementById("cleanButton").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;

    // Expresión regular para capturar las líneas
    const regex = /(\d{1,2}\s[a-zA-Z]+\s\d{4})\s+([\w*\s'.&-]+?)\s+(\d{1,3}(?:,\d{3})*(?:\.\d{2})?|)\s+(\d{1,3}(?:,\d{3})*(?:\.\d{2})?|)/g;
    
    let matches;
    let resultTable = "| Fecha       | Nombre                   | Pagos      | Cargos     |\n";
    resultTable += "|-------------|--------------------------|------------|------------|\n";

    while ((matches = regex.exec(inputText)) !== null) {
        const [_, fecha, nombre, pagos, cargos] = matches;

        resultTable += `| ${fecha.padEnd(11)} | ${nombre.padEnd(25)} | ${pagos.padEnd(10)} | ${cargos.padEnd(10)} |\n`;
    }

    document.getElementById("outputTable").textContent = resultTable;
});
