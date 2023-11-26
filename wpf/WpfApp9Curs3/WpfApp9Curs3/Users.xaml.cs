using System;
using System.Windows;
using MySql.Data.MySqlClient;

namespace WpfApp9Curs3
{
    /// <summary>
    /// Логика взаимодействия для Users.xaml
    /// </summary>
    public partial class Users : Window
    {
        public Users()
        {
            InitializeComponent();
        }
        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            DisplayCatData();
        }

        private void DisplayCatData()
        {
            try
            {
                string connectionString = "Server=localhost;Port=3306;Database=firstever;Uid=root;Pwd=030201qWq!kk;";
                MySqlConnection connection = new MySqlConnection(connectionString);
                connection.Open();

                string query = "SELECT id,login,firstName,lastName,email FROM cats2"; // SQL-запрос для выборки всех значений из таблицы cats

                MySqlCommand command = new MySqlCommand(query, connection);
                MySqlDataReader reader = command.ExecuteReader();

                // Создаем DataTable для хранения результатов запроса
                System.Data.DataTable dataTable = new System.Data.DataTable();
                dataTable.Load(reader);

                // Устанавливаем DataTable в качестве источника данных для DataGrid
                dataGrid.ItemsSource = dataTable.DefaultView;

                reader.Close();
                connection.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Ошибка: {ex.Message}");
            }
        }

        private void exit_Click(object sender, RoutedEventArgs e)
        {
            Welcome welcome = new Welcome();
            welcome.Show();
            Close();
        }
    }
}
