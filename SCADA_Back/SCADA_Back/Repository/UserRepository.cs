using SCADA_Back.Context;
using SCADA_Back.Model;
using SCADA_Back.Repository.IRepo;

namespace SCADA_Back.Repository
{
    public class UserRepository: IUserRepository
	{
		private readonly Users_Context _users_context;

		public UserRepository(Users_Context context)
		{
			_users_context = context;
		}

		public User GetUser(int id)
		{
			return _users_context.Users.First(u => u.Id == id);
		}

		public User? GetUser(string username)
		{
			Console.WriteLine(username);
			return _users_context.Users.FirstOrDefault(u => u.Username.Equals(username));
		}

		public User AddUser(User user)
		{
			var entityEntry = _users_context.Users.Add(user);
			_users_context.SaveChanges();
			return entityEntry.Entity;
		}
	}
}
