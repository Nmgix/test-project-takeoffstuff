import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { useAction } from "../../redux/helpers/useAction";
import { useTypedSelector } from "../../redux/helpers/useTypedSelector";

import "./_homePage.scss";

export const HomePage: React.FC<{
  /*id: string*/
}> = (/*{ id }*/) => {
  const auth = useTypedSelector((state) => state.auth);
  const user = useTypedSelector((state) => state.user);
  const { getUser } = useAction();

  useEffect(() => {
    console.log(user.state, auth.state, auth.state.id);
    if (!user.state && auth.state && auth.state.id) {
      getUser();
    }
  }, []);

  return user.state ? (
    <div>
      {user.state.nick}
      <Outlet />
    </div>
  ) : (
    <Loader />
  );
};
