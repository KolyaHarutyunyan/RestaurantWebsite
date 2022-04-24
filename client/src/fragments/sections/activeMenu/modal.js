import {ModalContainer} from "./style";
import {Icons} from "@eachbase/theme";

export const Modal = ({info, modalType}) => {
    return (
        <ModalContainer>
            <div className='line-class'>
                <div className='line'/>
            </div>
            <div className='image-name'>
                {info && info.images && info.images.length ?
                    <img className='image' src={info.images[info.mainImage].url} alt="icon"/>
                    :
                    <div className='no-image'>
                        {modalType === 'drink' ?
                            <Icons.DrinkIcon/>
                            :
                            <Icons.FoodIcon/>
                        }
                    </div>
                }
                <div className='priceName'>
                    <p className='name'>{info.name}</p>
                    <p>{`$${info.price}`}</p>
                </div>
            </div>

            <hr style={{marginTop: '30px', color: '#FF453A'}}/>
            <div className='body'>
                {info?.description &&
                <>
                    <p className='title'>Description</p>
                    <p>{info?.description}</p>
                </>
                }
                {info.option ?
                    <>
                        <p style={{color: '#54C762'}} className='title'>Option</p>
                        <p>{info.option}</p>
                    </>
                    :
                    ''
                }
            </div>
        </ModalContainer>
    )
}