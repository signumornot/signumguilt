using System.Windows;
using System.Data;
using System.Text.RegularExpressions;
using MySql.Data.MySqlClient;

namespace WpfApp9Curs3
{
    /// <summary>
    /// Логика взаимодействия для MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Login_Click(object sender, RoutedEventArgs e)
        {
            Login login = new Login();
            login.Show();
            Close();
        }

        private void button3_Click(object sender, RoutedEventArgs e)
        {
            Close();
        }

        private void Reset()
        {
            textBoxLogin.Text = "";
            textBoxFirstName.Text = "";
            textBoxLastName.Text = "";
            textBoxEmail.Text = "";
            passwordBox1.Password = "";
            passwordBoxConfirm.Password = "";
        }

        private void Submit_Click(object sender, RoutedEventArgs e)
        {
            if (textBoxEmail.Text.Length == 0)
            {
                errormessage.Text = "Enter an Email.";
                textBoxEmail.Focus();
            }
            else if (!Regex.IsMatch(textBoxEmail.Text, @"^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$"))
            {
                errormessage.Text = "Введите корректный адрес эл почты.";
                textBoxEmail.Select(0, textBoxEmail.Text.Length);
                textBoxEmail.Focus();
            }
            else
            {
                string login = textBoxLogin.Text;
                string firstname = textBoxFirstName.Text;
                string lastname = textBoxLastName.Text;
                string email = textBoxEmail.Text;
                string password = passwordBox1.Password;

                if (passwordBox1.Password.Length == 0)
                {
                    errormessage.Text = "Введите пароль.";
                    passwordBox1.Focus();
                }
                else if (passwordBoxConfirm.Password.Length == 0)
                {
                    errormessage.Text = "Подтвердите пароль.";
                    passwordBoxConfirm.Focus();
                }
                else if (passwordBox1.Password != passwordBoxConfirm.Password)
                {
                    errormessage.Text = "Пароли не совпадают!";
                    passwordBoxConfirm.Focus();
                }
                else
                {
                    errormessage.Text = "";
                    string connectionString = "Server=localhost;Port=3306;Database=firstever;Uid=root;Pwd=030201qWq!kk;";
                    MySqlConnection connection = new MySqlConnection(connectionString);
                    connection.Open();
                    string query = "INSERT INTO cats2 (login, firstName, lastName, email, pass) VALUES (@login, @FirstName, @LastName, @Email, @Password)";

                    MySqlCommand cmd = new MySqlCommand(query, connection);
                    cmd.Parameters.AddWithValue("@FirstName", firstname);
                    cmd.Parameters.AddWithValue("@LastName", lastname);
                    cmd.Parameters.AddWithValue("@Email", email);
                    cmd.Parameters.AddWithValue("@Password", password);
                    cmd.Parameters.AddWithValue("@login", login);

                    cmd.ExecuteNonQuery();
                    connection.Close();
                    errormessage.Text = "Вы успешно зарегистрированы!";
                    Reset();
                }
            }
        }
    }
}