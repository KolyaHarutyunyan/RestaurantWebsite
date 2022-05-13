import {ModalContainer} from "./style";
import {Icons} from "@eachbase/theme";
// import Carousel from "nuka-carousel";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Carousel from "nuka-carousel";

export const Modal = ({info, modalType}) => {
    return (
        <ModalContainer>
            <div className='line-class'>
                <div className='line'/>
            </div>
            <div className='image-name'>
                {info && info.images && info.images.length ?
                    info.images.length > 1 ?
                        <Carousel
                            animation={'zoom'}
                            zoomScale={0.7}
                            pauseOnHover={false}

                            autoplayInterval={2000}
                            slidesToShow={1}
                            // speed={2}
                            slidesToScroll={1}
                            style={{outline: 'none'}}
                            renderBottomCenterControls={false}
                            renderCenterLeftControls={false}
                            renderCenterRightControls={false}
                            // renderCenterLeftControls={({ previousSlide }) => (
                            //     <button onClick={previousSlide}>
                            //         <KeyboardArrowLeftIcon style={{fontSize:'28px'}}/>
                            //     </button>
                            // )}
                            // renderCenterRightControls={({ nextSlide }) => (
                            //     <button onClick={nextSlide}>
                            //       <ChevronRightIcon style={{fontSize:'28px'}}/>
                            //     </button>
                            // )}
                        >
                            {info.images.map((i, k) => (
                                <div style={{
                                    margin: '0 auto',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '100%'
                                }}>
                                    <img className='image' key={k} src={i.url} alt="icon"/>
                                </div>
                            ))}
                        </Carousel>
                        :
                        <div style={{margin: '0 auto'}}>
                            <img className='image' src={info.images[info.mainImage].url} alt="icon"/>
                        </div>
                    :
                    <div className='no-image'>
                        {modalType === 'drink' ?
                            <Icons.DrinkIcon/>
                            :
                            <Icons.FoodIcon/>
                        }
                    </div>
                }
            </div>
            <div>
                <div className='priceName'>
                    <p className='name'>{info?.name}</p>
                    <p>{`$${info?.price}`}</p>
                </div>
                {info?.option &&
                <div className='option-text'>
                    <p className='option-style'>{info?.option}</p>
                </div>
                }
            </div>
            <hr style={{marginTop: '20px'}}/>
            {info?.description &&
            <div>
                <p className='description-title'>Description</p>
                <div className='description-text'>
                    <p>{info?.description}</p>
                </div>
            </div>
            }
        </ModalContainer>
    )
}