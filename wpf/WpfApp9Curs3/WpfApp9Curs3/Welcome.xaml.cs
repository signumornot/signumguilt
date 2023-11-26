using System.Windows;

namespace WpfApp9Curs3
{
    /// <summary>
    /// Логика взаимодействия для Welcome.xaml
    /// </summary>
    public partial class Welcome : Window
    {
        public Welcome()
        {
            InitializeComponent();
        }

        private void exit_Click(object sender, RoutedEventArgs e)
        {
            Login login = new Login();
            login.Show();
            Close();
        }

        private void users_Click(object sender, RoutedEventArgs e)
        {
            Users users = new Users();
            users.Show();
            Close();
        }
    }
}
