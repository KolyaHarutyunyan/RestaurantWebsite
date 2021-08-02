import {ActiveMenu, SingleEvent} from '@eachbase/pages';
import {appActions, EventsActions, menusActions} from '@eachbase/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Menu = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        if(router.query.accessid) {
            dispatch(menusActions.getActiveMenu(router.query.accessid));
        }
    }, [router.query.accessid]);

    return <ActiveMenu/>;
};

export default Menu;
