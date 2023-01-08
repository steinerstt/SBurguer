import { StyledGlobal } from "./styles/StyledGlobal";
import { StyledReset } from "./styles/StyledReset";
import { MainRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <StyledReset />
      <StyledGlobal />
      <MainRoutes />
      <ToastContainer autoClose={1500} />
    </>
  );
};
