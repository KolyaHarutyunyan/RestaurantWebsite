import {Container} from "./style";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useSagaStore, menusActions} from "@eachbase/store";
import {useModal, Typography, Input, FileUpload, Textarea, Button,} from "@eachbase/components";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import {ImgUploader} from "@eachbase/utils";

export const MenuForm = () => {
    const {register, handleSubmit, setValue, reset} = useForm({});
    const {close, params} = useModal();
    const router = useRouter();
    const [img, setImg] = useState('')
    const [imgPush, setImgPush] = useState('')
    const [error, setError] = useState(false)

    const createMenuSaga = useSagaStore(menusActions.createMenu);
    const editMenuSaga = useSagaStore(menusActions.editMenu);

    const business = useSelector(({businesses}) => businesses);
    const [editableMenu, setEditableMenu] = useState(null)

    useEffect(() => {
        if (params.menuInfo) {
            setEditableMenu(params.menuInfo)
        } else {
            setEditableMenu(null)
            setImgPush('')
            setImg('')
            setError(false)
        }
    }, [params])

    useEffect(() => {
        return () => {
            setEditableMenu(null)
        }
    }, [])

    useEffect(() => {
        if (createMenuSaga.status.onSuccess) {
            createMenuSaga.destroy.all();
            reset();
            close();
            router.push("/restaurant");
        }
        if (editMenuSaga.status.onSuccess) {
            editMenuSaga.destroy.all();
            reset();
            close();
            close();
        }
    }, [createMenuSaga.status, editMenuSaga.status]);


    useEffect(() => {
        if (editableMenu && editableMenu.image) {
            setImg(editableMenu.image)
        }
    }, [editableMenu])

    useEffect(
        () => () => {
            createMenuSaga.destroy.all();
            editMenuSaga.destroy.all();
        },
        []
    );

    const onSubmit = async (data) => {
        const upload = imgPush && await ImgUploader([imgPush]).then(res => res)
        const info = {...data}
        upload ? info.image = upload : ''
        if (editableMenu) {
            editMenuSaga.dispatch({
                ...info,
                id: editableMenu.id,
                businessId: business.id,
                current: params?.current ? 'current' : ''
            }, )
        } else {
            createMenuSaga.dispatch({
                ...info,
                businessId: business.id,
            });
        }
    };

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
        setImgPush('')

        if (editableMenu.image) {
            const info = {
                removeImage: true,
            }
            editMenuSaga.dispatch({
                ...info,
                id: editableMenu.id,
                businessId: business.id,
                current: params?.current ? 'current' : ''
            })
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography
                    className="title"
                    weight="bold"
                    color="text"
                >
                    {editableMenu ? "Edit Menu" : "Create New Menu"}
                </Typography>

                <div>
                    <Typography className='input-padding' weight="bold" color="text">
                        Menu Name
                    </Typography>
                    <Input
                        padding={'8px'}
                        containerClassName='input-padding'
                        defaultValue={editableMenu ? editableMenu.name : ''}
                        placeholder="*Menu Name"
                        {...register("name", {required: true})}
                    />
                </div>
                <div>
                    <Typography className='input-padding' weight="bold" color="text">
                        Description
                    </Typography>
                    <Textarea
                        max={500}
                        padding={'10px'}
                        defaultValue={editableMenu ? editableMenu.description : ''}
                        containerClassName='input-padding'
                        placeholder="*Brief Description"
                        rows={4}
                        {...register("description", {required: false})}
                    />
                    <Typography className='max-characters' color="text">
                        Max 500 characters
                    </Typography>
                </div>
                <FileUpload
                    error={error}
                    title="Menu Image"
                    menu={true}
                    handleChange={handleFileChange}
                    url={img ? img : ''}
                    handleRemove={handleRemoveImage}
                />
                <Button
                    square
                    className='save-button'
                    type="submit"
                    onLoad={createMenuSaga.status.onLoad || editMenuSaga.status.onLoad}
                    disabled={createMenuSaga.status.onLoad}
                >
                    {editableMenu ? 'Save' : 'Add'}
                </Button>
            </form>
        </Container>
    );
};
