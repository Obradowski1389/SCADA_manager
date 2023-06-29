using SCADA_Back.Model;

namespace SCADA_Back.Service
{
	public interface IUserService
	{
		public User GetUser(int id);
		public void UpdateUser(User user);
		public User AddUser(User user);
	}
}
