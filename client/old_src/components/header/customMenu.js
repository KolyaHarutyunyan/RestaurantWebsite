import React from 'react';
import Link from 'next/link';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const useStayles = makeStyles({
    link: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        textDecoration: 'none',
    },
});

const CustomMenu = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStayles();
    return (
        <li className={props.listItem}>
            <Button aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick}>
                <span className="material-icons">person</span>
                <span>{props.fullName}</span>
                <span className="material-icons">keyboard_arrow_down</span>
            </Button>
            <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                {props.pageLinks.map((item, index) => (
                    <StyledMenuItem key={index}>
                        <Link href={item.link}>
                            <a className={classes.link} style={{ color: 'black' }}>
                                <ListItemIcon>
                                    <span className="material-icons">{item.icon}</span>
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </a>
                        </Link>
                    </StyledMenuItem>
                ))}
            </StyledMenu>
        </li>
    );
};

export default CustomMenu;
