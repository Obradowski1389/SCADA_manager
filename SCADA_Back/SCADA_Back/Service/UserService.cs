using SCADA_Back.Context;
using SCADA_Back.Exceptions;
using SCADA_Back.Model;
using SCADA_Back.Model.DTO;
using SCADA_Back.Repository;


namespace SCADA_Back.Service
{
	public class UserService : IUserService
	{

		private readonly IUserRepository _userRepository;

		public UserService(IUserRepository userRepository)
		{
			_userRepository = userRepository;
		}

		public User GetUser(int id)
		{
			return _userRepository.GetUser(id);
			
		}

		public User AddUser(User user)
		{
			Console.Error.WriteLine(user.Email);
			User? existing = _userRepository.GetUser(user.Email);
			if (existing != null)
			{
				throw new Exception("User with this email already exists");
			}
			//user.Role = UserRole.USER;
			return _userRepository.AddUser(user);
		}

		
		public void UpdateUser(User user)
		{
			throw new NotImplementedException();
		}


		//public void Login(LoginDTO loginDTO)
		//{

		//}
	}
}
