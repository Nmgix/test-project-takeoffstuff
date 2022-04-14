import React, { useEffect } from "react";
import { Loader } from "../../components/Loader/Loader";
import { useAction } from "../../redux/helpers/useAction";
import { useTypedSelector } from "../../redux/helpers/useTypedSelector";

export const HomePage: React.FC<{
  /*id: string*/
}> = (/*{ id }*/) => {
  const auth = useTypedSelector((state) => state.auth);
  const user = useTypedSelector((state) => state.user);
  const { getUser } = useAction();

  useEffect(() => {
    if (!user.state && auth.state && auth.state.id) {
      getUser(auth.state.id);
    }
  }, []);

  return user.state ? <div>{user.state.nick}</div> : <Loader />;
};