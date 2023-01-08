import { useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { ContainerLogout } from "./styles";

export const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = (): void => {
    localStorage.removeItem("@sburguer:token");
    navigate("/");
  };

  return (
    <ContainerLogout type="button" onClick={handleLogout}>
      <IoLogOut />
    </ContainerLogout>
  );
};
