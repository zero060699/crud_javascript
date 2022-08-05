var selectRow = null;
function onFormSubmit(){
    event.preventDefault();
    var formData = readFormData();
    if(selectRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData);
    }
    resetForm();
}

//retrieve the data
function readFormData(){
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.perPrice;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}

//edit the data

function onEdit(td){
    selectRow = td.parentElement.parentElement;
    document.getElementById('productCode').value = selectRow.cells[0].innerHTML;
    document.getElementById('product').value = selectRow.cells[1].innerHTML;
    document.getElementById('qty').value = selectRow.cells[2].innerHTML;
    document.getElementById('perPrice').value = selectRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectRow.cells[0].innerHTML = formData.productCode;
    selectRow.cells[1].innerHTML = formData.product;
    selectRow.cells[2].innerHTML = formData.qty;
    selectRow.cells[3].innerHTML = formData.perPrice;
}

//delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
}

//reset the data
function resetForm(){
    document.getElementById('productCode').value = '';
    document.getElementById('product').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('perPrice').value = '';
}
