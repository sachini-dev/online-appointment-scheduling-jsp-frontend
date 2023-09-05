function clearInputs() {
    $('#email').val('');
    $('#pswd').val('');
}
function LoginFind() {
    var Email = $('#email').val();
    var Pass = $('#pswd').val();

    if (Pass == "" | Email == "") {
        $('#errorTitle').text("Job Seeker Login Error Message");
        $('#errorBody').text("Can't Login with Empty Inputs!!!");
        $('#modal-danger').modal('toggle');
        clearInputs();
        
    } else {
        $.ajax({
            method:"POST",
            contentType:"application/json",
            url:"http://localhost:8080/oas/Appl/userLoginVerify/"+Email+"/"+Pass,
            async:true,
            success: function (data) {
                if (data.code==="00" && data.message==="LOGIN-PASS") {
                    var msg = "LOGIN-PASS";
                    var applicantEmail;

                    for (var loginResponse of data.content) {
                        applicantEmail = loginResponse.applicantEmail;
                    }

                    clearInputs();
                    $("#messageId").val(msg);
                    $("#user").val(applicantEmail);
                    $('#login-form').submit();

                } else if (data.code==="02" && data.message==="LOGIN-FALL") {
                    clearInputs();
                    $("#messageId").val('');
                    $("#type").val('');
                    $("#user").val('');
                    
                    $('#errorTitle').text("Job Seeker Login Error Message");
                    $('#errorBody').text("Email or Password is Incorrect. Try Again!!!");
                    $('#modal-danger').modal('toggle');

                } else {
                    clearInputs();
                    $("#messageId").val('');
                    $("#type").val('');
                    $("#user").val('');

                    $('#errorTitle').text("Job Seeker Login Error Message");
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

                $('#errorTitle').text("Job Seeker Login Error Message");
                $('#errorBody').text("Email or Password is Incorrect. Try Again!!!");
                $('#modal-danger').modal('toggle');
            }
        })
    }
    
}