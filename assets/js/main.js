const numberOfRows = document.getElementById('rows');
const numberOfColumns = document.getElementById('columns');
const generate = document.getElementById('generate');
const  tableExport = document.getElementById('export');
const table = document.getElementById('table');
generate.onclick = function (e) {
    e.preventDefault();
    let tableBody = '';
    const rows = numberOfRows.value;
    const columns = numberOfColumns.value;
    for (let i = 0; i < rows; i++) {
        tableBody += `
    <tr> ${generateColumns(columns)}</tr>`;
    }
    console.log(tableBody);
    table.innerHTML = tableBody;
};
TableExport.onclick = function (e) {
    e.preventDefault();
    
   
};
function generateColumns(columns) {
    let result = '';
    for (let i = 0; i < columns; i++) {
        result += ` <td class="d-inline"><input type="text" class=" border-1 border-warning" ></td>`;
    }
    console.log(result);
    return result;
}
