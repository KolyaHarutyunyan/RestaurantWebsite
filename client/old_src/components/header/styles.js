import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(( theme ) => ( {
  header: {
    background: "#fff",
    height: "80px",
    [ theme.breakpoints.down('xs') ]: {
      height: "60px",
    },
  },
  navbar: {
    padding: '17px 0',
  },
  button: {
    borderRadius: '18px',
    borderColor: '#000',
    '&:hover': {
      backgroundColor: '#fff',
      color: theme.palette.primary.main,
    },
    [ theme.breakpoints.down('xs') ]: {
      fontSize: '12px',
    },
  },
  list: {
    padding: 0,
    margin: 0,
    marginLeft: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    [ theme.breakpoints.down('xs') ]: {
      order: 2,
    },
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '30px',
    cursor: 'pointer',
    color: 'white',
    [ theme.breakpoints.down('xs') ]: {
      fontSize: '14px',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  notification: {
    marginRight: '20px',
  },
  divider: {
    display: 'none',
    [ theme.breakpoints.down('xs') ]: {
      width: '100vw',
      display: 'block',
      order: 1,
      transform: 'translateX(-16px)',
      margin: '16px 0',
      backgroundColor: '#707070',
    },
  },
  sign: {
    [ theme.breakpoints.down('xs') ]: {
      marginRight: 0,
    },
  },
  image: {
    position: 'relative !important',
  },
} ))
