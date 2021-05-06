import { MenuPage } from "@eachbase/pages";

export default function ResetPass(props) {
  return <MenuPage {...props} />;
}

ResetPass.getInitialProps = (req) => ({ tag: req.query["menu_tag"] });
