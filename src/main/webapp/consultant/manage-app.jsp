<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page session="true"%>
<%
  String user = session.getAttribute("userEmail").toString();
  String type = session.getAttribute("userType").toString();
  String msg = session.getAttribute("userMsg").toString();
  //out.print(msg);

  if(!(msg.equals("LOGIN-PASS")) && !(type.equals("2"))) {
    response.sendRedirect("../companyLogin.jsp");
  } else if (msg.equals("LOGIN-PASS") && type.equals("2") && !(user.equals(""))){

  } else if (msg.equals("")) {
    response.sendRedirect("../companyLogin.jsp");
  } else {
    response.sendRedirect("../companyLogin.jsp");
  }
%>
<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Online Appointment Scheduling | Consultant</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="../plugins/fontawesome-free/css/all.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="../dist/css/adminlte.min.css">
</head>
<body class="hold-transition sidebar-mini">
<div class="wrapper">

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="consultant.jsp" class="nav-link">Home</a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
          <a href="logout.jsp" class="nav-link">
            <i class="fas fa-sign-out-alt fa-lg"></i>&nbsp;Logout >>>
        </a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="consultant.jsp" class="brand-link">
      <img src="../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">Online Scheduling</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="../dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Consultant</a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- appl icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item">
            <a href="consultant.jsp" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </a>

          </li>
          <li class="nav-item">
            <a href="view-app.jsp" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                View All Appointment
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="view-app2.jsp" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                View Pending
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="view-app3.jsp" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                View Completed
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="manage-app.jsp" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Appointment Manage
              </p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Appointment Manage</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Appointment Manage</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <!-- message view -->
        <!-- <div class="row">
          <div class="col-12">
            <div class="alert alert-danger alert-dismissible">
              <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
              <h5><i class="icon fas fa-ban"></i> Alert!</h5>
              Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my
              entire
              soul, like these sweet mornings of spring which I enjoy with my whole heart.
            </div>
          </div>
        </div> -->
        <div class="row mb-2">
          <div class="col">
            <a class="btn btn-primary" href="view-app2.jsp" role="button">
              View Pending Appointments</a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Complete Appointment</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form>
                <!-- <div class="card-body" style="margin-bottom: 2.4rem !important;"> -->
                <div class="card-body">
                  <div class="row">
                    <div class="col-8">
                      <div class="form-group">
                        <label for="appId">Appointments ID</label>
                        <input type="text" class="form-control" id="appId" 
                        placeholder="Enter Appointments ID">
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="form-group">
                        <label>&nbsp;</label>
                        <button type="button" class="btn btn-primary w-100" 
                      onclick="viewAppointment()">Search</button>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col">
                      <div class="form-group">
                        <label for="applName">Applicant Name</label>
                        <input type="text" class="form-control" id="applName" 
                        placeholder="Applicant Name">
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-group">
                        <label for="applTp">Applicant Telephone</label>
                        <input type="text" class="form-control" id="applTp" 
                        placeholder="Applicant Telephone">
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col">
                      <div class="form-group">
                        <label for="applNIC">Applicant NIC</label>
                        <input type="email" class="form-control" id="applNIC" 
                        placeholder="Applicant NIC">
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-group">
                        <label for="applEmail">Applicant Email</label>
                        <input type="text" class="form-control" id="applEmail" 
                        placeholder="Applicant Email">
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col">
                      <div class="form-group">
                        <label for="appDescription">Appointment Details</label>
                        <textarea class="form-control" rows="3" 
                        placeholder="Appointment Details...." 
                        id="appDescription"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <div class="row">
                    <div class="col">
                      <button type="button" class="btn btn-primary w-100" 
                      onclick="updateApp()">Review and Complete</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
    
    <!-- success message -->
    <div class="modal fade" id="modal-success">
      <div class="modal-dialog">
        <div class="modal-content bg-success">
          <div class="modal-header">
            <h4 class="modal-title" id="successTitle"></h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p id="successBody"></p>
          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-outline-light" data-dismiss="modal">Close</button>
            <!-- <button type="button" class="btn btn-outline-light">Save changes</button> -->
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>

    <!-- error message -->
    <div class="modal fade" id="modal-danger">
      <div class="modal-dialog">
        <div class="modal-content bg-danger">
          <div class="modal-header">
            <h4 class="modal-title" id="errorTitle"></h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- <p>One fine body&hellip;</p> -->
            <p id="errorBody"></p>
          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-outline-light" data-dismiss="modal">Close</button>
            <!-- <button type="button" class="btn btn-outline-light">Save changes</button> -->
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>

  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->

  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  <footer class="main-footer" style="background-color: #1b3973;">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
      Online Appointment Scheduling System
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2023</strong>
  </footer>
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->

<!-- jQuery -->
<script src="../plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="../dist/js/adminlte.min.js"></script>
<!-- Other JS file -->
<script src="js/consultant-script-1.js"></script>
</body>
</html>
