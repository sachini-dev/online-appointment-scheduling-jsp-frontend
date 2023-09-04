<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@page session="true"%>
<%
    session.setAttribute("userEmail", null);
    session.setAttribute("userType", null);
    session.setAttribute("userMsg", null);
    session.invalidate();
    String url = "../companyLogin.jsp";
    response.sendRedirect(url);
%>