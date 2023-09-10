var pageEmail = $('#userEmail').val();
getAllAppointments();

function clearInputs() {
    $('#addDescription').val('');
}
function clearInputs2() {
    $('#addName').val('');
    $('#addEmail').val('');
    $('#addNIC').val('');
    $('#addTp').val('');
    $('#addPass').val('');

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
        url:"http://localhost:8080/oas/App/getAppByEmail/"+pageEmail,
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

//Appointment Save
function saveApp() {

    var addDescription = $('#addDescription').val();

    const dateTime = new Date();
    var year = String(dateTime.getFullYear());
    var month = String(dateTime.getMonth()+1);
    var day = String(dateTime.getDate());
    var hours = String(dateTime.getHours());
    var millis = String(dateTime.getMilliseconds());
    var appointmentId = year+month+hours+day+millis;

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/oas/App/saveApp",
        async:true,
        data:JSON.stringify({
            "appointmentId":appointmentId,
            "applicantEmail":pageEmail,
            "appointmentDetails":addDescription,
            "appointmentType":"0"
        }),
        success: function (data) {
            $('#successTitle').text("Appointment Save Success Message");
            $('#successBody').text("Appointment Save Successfully. "+
            "Appointment ID - "+appointmentId);
            $('#modal-success').modal('toggle');

            clearInputs();

        },
        error: function (xhr, exception,response) {
            //console.log("Appointment Save Error");
            var error = eval("(" + xhr.responseText + ")");
            $('#errorTitle').text("Appointment Save Error Message");
            $('#errorBody').text("Appointment Save Error!!!");
            $('#modal-danger').modal('toggle');

            clearInputs();
        }
    })
}

//Applicant Save
function saveApplicant() {
    var addName = $('#addName').val();
    var addEmail = $('#addEmail').val();
    var addNIC = $('#addNIC').val();
    var addTp = $('#addTp').val();
    var addPass = $('#addPass').val();

    if (addName == "" | addTp == "" | addEmail == "" | addNIC == "" | 
    addPass == "") {
        $('#errorTitle').text("Applicant Registration Error Message");
        $('#errorBody').text("Can't Register with Empty Inputs!!!");
        $('#modal-danger').modal('toggle');

        clearInputs2();

    } else {
        //Add Login
        $.ajax({
            method:"POST",
            contentType:"application/json",
            url:"http://localhost:8080/oas/Appl/saveLogin",
            async:true,
            data:JSON.stringify({
                "applicantEmail":addEmail,
                "applicantPassword":addPass,
            }),
            success: function (data) {
                //Add Applicant
                $.ajax({
                    method:"POST",
                    contentType:"application/json",
                    url:"http://localhost:8080/oas/Appl/saveAppl2",
                    async:true,
                    data:JSON.stringify({
                        "applicantEmail":addEmail,
                        "applicantName":addName,
                        "applicantNIC":addNIC,
                        "applicantTp":addTp
                    }),
                    //Add Appoinment
                    success: function (data) {
                        $('#successTitle').text("Applicant Registration Success Message");
                        $('#successBody').text("Applicant Registration Successfully!!!");
                        $('#modal-success').modal('toggle');
            
                        clearInputs2();
                    },
                    error: function (xhr, exception,response) {
                        var error = eval("(" + xhr.responseText + ")");
                        $('#errorTitle').text("Applicant Registration Error Message");
                        $('#errorBody').text("Applicant Registration Error!!!");
                        $('#modal-danger').modal('toggle');

                        clearInputs2();
                    }
                })
    
            },
            error: function (xhr, exception,response) {
                $('#errorTitle').text("Applicant Registration Error Message");
                $('#errorBody').text("Applicant already have an account!!!");
                $('#modal-danger').modal('toggle');
    
                clearInputs2();
            }
        })
    }
}