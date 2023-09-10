var pageEmail = $('#userEmail').val();
getAllAppointments();

function clearInputs() {

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

//View All
function getAllAppointments(){

    
    $.ajax({
        method:"POST",
        url:"http://localhost:8080/oas/App/getAppByTypeEmail/1/"+pageEmail,
        async:true,
        success: function (data) {
            if (data.code==="00"){
                $('#appAll').empty();
                for (var appAll of data.content){
                    var appId = appAll.appointmentId;
                    var name = appAll.applicantName;
                    var nic = appAll.applicantNIC;
                    var  email = appAll.applicantEmail;
                    var telephone = appAll.applicantTp;
                    var appDetails = appAll.appointmentDetails;
                    var typeNumber = appAll.appointmentType;
                    var typeWord;
                    if (typeNumber == 0) {
                        typeWord = "Pending";
                    } else {
                        typeWord = "Completed";
                    }

                    var rowData =`<tr>
                    <td>${appId}</td>
                    <td>${appDetails}</td>
                    </tr>`;
                    $('#appAll').append(rowData);
                }
            }
            if (data.code==="05" | data.code==="10"){
                $('#appAll').empty();
                for (var appAll of data.content){
                    $('#appAll').empty();
                    var rowData =`<tr>
                    <td colspan="2" style="text-align: center">Can't find any Records...</td>
                    </tr>`;
                    $('#appAll').append(rowData);
                }
            }
        },
        error: function (xhr, exception) {
            $('#appAll').empty();
            var rowData =`<tr>
            <td colspan="2" style="text-align: center">Can't find any Records...</td>
            </tr>`;
            $('#appAll').append(rowData);
        }
    })

}