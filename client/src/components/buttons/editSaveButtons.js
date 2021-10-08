import {Button} from "./button";
import {EditSave} from "./style";
import {Loader} from "../loading";

export const EditSaveButtons = ({handleSave, handleClose, loader, type}) => {
    return (
        <EditSave>
            <Button
                className='classes-close-button'
                height={'auto'}
                onLoad={status.onLoad}
                color="action"
                link
                colorVariant
                onClick={handleClose}
            >
                Close
            </Button>

            <Button
                className='classes-edit-button'
                height={'auto'}
                onLoad={status.onLoad}
                color="action"
                link
                colorVariant
                onClick={handleSave}
            >
                {loader ?
                    <Loader small={true}/> :
                    'Save'
                }
            </Button>
        </EditSave>
    )
}