using System.Windows;
using System.Data;
using MySql.Data.MySqlClient;

namespace WpfApp9Curs3
{
    /// <summary>
    /// Логика взаимодействия для Login.xaml
    /// </summary>
    public partial class Login : Window
    {
        public Login()
        {
            InitializeComponent();
        }

        MainWindow registration = new MainWindow();
        Welcome welcome = new Welcome();

        private void button1_Click(object sender, RoutedEventArgs e)
        {
            if (textBoxLogin.Text.Length == 0)
            {
                errormessage.Text = "Введите логин.";
                textBoxLogin.Focus();
            }
            else
            {
                string login = textBoxLogin.Text;
                string password = passwordBox1.Password;
                string connectionString = "Server=localhost;Port=3306;Database=firstever;Uid=root;Pwd=030201qWq!kk;";
                MySqlConnection connection = new MySqlConnection(connectionString);
                connection.Open();

                MySqlCommand cmd = new MySqlCommand("Select * from cats2 where login='" + login + "' and pass='" + password + "'", connection);
                cmd.CommandType = CommandType.Text;
                MySqlDataAdapter adapter = new MySqlDataAdapter();
                adapter.SelectCommand = cmd;
                DataSet dataSet = new DataSet();
                adapter.Fill(dataSet);
                if (dataSet.Tables[0].Rows.Count > 0)
                {
                    welcome.Show();
                    Close();
                }
                else
                {
                    errormessage.Text = "Не удалось найти учётную запись!";
                }
                connection.Close();
            }
        }

        private void button2_Click(object sender, RoutedEventArgs e)
        {
            registration.Show();
            Close();
        }
    }
}
