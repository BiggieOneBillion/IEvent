import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { userProp, userStore } from "../../store/GlobalStore";
import { jwtDecode } from "jwt-decode";

type PropsType = {
  children: ReactNode;
};

const ProtectCheckInPage = (props: PropsType) => {
  const token = userStore((state: unknown) => (state as userProp).token);  

  if (!token) {
    return <Navigate to="/" />;
  }

  const decodeToken: {
    sub: string;
    email: string;
    role: string;
  } = jwtDecode(token);

  const check = decodeToken.role && decodeToken.role === "verifier";

  return check ? props.children : <Navigate to={"/"} />;
};

export default ProtectCheckInPage;
