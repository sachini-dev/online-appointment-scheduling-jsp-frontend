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
    var year = String(dateTime.getFullYear);
    var month = String(dateTime.getMonth);
    var hours = String(dateTime.getHours);
    var millis = String(dateTime.getMilliseconds);
    var appointmentId = year+month+hours+millis;

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
                        "appointmentDetails":addName,
                        "appointmentType":"0",
                    }),
                    success: function (data) {
                        $('#successTitle').text("Appointment Save Success Message");
                        $('#successBody').text("Appointment Save Successfully. Appointment ID - "
                        +appointmentId);
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
                //console.log("Appointment Save Error");
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
