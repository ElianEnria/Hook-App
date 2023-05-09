import { useContext } from "react";
import { UserContext } from "../context/UseContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 1, name: "Elian", correo: "eliannben2@gmail.com" })
        }
      >
        Set User
      </button>
    </>
  );
};
