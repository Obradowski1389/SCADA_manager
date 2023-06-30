using SCADA_Back.Model;

namespace SCADA_Back.Repository
{
	public interface IUserRepository
	{
		public User GetUser(int id);
		public User? GetUser(string email);
		public User AddUser(User user);
		//public User Login(string username, string password);

	}
}
