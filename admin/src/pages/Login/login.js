import { useState } from "react";
import { Container } from "./style";
import { useDispatch } from "react-redux";
import { profileActions } from "@eachbase/store";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(profileActions.signIn({ email, password }));
  };

  return (
    <Container>
      <div className="box">
        <p>PANEL</p>
        <form onSubmit={onSubmit}>
          <div>
            <input
              placeholder="email"
              value={email}
              type="email"
              onChange={({ target: { value } }) => setEmail(value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
          </div>
          <button>login</button>
        </form>
      </div>
    </Container>
  );
};
