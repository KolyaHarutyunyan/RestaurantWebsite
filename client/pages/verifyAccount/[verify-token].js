import { VerifyPage } from "@eachbase/pages";

export default function VerifyAccount(props) {
  return <VerifyPage {...props} />;
}

VerifyAccount.getInitialProps = (req) => ({
  authToken: req.query["verify-token"],
});
