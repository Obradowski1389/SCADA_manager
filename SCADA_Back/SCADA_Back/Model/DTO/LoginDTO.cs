using Azure.Identity;

namespace SCADA_Back.Model.DTO
{
	public class LoginDTO
	{
		public String Username { get; set; }
		public String Password { get; set; }

		public LoginDTO(String username, String password)
		{
			Username = username;
			Password = password;
		}
	}
}
