getAllAppointments();

function clearInputs() {
    $('#appId').val('');
    $('#applName').val('');
    $('#applTp').val('');
    $('#applNIC').val('');
    $('#applEmail').val('');
    $('#appDescription').val('');
}
//Appointment Search Complete start
function viewAppointment() {

    var appId = $('#appId').val();
    /* var applName = $('#applName').val();
    var appId = $('#appId').val();
    var appId = $('#appId').val();
    var appId = $('#appId').val(); */


    if (appId == "") {
        $('#errorTitle').text("Appointment Search Error Message");
        $('#errorBody').text("Can't Search Data with Empty Appointment ID Input!!!");
        $('#modal-danger').modal('toggle');

        clearInputs();

    } else {
        $.ajax({
            method:"POST",
            contentType:"application/json",
            url:"http://localhost:8080/oas/App/getAppById/"+appId,
            async:true,
            success: function (data) {
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
        
                    $('#applName').val(name);
                    $('#applTp').val(telephone);
                    $('#applNIC').val(nic);
                    $('#applEmail').val(email);
                    $('#appDescription').val(appDetails);
                }
    
            },
            error: function (xhr, exception,response) {
                $('#errorTitle').text("Appointment Search Error Message");
                $('#errorBody').text("Can't Find  Appointment ID!!!");
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
                $('#appAll1').empty();
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
                    <td>${name}</td>
                    <td>${nic}</td>
                    <td>${email}</td>
                    <td>${telephone}</td>
                    <td>${appDetails}</td>
                    </tr>`;
                    $('#appAll1').append(rowData);
                }
            }
            if (data.code==="05" | data.code==="10"){
                $('#appAll1').empty();
                for (var appAll of data.content){
                    $('#appAll1').empty();
                    var rowData =`<tr>
                    <td colspan="6" style="text-align: center">Can't find any Records...</td>
                    </tr>`;
                    $('#appAll1').append(rowData);
                }
            }
        },
        error: function (xhr, exception) {
            $('#appAll1').empty();
            var rowData =`<tr>
            <td colspan="6" style="text-align: center">Can't find any Records...</td>
            </tr>`;
            $('#appAll1').append(rowData);
        }
    })

}

//View Pending
function getPendingAppointments(){

    $.ajax({
        method:"POST",
        url:"http://localhost:8080/oas/App/getAppByType/0",
        async:true,
        success: function (data) {
            if (data.code==="00"){
                $('#appAll2').empty();
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
                    <td>${name}</td>
                    <td>${nic}</td>
                    <td>${email}</td>
                    <td>${telephone}</td>
                    <td>${appDetails}</td>
                    </tr>`;
                    $('#appAll2').append(rowData);
                }
            }
            if (data.code==="05" | data.code==="10"){
                $('#appAll2').empty();
                for (var appAll of data.content){
                    $('#appAll2').empty();
                    var rowData =`<tr>
                    <td colspan="6" style="text-align: center">Can't find any Records...</td>
                    </tr>`;
                    $('#appAll2').append(rowData);
                }
            }
        },
        error: function (xhr, exception) {
            $('#appAll2').empty();
            var rowData =`<tr>
            <td colspan="6" style="text-align: center">Can't find any Records...</td>
            </tr>`;
            $('#appAll2').append(rowData);
        }
    })

}

//View Completed
function getCompletedAppointments(){

    $.ajax({
        method:"POST",
        url:"http://localhost:8080/oas/App/getAppByType/1",
        async:true,
        success: function (data) {
            if (data.code==="00"){
                $('#appAll3').empty();
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
                    <td>${name}</td>
                    <td>${nic}</td>
                    <td>${email}</td>
                    <td>${telephone}</td>
                    <td>${appDetails}</td>
                    </tr>`;
                    $('#appAll3').append(rowData);
                }
            }
            if (data.code==="05" | data.code==="10"){
                $('#appAll3').empty();
                for (var appAll of data.content){
                    $('#appAll3').empty();
                    var rowData =`<tr>
                    <td colspan="6" style="text-align: center">Can't find any Records...</td>
                    </tr>`;
                    $('#appAll3').append(rowData);
                }
            }
        },
        error: function (xhr, exception) {
            $('#appAll3').empty();
            var rowData =`<tr>
            <td colspan="6" style="text-align: center">Can't find any Records...</td>
            </tr>`;
            $('#appAll3').append(rowData);
        }
    })

}