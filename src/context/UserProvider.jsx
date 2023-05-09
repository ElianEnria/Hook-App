import { useState } from "react";
import { UserContext } from "./UseContext";
// const user = {
  // id: 1,
  // name: "Elian",
  // correo: "eliannben2@gmail.com",
// };

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState()

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};
