import {
    Typography,
    Input,
    Textarea,
    Button,
    FileUpload,
    useModal,
} from "@eachbase/components";
import {Container} from "./style";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useSagaStore, businessesActions} from "@eachbase/store";
import {useRouter} from "next/router";
import {ImgUploader} from "@eachbase/utils";
import axios from "axios";

export const EditRestaurantForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const router = useRouter();
    const editBusiness = useSagaStore(businessesActions.editBusiness);
    const getBusinessesSaga = useSagaStore(businessesActions.getBusinesses);
    const [img, setImg] = useState('')
    const [imgPush, setImgPush] = useState('')
    const [error, setError] = useState(false)
    const {params, close} = useModal();
    const {dispatch, status, destroy} = useSagaStore(
        businessesActions.editBusiness
    );

    const onSubmit = async (info) => {
        const images = imgPush && imgPush !== 'delete' && await ImgUploader([imgPush]).then(res => res)
        const editDate = {...info}
        images ? editDate.logo = images : ''
        imgPush === 'delete' ? editDate.removeLogo = true : ''
        editBusiness.dispatch({...editDate, id: params.business.id,})
    };

    useEffect(() => () => destroy.all(), []);

    useEffect(() => {
        if (status.onSuccess) {
            close();
            destroy.success();
            reset();
            setImg('')
            setImgPush('')
            router.push("/restaurant");
        }
    }, [status]);

    useEffect(() => {
        if (params && params?.business?.logo) {
            setImg(params.business.logo)
        }
    }, [params])

    const handleFileChange = (e) => {
        for (let item of e) {
            if (item && item.size > 2097152) {
                setError(true);
            } else {
                setError('');
                setImg({
                    url: URL.createObjectURL(new File([item], 'image', {type: 'text/json;charset=utf-8'})),
                    id: 1,
                });
                setImgPush(new File([item], `img1`));
            }
        }
    };

    const handleRemoveImage = () => {
        setImg('')
        setImgPush('delete')
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography
                    className="title"
                    weight="bold"
                    color="text"
                    size="1.250rem"
                >
                    Edit {params?.business?.name}
                </Typography>
                <div>
                    <Typography className='input-padding' weight="bold" color="text">
                        Restaurant Name
                    </Typography>
                    <Input
                        containerClassName='input-padding'
                        padding={'8px'}
                        placeholder="Restaurant Name"
                        defaultValue={params?.business?.name ? params?.business?.name : ''}
                        {...register("name", {required: !params?.business?.name})}
                    />
                </div>
                <div>
                    <Typography className='input-padding' weight="bold" color="text">
                        Description
                    </Typography>
                    <Textarea
                        max={500}
                        containerClassName='input-padding'
                        padding={'10px'}
                        placeholder="Brief Description"
                        defaultValue={params?.business?.description ? params?.business?.description : ''}
                        rows={4}
                        {...register("description", {required: false})}
                    />
                    <Typography className='max-characters' color="text">
                        Max 500 characters
                    </Typography>
                </div>
                <FileUpload
                    error={error}
                    building={true}
                    handleChange={handleFileChange}
                    url={img ? img : ''}
                    handleRemove={handleRemoveImage}
                />
                <Button
                    className='save-button'
                    square
                    type="submit"
                    onLoad={status.onLoad}
                >
                    Save
                </Button>
            </form>
        </Container>
    );
};