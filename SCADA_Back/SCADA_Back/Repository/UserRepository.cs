using SCADA_Back.Context;
using SCADA_Back.Model;

namespace SCADA_Back.Repository
{
	public class UserRepository: IUserRepository
	{
		private readonly SCADA_Context _context;

		public UserRepository(SCADA_Context context)
		{
			_context = context;
		}

		public User GetUser(int id)
		{
			return _context.Users.First(u => u.Id == id);
		}

		public User? GetUser(string email)
		{
			Console.WriteLine(email);
			return _context.Users.FirstOrDefault(u => u.Email.Equals(email));
		}

		public User AddUser(User user)
		{
			var entityEntry = _context.Users.Add(user);
			_context.SaveChanges();
			return entityEntry.Entity;
		}
	}
}
