<%
Dim sessitem
response.write "<b>Session Object</b><br>"
For Each sessitem in Session.Contents
  Response.write(sessitem & " : " & Session.Contents(sessitem) & "<BR>")
Next

response.write "<b>The session is now aborted</b><br>"
session.abandon



%>
