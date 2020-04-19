using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Web.Security;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;

public partial class _Default : System.Web.UI.Page
{
    SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["dbcs"].ConnectionString.ToString());

    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
      
        if(Mysecure())
        {
            FormsAuthentication.RedirectFromLoginPage(tb_id.Text, CheckBox1.Checked);
        }
        else
        {
            Label1.Text = "user or password not valid";
        }
    }

    protected  bool Mysecure()
    {
        SqlCommand cmd = new SqlCommand("login", con);
        cmd.CommandType = CommandType.StoredProcedure;
        cmd.Parameters.AddWithValue("@email", tb_id.Text.ToLower().Trim());
        cmd.Parameters.AddWithValue("@pass", tb_pass.Text.ToLower().Trim());

        con.Open();
        int i = (int)cmd.ExecuteScalar();
        con.Close();
        if (i == 1)
        {
            return true;
        }
        else
        {
            return false;
        }


    }
}