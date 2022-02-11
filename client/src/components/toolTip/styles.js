import {makeStyles} from "@material-ui/core/styles";
import {colors} from "@eachbase/theme";

export const toolTipStyles = makeStyles(() => ({
    name:{
        fontSize:'18px',
        marginBottom:'16px',
        fontWeight:'bold',

    },
    desc:{
        fontSize:'14px',
        marginBottom:'16px',
    },
    sub:{
        fontSize:'14px',
        marginBottom:'16px',
        color:colors.green
    },
    nameEllipsis:{
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        width:'115px',
        textTransform:'uppercase',
        "@media (min-width: 420px)": {
            width:'190px',
        },
        "@media (min-width: 767px)": {
            width:'90%',
            minWidth:'290px',
        },
    },
    nameEllipsisQr:{
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        width:'150px',
        textTransform:'uppercase',
        "@media (min-width: 420px)": {
            width:'190px',
        },
        "@media (min-width: 767px)": {
            width:'90%',
            minWidth:'290px',
        },
    },
    nameEllipsisDesc:{
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        width:'150px',
        textTransform:'uppercase',
    },
    optionEllipsis:{
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        width:'50px',
        textTransform:'uppercase',
        "@media (min-width: 420px)": {
            width:'100px'
        },
        "@media (min-width: 600)": {
            width:'100px',
        },
        "@media (min-width: 767px)": {
            width:'90%',
            minWidth:'250px',
        },
    },
    descEllipsis:{
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        width:'100px',
        textTransform:'uppercase',
        "@media (min-width: 490px)": {
            width:'250px',
        },
        "@media (min-width: 600)": {
            width:'300px',
        },
        "@media (min-width: 767px)": {
            minWidth:'400px',
        },
    },   optEllipsis:{
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        width:'100px',
        textTransform:'uppercase',
        "@media (min-width: 490px)": {
            width:'150px',
        },
        "@media (min-width: 600px)": {
            width:'150px',
        },
        "@media (min-width: 767px)": {
            minWidth:'250px',
        },
    },
}))