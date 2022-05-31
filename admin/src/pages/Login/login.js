import { useState } from "react";
import { Container } from "./style";
import { useDispatch } from "react-redux";
import { profileActions } from "@eachbase/store";
import { FindLoad } from "../../utils";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loader = FindLoad('PROFILE_SIGN_IN')
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(profileActions.signIn({ email, password }));
  };

  return (
    <Container>
      <div className="box">
        <p>Menu Mango Panel</p>
        <form onSubmit={onSubmit}>
          <div>
            <input
              placeholder="Email"
              value={email}
              type="email"
              onChange={({ target: { value } }) => setEmail(value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
          </div>
          <button>
            {loader ?
              'Loading...'
              :
              'Log in'
            }</button>
        </form>
      </div>
    </Container>
  );
};
