<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import = " java.util.* " %>

<%
    String userPara = request.getParameter("user");
    session.setAttribute("userEmail",userPara);

    String msgPara = request.getParameter("messageId");
    session.setAttribute("userMsg",msgPara);

    if (msgPara.equalsIgnoreCase("LOGIN-PASS")) {
        //out.print(msgPara);
        String url = "applicant.jsp";
        response.sendRedirect(url);
    } else {
        //out.print("error");
        String url = "app-login.jsp";
        response.sendRedirect(url);
    }
%>
