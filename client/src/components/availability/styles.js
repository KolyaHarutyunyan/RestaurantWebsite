import { makeStyles } from '@material-ui/core/styles';
import { colors } from "../../theme";

export const availabilityStyles = makeStyles(() => ({
    availableHours: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    availableHoursHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        paddingLeft: 10,
    },

    availableHoursBlock: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        overflow: 'hidden',
        height: 'auto',
        overflowY: 'scroll',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        flexDirection:'column',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        paddingLeft: 10,
    },

    noItems: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4B5C6880',
        margin: '0 auto',
    },

    availableHoursTitle: {
        color: '#4B5C68',
        fontSize: 18,
        fontWeight: 'bold',
    },

    availableHoursBox: {
        display: 'flex',
        marginBottom: 8,
    },

    availableHoursBoxHeader: {
        width: '70px',
        color: colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

    availableHoursBoxBody: {
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        gap: '8px',
    },

    availableHoursBoxBodyInfo: {
        color: colors.secondary,
        fontSize: 16,
    },

    AddAvailabilityScheduel: {
        width: '634px',
        padding: '40px',
        borderRadius: '8px',
        backgroundColor: 'white',
        position: 'relative',
        '@media (max-width: 1400px)': {
            width: '618px',
            padding: '32px',
        },
    },

    availableHoursDayName: {
        color: '#347AF0',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 16,
    },
}));
