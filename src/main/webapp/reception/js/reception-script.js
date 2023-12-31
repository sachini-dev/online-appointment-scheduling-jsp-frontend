getAllAppointments();

function clearInputs() {
    $('#addName').val('');
    $('#addTp').val('');
    $('#addEmail').val('');
    $('#addNIC').val('');
    $('#addDescription').val('');

}
//Appointment Save
function saveApp() {
    var addName = $('#addName').val();
    var addTp = $('#addTp').val();
    var addEmail = $('#addEmail').val();
    var addNIC = $('#addNIC').val();
    var addDescription = $('#addDescription').val();

    const dateTime = new Date();
    //2023091520
    var year = String(dateTime.getFullYear());
    var month = String(dateTime.getMonth()+1);
    var day = String(dateTime.getDate());
    var hours = String(dateTime.getHours());
    var millis = String(dateTime.getMilliseconds());
    var appointmentId = year+month+hours+day+millis;
    //console.log(appointmentId);


    if (addName == "" | addTp == "" | addEmail == "" | addNIC == "" | 
    addDescription == "") {
        $('#errorTitle').text("Appointment Save Error Message");
        $('#errorBody').text("Can't Save Data with Empty Inputs!!!");
        $('#modal-danger').modal('toggle');

        clearInputs();

    } else {
        //Add Applicant
        $.ajax({
            method:"POST",
            contentType:"application/json",
            url:"http://localhost:8080/oas/Appl/saveAppl",
            async:true,
            data:JSON.stringify({
                "applicantEmail":addEmail,
                "applicantName":addName,
                "applicantNIC":addNIC,
                "applicantTp":addTp
            }),
            //Add Appoinment
            success: function (data) {
                $.ajax({
                    method:"POST",
                    contentType:"application/json",
                    url:"http://localhost:8080/oas/App/saveApp",
                    async:true,
                    data:JSON.stringify({
                        "appointmentId":appointmentId,
                        "applicantEmail":addEmail,
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
            },
            error: function (xhr, exception,response) {
                var error = eval("(" + xhr.responseText + ")");
                $('#errorTitle').text("Appointment Save Error Message");
                $('#errorBody').text("Appointment Save Error!!!");
                $('#modal-danger').modal('toggle');

                clearInputs();
            }
        })
    }

}

//View All
function getAllAppointments(){

    $.ajax({
        method:"POST",
        url:"http://localhost:8080/oas/App/getAllApp",
        async:true,
        success: function (data) {
            if (data.code==="00"){
                $('#appAll').empty();
                for (var appAll of data.content){
                    var appId = appAll.appointmentId;
                    var name = appAll.applicantName;
                    var nic = appAll.applicantNIC;
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
                    <td>${typeWord}</td>
                    <td>${name}</td>
                    <td>${nic}</td>
                    <td>${telephone}</td>
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
                    <td colspan="6" style="text-align: center">Can't find any Records...</td>
                    </tr>`;
                    $('#appAll').append(rowData);
                }
            }
        },
        error: function (xhr, exception) {
            $('#appAll').empty();
            var rowData =`<tr>
            <td colspan="6" style="text-align: center">Can't find any Records...</td>
            </tr>`;
            $('#appAll').append(rowData);
        }
    })

}
