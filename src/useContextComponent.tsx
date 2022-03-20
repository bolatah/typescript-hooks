import { useState, useContext } from "react";
import UserContext, { UserState } from "./store";

function ConsumerComponent() {
  const user: UserState = useContext(UserContext);

  return (
    <div>
      <div> First : {user.first} </div>
      <div> last : {user.last} </div>
    </div>
  );
}

function useContextComponent() {
  const [user, setUser] = useState<UserState>({
    first: "Jane",
    last: "Smith",
  });

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() =>
          setUser({
            first: "rebecca",
            last: "smith",
          })
        }
      >
        Change Context
      </button>
    </UserContext.Provider>
  );
}

export default useContextComponent;
