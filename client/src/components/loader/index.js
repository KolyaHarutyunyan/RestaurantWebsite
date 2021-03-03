import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    loader: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& img': {
            width: '5rem',
            height: '5rem',
        },
    },
});

const Loader = () => {
    const classes = useStyles();

    return (
        <div className={classes.loader}>
            <img src="https://chatwidget.dashboard-visor.com/public/images/loading1.gif" className="img-fluid" alt="loading" />
        </div>
    );
};

export default Loader;
