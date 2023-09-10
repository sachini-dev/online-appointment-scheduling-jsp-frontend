
function clearInputs() {
    $('#email').val('');
    $('#pswd').val('');
}
//Employee Save
function saveEmp() {
    var empEmail = $('#email').val();
    var empPass = $('#pswd').val();
    var empType;

    //Empty check
    if (empPass == "" | empEmail == "") {
        $('#errorTitle').text("Employee New Login Account Error Message");
        $('#errorBody').text("Can't Create a New Login Account with Empty Inputs!!!");
        $('#modal-danger').modal('toggle');
        clearInputs();

    } else {
        //Login account check
        $.ajax({
            method:"POST",
            contentType:"application/json",
            url:"http://localhost:8080/oas/Emp/checkEmpByEmail/"+empEmail,
            async:true,
            success: function (data) {
                if (data.code==="00" && data.message==="Employee-Found") {
                    $('#errorTitle').text("Employee New Login Account Error Message");
                    $('#errorBody').
                    text("Employee already registered for Login Account. "+
                    "Please Login to your Account!!!");
                    $('#modal-danger').modal('toggle');
                }
            },
            error: function (xhr, exception,response) {
                // Employee email check in Employee datails
                $.ajax({
                    method:"POST",
                    contentType:"application/json",
                    url:"http://localhost:8080/oas/Emp/empByEmail/"+empEmail,
                    //Employee Details email check
                    async:true,
                    success: function (data) {
                        if (data.code==="00") {
                            //Employee type find
                            $.ajax({
                                method:"POST",
                                contentType:"application/json",
                                url:"http://localhost:8080/oas/Emp/empType/"+empEmail,
                                async:true,
                                success: function (data) {
                                    empType = data.content.empType;
                                    //Login account create
                                    $.ajax({
                                        method:"POST",
                                        contentType:"application/json",
                                        url:"http://localhost:8080/oas/Emp/saveEmpLogin",
                                        async:true,
                                        data:JSON.stringify({
                                            "recId":"",
                                            "empEmail":empEmail,
                                            "empPassword":empPass,
                                            "empType":empType
                                        }),
                                        success: function (data) {
                                            $('#successTitle').text("Employee New Login Account Success Message");
                                            $('#successBody').text("Login Account Save Successfully!!");
                                            $('#modal-success').modal('toggle');
                            
                                            clearInputs();
                                        },
                                        error: function (xhr, exception,response) {
                                            //console.log("Employee Save Error");
                                            var error = eval("(" + xhr.responseText + ")");
                                            $('#errorTitle').text("Employee New Login Account Error Message");
                                            $('#errorBody').text("Login Account Save Error!!");
                                            $('#modal-danger').modal('toggle');
                            
                                            clearInputs();
                                        }
                                    })
                                },
                                error: function (xhr, exception,response) {
                                    $('#errorTitle').text("Employee New Login Account Error Message");
                                    $('#errorBody').text("System Error. Try agian!!");
                                    $('#modal-danger').modal('toggle');
                        
                                    clearInputs();
                                }
                            })
                            
                        }
                    },
                    error: function (xhr, exception,response) {
                        var error = eval("(" + xhr.responseText + ")");
                        $('#errorTitle').text("Employee New Login Account Error Message");
                        $('#errorBody').text("Employee doesn't exist!! 1234");
                        $('#modal-danger').modal('toggle');
            
                        clearInputs();
                    }
                })
            }
        })
    }

}
