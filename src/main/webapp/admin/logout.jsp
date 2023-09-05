<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@page session="true"%>
<%
    session.setAttribute("userEmail", "");
    session.setAttribute("userType", "");
    session.setAttribute("userMsg", "");
    //session.invalidate();
    String url = "../companyLogin.jsp";
    response.sendRedirect(url);
%>
<%@page session="false"%>