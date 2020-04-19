<%@ Page Language="C#" AutoEventWireup="true" CodeFile="login.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <h1 style="color:green;">login here</h1>
            <br />
            enter your id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:TextBox ID="tb_id" runat="server"></asp:TextBox>
            <br />
            <br />
            enter password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:TextBox ID="tb_pass" runat="server"></asp:TextBox>
            <br />
            <br />
            <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="login" Width="100px" />
            <br />
            <br />
            <asp:CheckBox ID="CheckBox1" runat="server" Text="Remember Me" />
            <br />
            <br />
            <asp:Label ID="Label1" runat="server" Font-Size="20pt" ForeColor="Red"></asp:Label>
            <br />
            <br />
        </div>
    </form>
</body>
</html>
