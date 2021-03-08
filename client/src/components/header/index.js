import { useContext, useEffect, useState } from 'react'
import data from '../../cms/header.json'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Link from 'next/link'
import { AppBar, Badge, Divider, Grid, makeStyles } from '@material-ui/core'
import CustomMenu from './customMenu'
import useGlobalStyles from '../../theme/globalStyles'

import Picture from "../picture";
import { SignIn } from "../../context/UserProvider/components/signIn";
import { Auth } from "../../context/UserProvider/components";
import { UserContext } from "../../context/UserProvider";

const useStyles = makeStyles(( theme ) => ( {
  header: {
    background: `transparent linear-gradient(90deg, #5690FF 0%, ${theme.palette.secondary.main} 100%) 0% 0% no-repeat padding-box`,
  },
  navbar: {
    padding: '17px 0',
  },
  button: {
    borderRadius: '18px',
    borderColor: '#fff',
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

const Header = ( {headerRef} ) => {
  let {openAuth,user,signOut} = useContext(UserContext)
  let userContext = useContext(UserContext)
  console.log("userContext is: ",userContext)
  useEffect(() => {
    // const token = localStorage.getItem('access-token');
    // if (token) {
    //     dispatch(checkAuthAction(token));
    // }
  }, []);


  const fixHeader = () => {
    // Fixed header when scroll pass from header
    const header = headerRef.current;
    if (window.pageYOffset > header.clientHeight + headerRef.current.offsetTop) {
      // Check scroll loacation
      header.classList.add('fixed-header');
      header.classList.remove('initial-header');
    }
    else {
      if (header.classList[ 1 ] == 'fixed-header') {
        header.classList.add('initial-header');
      }
      header.classList.remove('fixed-header');
    }
  };

  const handleScroll = () => {
    // Call fixed header
    fixHeader();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

const handleSignOut = ()=> signOut()

  const globalClasses = useGlobalStyles();
  const classes = useStyles();

  return (
    <>
      <AppBar position="absolute" className={`${globalClasses.containerFluid} ${classes.header}`} ref={headerRef}>
      <Grid component="nav" container justify="space-between" alignItems="center" className={classes.navbar}>
        <Link href="/">
          <a className="logo">
            <Picture image={{ alt: 'Menuz' }} className={classes.image} />
          </a>
        </Link>
        {!user.id ? (
          // <SignInUp styles={classes}/>
          <Button onClick={openAuth} styles={classes} variant="outlined" className={classes.button} startIcon={<AddIcon m={1}/>}>
           sign In
          </Button>
        ) : (
          <ul className={classes.list}>
            <CustomMenu
              fullName={user.id ? user.fullName : 'null'}
              pageLinks={data.pageLinks}
              listItem={classes.listItem}
              link={classes.link}
            />

            <li className={`${classes.listItem} ${classes.sign}`} onClick={handleSignOut}>
              Sign out
            </li>
          </ul>
        )}
        <Divider variant="middle" className={classes.divider}/>
        <Link href="/createEvent">
          <a className="logo">
            <Button variant="outlined" className={classes.button} startIcon={<AddIcon m={1}/>}>
              Create a Menu
            </Button>
          </a>
        </Link>
      </Grid>
    </AppBar>

    </>

  );
};

export default Header;
