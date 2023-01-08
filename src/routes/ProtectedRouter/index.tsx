import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../../stores/useUserStore";

export const ProtectRouter = () => {
  const { user } = useUserStore();

  return <> {user.id ? <Outlet /> : <Navigate to="/" />} </>;
};
