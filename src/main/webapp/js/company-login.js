function clearInputs() {
    $('#email').val('');
    $('#pswd').val('');
}
function empLoginFind() {
    var empEmail = $('#email').val();
    var empPass = $('#pswd').val();

    if (empPass == "" | empEmail == "") {
        $('#errorTitle').text("Employee Login Error Message");
        $('#errorBody').text("Can't Login with Empty Inputs!!!");
        $('#modal-danger').modal('toggle');
        clearInputs();
        
    } else {
        $.ajax({
            method:"POST",
            contentType:"application/json",
            url:"http://localhost:8080/oas/Emp/userLoginVerify/"+empEmail+"/"+empPass,
            async:true,
            success: function (data) {
                if (data.code==="00" && data.message==="LOGIN-PASS") {
                    var msg = "LOGIN-PASS";
                    var empEmail;
                    var empType;

                    for (var loginResponse of data.content) {
                        empEmail = loginResponse.empEmail;
                        empType = loginResponse.empType;
                    }
                    //document.location='admin/admin.jsp';
                    //window.location.assign('checkLogin.jsp?user=11&type=22&messageId='+msg);
                    clearInputs();
                    $("#messageId").val(msg);
                    $("#type").val(empType);
                    $("#user").val(empEmail);
                    $('#login-form').submit();

                } else if (data.code==="02" && data.message==="LOGIN-FALL") {
                    clearInputs();
                    $("#messageId").val('');
                    $("#type").val('');
                    $("#user").val('');
                    
                    $('#errorTitle').text("Employee Login Error Message");
                    $('#errorBody').text("Email or Password is Incorrect. Try Again!!!");
                    $('#modal-danger').modal('toggle');

                } else {
                    clearInputs();
                    $("#messageId").val('');
                    $("#type").val('');
                    $("#user").val('');

                    $('#errorTitle').text("Employee Login Error Message");
                    $('#errorBody').text("Email or Password is Incorrect. Try Again!!!");
                    $('#modal-danger').modal('toggle');

                }
            },
            error: function (xhr, exception,response) {
                var error = eval("(" + xhr.responseText + ")");
                clearInputs();
                $("#messageId").val('');
                $("#type").val('');
                $("#user").val('');

                $('#errorTitle').text("Employee Login Error Message");
                $('#errorBody').text("Database Error!!!");
                $('#modal-danger').modal('toggle');
            }
        })
    }
    
}