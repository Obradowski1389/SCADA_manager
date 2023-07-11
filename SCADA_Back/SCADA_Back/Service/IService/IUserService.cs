using SCADA_Back.Model;
using SCADA_Back.Model.DTO;

namespace SCADA_Back.Service.IService
{
    public interface IUserService
    {
        public User GetUser(int id);
        public void UpdateUser(User user);
        public User AddUser(User user);
        public User AddAdmin(User user);
        public User? Login(LoginDTO loginDTO);
    }
}
