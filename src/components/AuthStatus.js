import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    auth.signout(() => {
      navigate('/');
    });
  }

  if (auth.user === null) {
    return <p>You are not logged in</p>
  }

  return (
    <>
      <p>Welocome user {auth.user} </p>
      <button onClick={handleClick}>Logout</button>
    </>
  );
}