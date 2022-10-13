import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
import { StyledMuiBreadcrumbs } from "./style";
import { colors } from "@eachbase/theme";

export const MuiBreadcrumbs = ({ breadcrumbs = [] }) => (
  <StyledMuiBreadcrumbs>
    <Breadcrumbs
      separator={
        <NavigateNextIcon
          fontSize="large"
          style={{ color: colors.secondary }}
        />
      }
      aria-label="breadcrumb"
    >
      {breadcrumbs.map((breadcrumb, index, array) => {
        const isLast = index === array.length - 1;
        const isOne = array.length === 1;

        if (isLast) {
          return (
            <Typography key={index} className={`page ${isOne ? "" : "last"}`}>
              {breadcrumb.text}
            </Typography>
          );
        }

        return (
          <Link key={index} href={breadcrumb.path}>
            <a className="page">{breadcrumb.text}</a>
          </Link>
        );
      })}
    </Breadcrumbs>
  </StyledMuiBreadcrumbs>
);
