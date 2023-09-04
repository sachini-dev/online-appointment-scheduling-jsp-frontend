<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import = " java.util.* " %>

<%
    String userPara = request.getParameter("user");
    session.setAttribute("userEmail",userPara);

    String typePara = request.getParameter("type");
    session.setAttribute("userType",typePara);

    String msgPara = request.getParameter("messageId");
    session.setAttribute("userMsg",msgPara);

    if (typePara.equalsIgnoreCase("1")) {
        //out.print(msgPara);
        String url = "admin/admin.jsp";
        response.sendRedirect(url);

    } else if (typePara.equalsIgnoreCase("2")) {
        //out.print(msgPara);
        String url = "consultant/consultant.jsp";
        response.sendRedirect(url);

    } else if (typePara.equalsIgnoreCase("3")) {
        //out.print(msgPara);
        String url = "reception/reception.jsp";
        response.sendRedirect(url);

    } else {
        //out.print("error");
        String url = "index.jsp";
        response.sendRedirect(url);
    }
%>
