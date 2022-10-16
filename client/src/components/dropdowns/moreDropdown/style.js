import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import { colors } from "@eachbase/theme";

export const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 119,
    backgroundColor: colors.white,
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      width: "100%",
      padding: "9px 24px",
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      color: colors.secondary,
      "&:last-child": {
        color: colors.primary,
      },
    },
  },
}));
