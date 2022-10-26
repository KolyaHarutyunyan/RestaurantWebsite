import { useContext, useEffect } from "react";
import { Button } from "@eachbase/components";
import { useForm } from "react-hook-form";
import { StyledMenuForm } from "./style";
import { UserInput } from "@eachbase/components";
import { ModalContext } from "@eachbase/components/modal/context";
import { useSelector } from "react-redux";
import { menusActions, useSagaStore } from "@eachbase/store";

export const MenuForm = () => {
  const { setActiveModal } = useContext(ModalContext);

  const restaurant = useSelector((state) => state.businesses);

  const { dispatch, status, destroy } = useSagaStore(menusActions.createMenu);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (status.onSuccess) {
      destroy.all();
      reset();
      setActiveModal("");
    }
  }, [status]);

  const onSubmit = (data) => {
    dispatch({
      name: data.name,
      businessId: restaurant?.id,
    });
  };

  return (
    <StyledMenuForm>
      <div className="menu-form-title-box">
        <h2 className="menu-form-title">Add Menu</h2>
        <p className="menu-form-subtitle">We can manage it anytime.</p>
      </div>
      <div className="menu-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <UserInput
            required={true}
            inputType={"text"}
            inputName={"name"}
            inputPlaceholder={"Menu Name"}
            {...register("name", { required: true })}
          />
          <Button
            type={"submit"}
            square
            fullWidth
            className={"add-button"}
            onLoad={status.onLoad}
          >
            Add
          </Button>
        </form>
      </div>
    </StyledMenuForm>
  );
};

// import {Container} from "./style";
// import {useForm} from "react-hook-form";
// import {useEffect, useState} from "react";
// import {useSagaStore, menusActions} from "@eachbase/store";
// import {useModal, Typography, Input, FileUpload, Textarea, Button,} from "@eachbase/components";
// import {useSelector} from "react-redux";
// import {useRouter} from "next/router";
// import {ImgUploader} from "@eachbase/utils";

// export const MenuForm = () => {
//     const {register, handleSubmit, setValue, reset} = useForm({});
//     const {close, params} = useModal();
//     const router = useRouter();
//     const [img, setImg] = useState('')
//     const [imgPush, setImgPush] = useState('')
//     const [error, setError] = useState(false)

//     const createMenuSaga = useSagaStore(menusActions.createMenu);
//     const editMenuSaga = useSagaStore(menusActions.editMenu);

//     const business = useSelector(({businesses}) => businesses);
//     const [editableMenu, setEditableMenu] = useState(null)

//     useEffect(() => {
//         if (params.menuInfo) {
//             setEditableMenu(params.menuInfo)
//         } else {
//             setEditableMenu(null)
//             setImgPush('')
//             setImg('')
//             setError(false)
//         }
//     }, [params])

//     useEffect(() => {
//         return () => {
//             setEditableMenu(null)
//         }
//     }, [])

//     useEffect(() => {
//         if (createMenuSaga.status.onSuccess) {
//             createMenuSaga.destroy.all();
//             reset();
//             close();
//             router.push("/restaurant");
//         }
//         if (editMenuSaga.status.onSuccess) {
//             editMenuSaga.destroy.all();
//             reset();
//             close();
//             close();
//         }
//     }, [createMenuSaga.status, editMenuSaga.status]);

//     useEffect(() => {
//         if (editableMenu && editableMenu.image) {
//             setImg(editableMenu.image)
//         }
//     }, [editableMenu])

//     useEffect(
//         () => () => {
//             createMenuSaga.destroy.all();
//             editMenuSaga.destroy.all();
//         },
//         []
//     );

//     const onSubmit = async (data) => {
//         const upload = imgPush &&  imgPush !== 'delete' && await ImgUploader([imgPush]).then(res => res)
//         const info = {...data}
//         upload ? info.image = upload : ''
//         imgPush === 'delete' ? info.removeImage = true : ''

//         if (editableMenu) {
//             editMenuSaga.dispatch({
//                 ...info,
//                 id: editableMenu.id,
//                 businessId: business.id,
//                 current: params?.current ? 'current' : ''
//             }, )
//         } else {
//             createMenuSaga.dispatch({
//                 ...info,
//                 businessId: business.id,
//             });
//         }
//     };

//     const handleFileChange = (e) => {
//         for (let item of e) {
//             if (item && item.size > 2097152) {
//                 setError(true);
//             } else {
//                 setError('');
//                 setImg({
//                     url: URL.createObjectURL(new File([item], 'image', {type: 'text/json;charset=utf-8'})),
//                     id: 1,
//                 });
//                 setImgPush(new File([item], `img1`));
//             }
//         }
//     };

//     const handleRemoveImage = () => {
//         setImg('')
//         setImgPush('delete')
//     }

//     return (
//         <Container>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <Typography
//                     className="title"
//                     weight="bold"
//                     color="text"
//                 >
//                     {editableMenu ? "Edit Menu" : "Create New Menu"}
//                 </Typography>

//                 <div>
//                     <Typography className='input-padding' weight="bold" color="text">
//                         Menu Name
//                     </Typography>
//                     <Input
//                         padding={'8px'}
//                         containerClassName='input-padding'
//                         defaultValue={editableMenu ? editableMenu.name : ''}
//                         placeholder="*Menu Name"
//                         {...register("name", {required: true})}
//                     />
//                 </div>
//                 <div>
//                     <Typography className='input-padding' weight="bold" color="text">
//                         Description
//                     </Typography>
//                     <Textarea
//                         max={500}
//                         padding={'10px'}
//                         defaultValue={editableMenu ? editableMenu.description : ''}
//                         containerClassName='input-padding'
//                         placeholder="*Brief Description"
//                         rows={4}
//                         {...register("description", {required: false})}
//                     />
//                     <Typography className='max-characters' color="text">
//                         Max 500 characters
//                     </Typography>
//                 </div>
//                 <FileUpload
//                     error={error}
//                     title="Menu Image"
//                     menu={true}
//                     handleChange={handleFileChange}
//                     url={img ? img : ''}
//                     handleRemove={handleRemoveImage}
//                 />
//                 <Button
//                     square
//                     className='save-button'
//                     type="submit"
//                     onLoad={createMenuSaga.status.onLoad || editMenuSaga.status.onLoad}
//                     disabled={createMenuSaga.status.onLoad}
//                 >
//                     {editableMenu ? 'Save' : 'Add'}
//                 </Button>
//             </form>
//         </Container>
//     );
// };
