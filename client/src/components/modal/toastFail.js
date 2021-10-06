
export const ToastFail =(fail)=>{

    if(fail){
        return (
                fail === 'EDIT_BUSINESS' ? 'Something went wrong' :
                    fail === 'EDIT_MENU' ? 'Something went wrong':
                        fail === 'DELETE_MENU' ? 'Something went wrong' :
                            fail === 'CREATE_MENU' ? 'Something went wrong' :
                                fail === 'CREATE_CATEGORY' ? 'Something went wrong' :
                                    fail === 'ADD_MENU_CATEGORY' ? 'Something went wrong' :
                                        fail === 'DELETE_MENU_CATEGORY' ? 'Something went wrong' :
                                            fail === 'DELETE_CATEGORY_ITEM' ? 'Something went wrong' :
                                                fail === 'CREATE_ITEM' ? 'Something went wrong' :
                                                    fail === 'UPDATE_ITEM' ? 'Something went wrong' :
                                                        fail === 'SWITCH_MENU_STATUS' ? 'Something went wrong' :
                                                            fail === 'UPDATE_PROFILE_INFO' ? 'Something went wrong' :
                                                                fail === 'UPDATE_PROFILE_PASSWORD' ? 'Something went wrong' :
                false
        )
    }
}