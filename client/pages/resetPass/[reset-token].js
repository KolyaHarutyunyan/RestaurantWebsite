import { ResetPassPage } from "@eachbase/pages";

export default function ResetPass(props) {
  return <ResetPassPage {...props} />;
}

ResetPass.getInitialProps = (req) => ({ resetToken: req.query["reset-token"] });
