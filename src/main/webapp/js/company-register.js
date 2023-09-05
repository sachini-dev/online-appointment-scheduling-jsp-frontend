
function clearInputs() {

}
//Employee Save
function saveEmp() {
    var empEmail = $('#email').val();
    var empPass = $('#pswd').val();

    if (empPass == "" | empEmail == "") {
        $('#errorTitle').text("Employee New Login Account Error Message");
        $('#errorBody').text("Can't Create a New Login Account with Empty Inputs!!!");
        $('#modal-danger').modal('toggle');
        clearInputs();

    } else {
        $.ajax({
            method:"POST",
            contentType:"application/json",
            url:"http://localhost:8080/oas/Emp/checkEmpByEmail/"+empEmail,
            async:true,
            success: function (data) {
                if (data.code==="00" && data.message==="Employee-Found") {
                    $('#errorTitle').text("Employee New Login Account Error Message");
                    $('#errorBody').
                    text("Employee already registered for Login Account. Please Login to your Account!!!");
                    $('#modal-danger').modal('toggle');
                } else {
                    // Reg
                    $.ajax({
                        method:"POST",
                        contentType:"application/json",
                        url:"http://localhost:8080/oas/Emp/checkEmpByEmail/"+empEmail,
                        async:true,
                        success: function (data) {
                            if (data.code==="00" && data.message==="Employee-Found") {
                                $('#errorTitle').text("Employee New Login Account Error Message");
                                $('#errorBody').
                                text("Employee already registered for Login Account. Please Login to your Account!!!");
                                $('#modal-danger').modal('toggle');
                            } else {
                                
                            }
                        },
                        error: function (xhr, exception,response) {
                            var error = eval("(" + xhr.responseText + ")");
                            $('#errorTitle').text("Employee New Login Account Error Message");
                            $('#errorBody').text("Account Creation Error!!");
                            $('#modal-danger').modal('toggle');
                
                            clearInputs();
                        }
                    })
                }
            },
            error: function (xhr, exception,response) {
                var error = eval("(" + xhr.responseText + ")");
                $('#errorTitle').text("Employee New Login Account Error Message");
                $('#errorBody').text("Account Creation Error!!");
                $('#modal-danger').modal('toggle');
    
                clearInputs();
            }
        })
    }

}
