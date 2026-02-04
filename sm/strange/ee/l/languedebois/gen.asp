<%
' Etablie la connection avec la base de donnee
' La variable de session CONN contien la chaine de caractere de la connection
' ====================================================
Dim Con,RS1
Dim DBConn
Dim FilePath

Response.Expires=0

siteRoot=Request.ServerVariables("APPL_PHYSICAL_PATH")
filePath=siteroot & "\Guy\stangemanivelle\strange\ee\l\languedebois\languedb.mdb"

filePath="F:\gbruneau\WWW\strangemanivelle\strange\ee\l\languedebois\languedb.mdb"

DBConn="DRIVER={Microsoft Access Driver (*.mdb)};DBQ=" & filePath

randomize

Set Con= Server.CreateObject("ADODB.Connection")
Con.Errors.Clear
Con.ConnectionTimeout =4
Con.Open DBConn

mySQL="select * from phrase order by [order]"
Set RS1 = Server.CreateObject("ADODB.Recordset")
'Set RS1.ActiveConnection=con
Set RS1.ActiveConnection=Con
RS1.Source = MySQL
RS1.CursorType = 0 '0=forward only, 2 dynamic, 3 static
RS1.CursorLocation = 2 ' 2=Server, 3=Client
RS1.LockType = 1 ' 3=rw, 1=ro
RS1.Open
    %>
    <title>Discours automatique</title>
    <body bgcolor="#FFFFFF" text="#333366" link="#333366" vlink="#333366" alink="#333366">   
     
<div align="justify"><font size="5" face="Georgia, Times New Roman, Times, serif"> 
  <%
While RS1.EOF=FALSE
    PhraseNo=RS1.Fields.Item("PhraseNo")
    mySQL="select * from phrasewords where phraseNo=" & CStr(PhraseNo) & " order by WordNo"
    Set RS2 = Server.CreateObject("ADODB.Recordset")
    Set RS2.ActiveConnection=con
    RS2.Source = MySQL
    RS2.CursorType = 0 '0=forward only, 2 dynamic, 3 static
    RS2.CursorLocation = 2 ' 2=Server, 3=Client
    RS2.LockType = 1 ' 3=rw, 1=ro
    RS2.Open
    s=""
    While RS2.EOF=FALSE
       NBR=RS2.Fields.Item("NBR")
       WordNo=RS2.Fields.Item("WordNo")
       WordID=Int((NBR) * Rnd + 1)
       mySQL="select * from Words where phraseNo=" & CStr(PhraseNo) & " and WordNo=" & CStr(WordNo) & " and WordId=" & CStr(WordId)
       Set RS3 = Server.CreateObject("ADODB.Recordset")
       Set RS3.ActiveConnection=Con
       RS3.Source = MySQL
       RS3.CursorType = 0 '0=forward only, 2 dynamic, 3 Static    
       RS3.CursorLocation = 2 ' 2=Server, 3=Client
       RS3.LockType = 1 ' 3=rw, 1=ro
       
       'response.write MySQL & con
       
       RS3.Open
       Word=RS3.Fields.Item("WORD")
	   if word="." then
          s=s & Word      
	   else
          s=s & " " & Word      
	   end if
       RS3.Close
       Set RS3=Nothing         
       rs2.movenext     
    Wend 
    %>
  <%=s%> 
  <%   
    Set RS2=Nothing
    RS1.MoveNext
Wend
RS1.close
con.close
Set con=nothing
%>
  </font></div>
<div align="center">
  <input type="button" name="ENCORE" value="Encore" onClick="javascript:window.location.reload()">
</div>
