
export const ToastSuccess =(success)=>{

    if(success){
       return (
           success === 'EDIT_BUSINESS' ? 'Restaurant was edited' :
           success === 'EDIT_MENU' ? 'Menu was edited' :
           success === 'DELETE_MENU' ? 'Menu was deleted' :
           success === 'CREATE_MENU' ? 'Menu was created' :
           success === 'CREATE_CATEGORY' ? 'Category was created' :
           success === 'ADD_MENU_CATEGORY' ? 'Category was added' :
           success === 'DELETE_MENU_CATEGORY' ? 'Category was deleted' :
           success === 'DELETE_CATEGORY_ITEM' ? 'Item was deleted' :
           success === 'CREATE_ITEM' ? 'Item was Created' :
           success === 'UPDATE_ITEM' ? 'Item was edited' :
           // success === 'SWITCH_MENU_STATUS' ? 'Menu status was edited' :
           success === 'UPDATE_PROFILE_INFO' ? 'Profile was edited' :
           success === 'UPDATE_PROFILE_PASSWORD' ? 'Password was edited' :
           false
       )
    }
}
