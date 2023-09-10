<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@page session="true"%>

<%
    session.setAttribute("userEmail", "");
    session.setAttribute("userType", "");
    session.setAttribute("userMsg", "");
    String url = "app-login.jsp";
    response.sendRedirect(url);
%>