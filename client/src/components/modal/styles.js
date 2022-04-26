import { makeStyles } from '@material-ui/core';
// import { Backgrounds, Colors } from '../../utils';

export const modalsStyles = makeStyles((theme) => ({



    scrollable: {
        display: 'flex',
        flexDirection:'column',
        maxHeight: '100%',
        padding: '10px',
        overflow: 'hidden',
        overflowY: 'auto',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        // '@media (min-width: 320px)': {
        //     gridTemplateColumns: '1fr',
        // },
        // '@media (min-width: 1240px)': {
        //     gridTemplateColumns: '1fr 1fr',
        // },
    },
    availableScheduleWrapper: {
        width: '100%',
        backgroundColor: 'white',
        padding: '40px 0',
        borderRadius: 8,
        position: 'relative',
    },
    availableScheduleTitle: {
        fontSize: 32,
        color: '#4B5C68',
        fontWeight: 'bold',
        lineHeight: '48px',
        marginBottom: 20,
    },
    closeBtn: {
        position: 'absolute',
        right: 3,
        top: 11,
    },
    timeRow: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 6px #0000001A',
        padding: '12px',
        borderRadius: 8,
        display: 'flex',
        marginRight: '16px',

        '@media (min-width: 320px)': {
            flexDirection: 'column',
        },
        '@media (min-width: 768px)': {
            flexDirection: 'row',
        },

        '&:not(:last-child)': {
            marginBottom: 16,
        },
    },
    removeIcon:{
        width:'30px'
    },

    timeRowWrapper: {
        display: 'flex',
        '@media (min-width: 320px)': {
            marginTop: '16px',
        },
        '@media (min-width: 768px)': {
            marginTop: 0,
        },
    },




    dayName: {
        fontSize: 16,
        // color: Colors.ThemeGreen,
        lineHeight: '20px',
        textTransform: 'uppercase',
        marginRight: 16,
        fontWeight: 'bold',
        maxWidth: 40,
        width: '100%',
    },
    addTime: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '& img': {},
        '& span': {
            fontSize: '16px',
            color: '#22222299',
            lineHeight: '19px',
            marginLeft: '10px',
        },
    },
    times: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 8,
    },
    moreHoursBtn: {
        fontSize: 14,
        // color: Colors.ThemeGreen,
        lineHeight: '20px',
        cursor: 'pointer',
        marginTop: 8,
        display: 'inline-block',
    },
    timeInputStyle: {
        border: `0.5px solid #BEBEBE`,
        borderRadius: 8,
        padding: '1px 5px',
        '& .MuiInputBase-root::before': {
            content: 'revert!important',
        },
        '& .MuiInputBase-root::after': {
            content: 'revert!important',
        },
        '& .Mui-disabled': {
            color: '#4B5C6880',
        },
    },
    smallLine: {
        margin: '0 5px',
        // color: Colors.ThemeGreen,
    },
    customCheckbox: {
        // color: Colors.ThemeGreen,
        padding: 0,
        '& .MuiCheckbox-colorSecondary.Mui-checked': {
            color: '#49B776 !important',
        },
        '&.Mui-checked': {
            backgroundColor: 'white',
            // color: Colors.ThemeGreen,
        },
        '& .MuiSvgIcon-root': {
            width: 24,
            height: 24,
        },
    },
    notAvailableText: {
        fontSize: 14,
        color: '#4B5C68',
        lineHeight: '20px',
        textTransform: 'capitalize',
        paddingLeft: 6,
        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'block',
        },
    },


    infoModalWrapper: {
        width: '645px',
        padding: '32px',
        borderRadius: '8px',
        backgroundColor: 'white',
        position: 'relative',
    },

    removeTimeBtn: {
        color: '#FE7070',
        fontSize: 20,
        cursor: 'pointer',
        margin: '6px 8px 0 8px',
        '@media (min-width: 320px)': {
            display: 'none',
        },
        '@media (min-width: 768px)': {
            display: 'block',
        },
    },

    removeTimeBtnMobile: {
        color: '#FE7070',
        cursor: 'pointer',
        margin: '1px 2px 0 4px',
        '@media (min-width: 320px)': {
            display: 'block',
        },
        '@media (min-width: 768px)': {
            display: 'none',
        },
    },

    closeCheckbox: {
        marginLeft: '10px',
        display: 'flex',
        alignItems: 'center',
        '@media (min-width: 320px)': {
            marginBottom: '5px',
        },
        '@media (min-width: 768px)': {
            marginTop: '0',
            position: 'relative',
            right: '0',
            marginBottom: 0,
        },
    },
}));
