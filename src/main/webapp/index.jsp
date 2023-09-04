<!-- <%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %> -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Online Appointment Scheduling System - Home</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">
</head>
<body class="hold-transition login-page">
<div class="login-box" style="width: 900px;">
  <!-- /.login-logo -->
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
      <a href="index.jsp" class="h1"><b>Online Appointment Scheduling</b></a>
    </div>
    <div class="card-body">
        <div class="container-fluid">
            <div class="row text-center">
                <div class="col mr-1">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <h1>Job Seekers</h1> 
                        </div>
                        <div class="col-12 mt-2">
                            <a class="btn btn-primary w-100" role="button" 
                            href="applicant/app-login.jsp">Job Seekers Login</a>
                        </div>
                        <div class="col-12 mt-2">
                            <a class="btn btn-primary w-100" role="button" 
                            href="applicant/app-register.jsp">Job Seekers Register</a>
                        </div>
                    </div>
                </div>
                <div class="col ml-1">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <h1>Consultation Centre</h1>
                        </div>
                        <div class="col-12 mt-2">
                            <a class="btn btn-primary w-100" role="button" 
                            href="companyLogin.jsp">Consultation Centre Login</a>
                        </div>
                        <div class="col-12 mt-2">
                            <a class="btn btn-primary w-100" role="button" 
                            href="companyRegister.jsp">Consultation Centre Register</a>
                        </div>
                        <!-- <div class="col-12 mt-2">
                            <a class="btn btn-primary w-100" role="button" 
                            href="admin/admin.jsp">Admin</a>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->
</div>
<!-- /.login-box -->

<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/adminlte.min.js"></script>
</body>
</html>
