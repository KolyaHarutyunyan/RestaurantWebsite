import { useState } from "react";
import { Container } from "./style";
import { useDispatch } from "react-redux";
import { profileActions } from "@eachbase/store";
import { FindError, FindLoad } from "../../utils";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loader = FindLoad('PROFILE_SIGN_IN')
  const error = FindError('PROFILE_SIGN_IN')

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(profileActions.signIn({ email, password }));
  };

  const checkUser = error?.type === "PROFILE_SIGN_IN" &&  error?.error === 'notAdmin'
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

            <div className='error'>
            {checkUser && <p >You are not admin</p>}
            </div>
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
