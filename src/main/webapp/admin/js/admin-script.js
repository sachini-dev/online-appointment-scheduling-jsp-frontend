getAllEmployees();
var empEmailMain;
var empNICMain;
var empTypeMain;

function clearInputs() {
    $('#empAddName').val('');
    $('#empAddEmail').val('');
    $('#empAddAddress').val('');
    $('#empAddNIC').val('');

    $('#empAddName2').val('');
    $('#empAddEmail2').val('');
    $('#empAddAddress2').val('');
    $('#empAddType2').val('');

    $('#empAddName3').val('');
    $('#empAddEmail3').val('');
    $('#empAddAddress3').val('');
    $('#empAddType3').val('');

    empEmailMain = null;
    empNICMain = null;
}
//Employee Save
function saveEmp() {
    var empAddName = $('#empAddName').val();
    var empAddEmail = $('#empAddEmail').val();
    var empAddAddress = $('#empAddAddress').val();
    var empAddNIC = $('#empAddNIC').val();
    var empAddType = $('#empAddType').val();
    //console.log(empAddType);

    if (empAddName == "" | empAddEmail == "" | empAddNIC == "" | empAddAddress == "") {
        $('#errorTitle').text("Employee Save Error Message");
        $('#errorBody').text("Can't Save Data with Empty Inputs!!!");
        $('#modal-danger').modal('toggle');

        clearInputs();

    } else {
        //console.log(empAddType);
        $.ajax({
            method:"POST",
            contentType:"application/json",
            url:"http://localhost:8080/oas/Emp/saveEmp",
            async:true,
            data:JSON.stringify({
                "empEmail":empAddEmail,
                "empNIC":empAddNIC,
                "empName":empAddName,
                "empAddress":empAddAddress,
                "empType":empAddType
            }),
            success: function (data) {
                //console.log("Saved " + data.message);
                $('#successTitle').text("Employee Save Success Message");
                $('#successBody').text(data.message);
                $('#modal-success').modal('toggle');

                clearInputs();
            },
            error: function (xhr, exception,response) {
                //console.log("Employee Save Error");
                var error = eval("(" + xhr.responseText + ")");
                $('#errorTitle').text("Employee Save Error Message");
                $('#errorBody').text(error.message);
                $('#modal-danger').modal('toggle');

                clearInputs();
            }
        })
    }

}

//Employee Search Update start
function viewEmpEmail() {

    var empAddEmail = $('#empAddEmail2').val();

    if (empAddEmail == "") {
        $('#errorTitle').text("Employee Search Error Message");
        $('#errorBody').text("Can't Search Data with Empty Email Input!!!");
        $('#modal-danger').modal('toggle');

        clearInputs();

    } else {
        $.ajax({
            method:"POST",
            contentType:"application/json",
            url:"http://localhost:8080/oas/Emp/viewEmpByEmail/"+empAddEmail,
            async:true,
            success: function (data) {
                for (var empList of data.content) {
                    var empName = empList.empName;
                    var empAddress = empList.empAddress;
                    empEmailMain = empList.empEmail;
                    empNICMain = empList.empNIC;
                    var empType = empList.empType;
                    empTypeMain = empType;
                    var empTypeName = '';
                    if (empType == 2) {
                        empTypeName = "Consultant";
                    } else {
                        empTypeName = "Reception";
                    }
        
                    $('#empAddName2').val(empName);
                    $('#empAddAddress2').val(empAddress);
                    $('#empAddType2').val(empTypeName);
                }
    
            },
            error: function (xhr, exception,response) {
                var error = eval("(" + xhr.responseText + ")");
                $('#errorTitle').text("Employee Search Error Message");
                $('#errorBody').text(error.message);
                $('#modal-danger').modal('toggle');
    
                clearInputs();
            }
        })
    }
    
    
}

function viewEmpNIC() {

    var empAddNIC = $('#empAddEmail2').val();

    if (empAddNIC == "") {
        $('#errorTitle').text("Employee Search Error Message");
        $('#errorBody').text("Can't Search Data with Empty NIC Input!!!");
        $('#modal-danger').modal('toggle');

        clearInputs();

    } else {
        $.ajax({
            method:"POST",
            contentType:"application/json",
            url:"http://localhost:8080/oas/Emp/getEmpByNIC/"+empAddNIC,
            async:true,
            success: function (data) {
                for (var empList of data.content) {
                    var empName = empList.empName;
                    var empAddress = empList.empAddress;
                    empEmailMain = empList.empEmail;
                    empNICMain = empList.empNIC;
                    var empType = empList.empType;
                    empTypeMain = empType;
                    var empTypeName = '';
                    if (empType == 2) {
                        empTypeName = "Consultant";
                    } else {
                        empTypeName = "Reception";
                    }
        
                    $('#empAddName2').val(empName);
                    $('#empAddAddress2').val(empAddress);
                    $('#empAddType2').val(empTypeName);
                }
    
            },
            error: function (xhr, exception,response) {
                //console.log("Employee Save Error");
                var error = eval("(" + xhr.responseText + ")");
                $('#errorTitle').text("Employee Search Error Message");
                $('#errorBody').text(error.message);
                $('#modal-danger').modal('toggle');
    
                clearInputs();
            }
        })
    }

    
}

function updateEmp() {
    var empAddName = $('#empAddName2').val();
    var empAddEmail = empEmailMain;
    var empAddAddress = $('#empAddAddress2').val();
    var empAddNIC = empNICMain;
    var empAddType = empTypeMain;

    if (empAddName == "" | empAddEmail == "" | empAddNIC == "" | empAddAddress == "") {
        $('#errorTitle').text("Employee Update Error Message");
        $('#errorBody').text("Can't Update Data with Empty Inputs!!!");
        $('#modal-danger').modal('toggle');

        clearInputs();

    } else {
        $.ajax({
            method:"PUT",
            contentType:"application/json",
            url:"http://localhost:8080/oas/Emp/updateEmp",
            async:true,
            data:JSON.stringify({
                "empEmail":empAddEmail,
                "empNIC":empAddNIC,
                "empName":empAddName,
                "empAddress":empAddAddress,
                "empType":empAddType
            }),
            success: function (data) {
                $('#successTitle').text("Employee Update Success Message");
                $('#successBody').text(data.message);
                $('#modal-success').modal('toggle');
    
                clearInputs();
    
            },
            error: function (xhr, exception,response) {
                //console.log("Employee Save Error");
                var error = eval("(" + xhr.responseText + ")");
                $('#errorTitle').text("Employee Update Error Message");
                $('#errorBody').text(error.message);
                $('#modal-danger').modal('toggle');
    
                clearInputs();
            }
        })
    }

}
//Employee Search Update end

//Employee Search Delete start
function viewEmpEmail3() {

    var empAddEmail = $('#empAddEmail3').val();

    if (empAddEmail == "") {
        $('#errorTitle').text("Employee Search Error Message");
        $('#errorBody').text("Can't Search Data with Empty Email Input!!!");
        $('#modal-danger').modal('toggle');

        clearInputs();

    } else {
        $.ajax({
            method:"POST",
            contentType:"application/json",
            url:"http://localhost:8080/oas/Emp/viewEmpByEmail/"+empAddEmail,
            async:true,
            success: function (data) {

                for (var empList of data.content) {
                    var empName = empList.empName;
                    var empAddress = empList.empAddress;
                    empEmailMain = empList.empEmail;
                    empNICMain = empList.empNIC;
                    var empType = empList.empType;
                    empTypeMain = empType;
                    var empTypeName = '';
                    if (empType == 2) {
                        empTypeName = "Consultant";
                    } else {
                        empTypeName = "Reception";
                    }
        
                    $('#empAddName3').val(empName);
                    $('#empAddAddress3').val(empAddress);
                    $('#empAddType3').val(empTypeName);
                }
    
            },
            error: function (xhr, exception,response) {
                //console.log("Employee Save Error");
                var error = eval("(" + xhr.responseText + ")");
                $('#errorTitle').text("Employee Search Error Message");
                $('#errorBody').text(error.message);
                $('#modal-danger').modal('toggle');
    
                clearInputs();
            }
        })
    }

}

function viewEmpNIC3() {

    var empAddNIC = $('#empAddEmail3').val();

    if (empAddNIC == "") {
        $('#errorTitle').text("Employee Search Error Message");
        $('#errorBody').text("Can't Search Data with Empty NIC Input!!!");
        $('#modal-danger').modal('toggle');

        clearInputs();

    } else {
        $.ajax({
            method:"POST",
            contentType:"application/json",
            url:"http://localhost:8080/oas/Emp/getEmpByNIC/"+empAddNIC,
            async:true,
            success: function (data) {
                //console.log("Saved " + data.message);
                for (var empList of data.content) {
                    var empName = empList.empName;
                    var empAddress = empList.empAddress;
                    empEmailMain = empList.empEmail;
                    empNICMain = empList.empNIC;
                    var empType = empList.empType;
                    empTypeMain = empType;
                    var empTypeName = '';
                    if (empType == 2) {
                        empTypeName = "Consultant";
                    } else {
                        empTypeName = "Reception";
                    }
        
                    $('#empAddName3').val(empName);
                    $('#empAddAddress3').val(empAddress);
                    $('#empAddType3').val(empTypeName);
                }
    
            },
            error: function (xhr, exception,response) {
                //console.log("Employee Save Error");
                var error = eval("(" + xhr.responseText + ")");
                $('#errorTitle').text("Employee Search Error Message");
                $('#errorBody').text(error.message);
                $('#modal-danger').modal('toggle');
    
                clearInputs();
            }
        })
    }
}

function deleteEmp(){
    var empDeleteEmail = empEmailMain;

    var empAddEmail = $('#empAddEmail3').val();

    if (empAddEmail == "") {
        $('#errorTitle').text("Employee delete Error Message");
        $('#errorBody').text("Can't delete Data with Empty Email Input!!!");
        $('#modal-danger').modal('toggle');

        clearInputs();

    } else {
        $.ajax({
            method:"DELETE",
            url:"http://localhost:8080/oas/Emp/deleteEmp/"+empDeleteEmail,
            async:true,
            success: function (data) {
                $('#successTitle').text("Employee delete Success Message");
                $('#successBody').text(data.message);
                $('#modal-success').modal('toggle');
    
                clearInputs();
            },
            error: function (xhr, exception) {
                var error = eval("(" + xhr.responseText + ")");
                $('#errorTitle').text("Employee delete Error Message");
                $('#errorBody').text(error.message);
                $('#modal-danger').modal('toggle');
    
                clearInputs();
            }
        })
    }

}
//Employee Search Delete end

//View All
function getAllEmployees(){

    $.ajax({
        method:"POST",
        url:"http://localhost:8080/oas/Emp/getAllEmpWA",
        async:true,
        success: function (data) {
            if (data.code==="00"){
                $('#empAll').empty();
                for (var empAll of data.content){
                    var email = empAll.empEmail;
                    var name = empAll.empName;
                    var nic = empAll.empNIC;
                    var address = empAll.empAddress;
                    var typeNumber = empAll.empType;
                    var typeWord;
                    if (typeNumber == 2) {
                        typeWord = "Consultant";
                    } else {
                        typeWord = "Reception";
                    }

                    var rowData =`<tr>
                    <td>${email}</td>
                    <td>${name}</td>
                    <td>${nic}</td>
                    <td>${address}</td>
                    <td>${typeWord}</td>
                    </tr>`;
                    $('#empAll').append(rowData);
                }
            }
            if (data.code==="05" | data.code==="10"){
                $('#empAll').empty();
                for (var empAll of data.content){
                    $('#empAll').empty();
                    var rowData =`<tr>
                    <td colspan="5" style="text-align: center">Can't find any Records...</td>
                    </tr>`;
                    $('#empAll').append(rowData);
                }
            }
        },
        error: function (xhr, exception) {
            $('#empAll').empty();
            var rowData =`<tr>
            <td colspan="5" style="text-align: center">Can't find any Records...</td>
            </tr>`;
            $('#empAll').append(rowData);
        }
    })

}
