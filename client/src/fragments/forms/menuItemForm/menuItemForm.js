import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useLocation} from "react-use";
import {useForm} from "react-hook-form";
import {Container} from "./style";
import {
    Typography,
    Input,
    Textarea,
    FileUpload,
    Button,
    useModal,
    BoxImagePreview,
} from "@eachbase/components";
import {useSagaStore, itemActions} from "@eachbase/store";
import {ImgUploader} from "@eachbase/utils";

export const MenuItemForm = () => {
    const {params, close} = useModal();
    const {register, handleSubmit, getValues, setValue, reset} = useForm();
    const businessId = useSelector(({businesses}) =>
        businesses ? businesses.id : null
    );
    const menuId = params.menuId
    const createItemSaga = useSagaStore(itemActions.create);
    const editItemSaga = useSagaStore(itemActions.update);
    const formStatus = params.categoryItem && params.category ? "edit" : "create";
    const [price, setPrice] = useState('')
    const [error, setError] = useState('')

    const [img, setImg] = useState( params?.categoryItem?.item?.images ? [...params.categoryItem.item.images] : [])
    const [imgPush, setImgPush] = useState([]);
    const [index, setIndex] = useState(0)

    const handleChangePrice = (ev) => {
        setPrice(ev.target.value)
    }

    useEffect(() => {
        if (createItemSaga.status.onSuccess) {
            createItemSaga.destroy.all();
            setImg([]);
            setImgPush([]);
            setIndex(0);
            reset();
            setPrice('')
            close();
        }
        if (editItemSaga.status.onSuccess) {
            editItemSaga.destroy.all();
            reset();
            setPrice('')
            createItemSaga.destroy.all();
            setImg([]);
            setImgPush([]);
            setIndex(0);
            reset();
            setPrice('')
            close();
        }
    }, [createItemSaga, editItemSaga]);

    useEffect(() => {
        if (formStatus === "create") {
            setValue("name", '');
            setValue("price", '');
            setPrice('');
            setIndex(0);
            setValue("description", '');
            setValue("option", '');
        }
    }, [formStatus]);

    useEffect(() => {
        if (params.categoryItem) {
            setValue("name", params.categoryItem.item["name"]);
            setValue("price", params.categoryItem.item["price"]);
            setPrice(params.categoryItem.item.price);
            if(params?.categoryItem?.item?.images){
                setImg(params.categoryItem.item.images)
                setIndex(params.categoryItem.item.mainImage)
            }
            setValue("description", params.categoryItem.item["description"]);
            setValue("option", params.categoryItem.item["option"])
        } else {
            setValue("name", null);
            setValue("price", null);
            setPrice('');
            setImg([]);
            setImgPush([]);
            setIndex(0);
            setValue("description", null);
            setValue("option", null);
        }
    }, [params]);
    const [deletedImg, setDeletedImg] = useState([]);
    const onSubmit = async (data) => {
        const images = imgPush && imgPush.length && await ImgUploader(imgPush, true).then(res => res)
        if (params.categoryItem) {


            const editImage = imgPush.length ? { imagesToAdd: [...images] } : '';
            const deletedImages = deletedImg.length ? { imagesToRemove: [...deletedImg] } : '';
            const uploadedArr = images ? images : [];
            let filteredImages = img.filter((i) => i.thumbUrl);
            const allPhotos = [...filteredImages, ...uploadedArr];
            const eventAvatar = allPhotos.length ? +index !== params.categoryItem.item.mainImage ?  +index : params.categoryItem.item.mainImage ? params.categoryItem.item.mainImage : 0 : 0;

            const info = {...data,
                ...editImage,
                ...deletedImages,
                mainImage: eventAvatar,
                price,businessId, }


            // images ? info.mainImage  = +index : ''
            // // images ? info.images = images : ''
            //
            // images ?  info.imagesToAdd = images  : '';
            // images ? info.imagesToRemove = [...deletedImg]  : '';
            // const uploadedArr = images ? images : [];
            // let filteredImages = img.filter((i) => i.thumbUrl);
            // const allPhotos = [...filteredImages, ...uploadedArr];
            // allPhotos.length && +index !==  params.categoryItem.item.mainImage ? info.mainImage = +index  : '';
            // if(params.categoryItem.item.images.length && !images && params.categoryItem.item.mainImage !== +index){
            //     info.mainImage  = +index
            // }else{
            //     if(params.categoryItem.item.images.length && params.categoryItem.item.mainImage && !images){
            //         info.mainImage  = +index
            //     }
            // }
            
            editItemSaga.dispatch( info,params.categoryItem.item.id,menuId )
        } else {
            if (price.length) {
                const info = {...data, price, businessId,}
                images ? info.mainImage = +index : ''
                images ? info.images = images : ''
                createItemSaga.dispatch(
                    {...info},
                    params.menuId,
                    params.categoryId,
                    params.categoryType,
                );
            } else {
                setError('price')
            }
        }
    };

    const handleFileChange = (e) => {
        const newArr = [...img];
        const imageArr = [...imgPush];
        for (let item of e) {
            if (item && item.size > 2097152) {
                setError(true);
            } else {
                setError('');

                newArr.push({
                    url: URL.createObjectURL(new File([item], 'image', { type: 'text/json;charset=utf-8' })),
                    id: newArr.length + 1,
                });
                setImg(newArr);

                imageArr.push(new File([item], `img${newArr.length + 1}`));
                setImgPush(imageArr);
            }
        }
    };

    const handleRemoveImage = (key, item) => {
        setIndex(0);

        const deletedImages = [...imgPush];
        deletedImages.splice(key, 1);
        setImgPush(deletedImages);

        const deletedImagesFile = [...img];
        deletedImagesFile.splice(key, 1);
        setImg(deletedImagesFile);

        const newArr = [...deletedImg, item];
        setDeletedImg(newArr);
    }

    const itemType = params.categoryType === 'FOOD' ? 'food' : 'drink'

    return (
        <Container>
            <Typography className="title" color="text" weight="bold">
                {params?.categoryItem?.item ? "Edit Menu Item" : "Add Menu Item"}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="box">
                    <Input
                        padding={'8px'}
                        containerClassName='input-padding'
                        placeholder="*Menu Item Name"
                        {...register("name", {required: true,})}
                    />
                    <input
                        className={'price-input'}
                        placeholder={'*Price'}
                        value={price}
                        required
                        type={'number'}
                        onChange={handleChangePrice}
                    />
                    {/*<Input*/}
                    {/*    padding={'8px'}*/}
                    {/*    containerClassName='input-padding'*/}
                    {/*  type="text"*/}
                    {/*  placeholder="*Price"*/}
                    {/*  {...register("price", { required: true,  })}*/}
                    {/*/>*/}
                </div>
                <Textarea
                    padding={'8px'}
                    containerClassName='input-padding'
                    placeholder="*Add Ingredients..."
                    {...register("description", {required: false})}
                />
                <Input
                    padding={'8px'}
                    containerClassName='input-padding'
                    placeholder="Special Offers e.g. add chili sauce $2"
                    {...register("option", {required: false})}
                />


                <FileUpload
                    handleChange={handleFileChange}
                    url={img}
                    handleRemoveMany={handleRemoveImage}
                    title={'Image'}
                    many={true}
                    type={itemType}
                    selectedIndex={index}
                    onImagePreviewClick={(e) => setIndex(e)}
                />
                <Button
                    onLoad={createItemSaga.status.onLoad || editItemSaga.status.onLoad}
                    type="submit"
                    square
                    className='save-button'
                >
                    {params?.categoryItem?.item ? "Edit" : "Add"}
                </Button>
            </form>
        </Container>
    );
};
