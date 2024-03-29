﻿using SCADA_Back.Model;
using SCADA_Back.Model.DTO;
using SCADA_Back.Repository.IRepo;
using SCADA_Back.Service.IService;

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
			User? existing = _userRepository.GetUser(user.Username);
			if (existing != null)
			{
				throw new Exception("User with this username already exists");
			}
			user.Role = UserRole.USER;
			return _userRepository.AddUser(user);
		}

		public User AddAdmin(User user)
		{
			return _userRepository.AddUser(user);
		}

		
		public void UpdateUser(User user)
		{
			throw new NotImplementedException();
		}

		public User? Login(LoginDTO loginDTO)
		{
			User? existing = _userRepository.GetUser(loginDTO.Username);
			if(existing != null)
			{
				if(existing.Password == loginDTO.Password)
				{
					return existing;
				}
			}
			return null;
		}
	}
}
