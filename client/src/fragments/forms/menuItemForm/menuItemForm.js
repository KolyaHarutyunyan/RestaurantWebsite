import { Container } from "./style";
import {
  Typography,
  Input,
  Textarea,
  FileUpload,
  Button,
  useModal,
  BoxImagePreview,
} from "@eachbase/components";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSagaStore, itemActions } from "@eachbase/store";
import { useSelector } from "react-redux";

export const MenuItemForm = (  ) => {
  const { params, close } = useModal();
  const { register, handleSubmit, setValue, reset } = useForm();
  const [imagesLimit, setImagesLimit] = useState(6);
  const [itemIcon, setItemIcon] = useState({
    files: [],
    mainImageId: "",
  });
  const businessId = useSelector(({ businesses }) =>
    businesses ? businesses.id : null
  );
  const createItemSaga = useSagaStore(itemActions.create);
  const editItemSaga = useSagaStore(itemActions.update);

  const formStatus = params.categoryItem && params.category ? "edit" : "create";

  useEffect(() => {
    if (createItemSaga.status.onSuccess) {
      createItemSaga.destroy.all();
      setItemIcon({
        files: [],
        mainImageId: "",
      });
      reset();
      close();
    }
    if (editItemSaga.status.onSuccess) {
      editItemSaga.destroy.all();
      reset();
      close();
      createItemSaga.destroy.all();
      setItemIcon({
        files: [],
        mainImageId: "",
      });
      reset();
      close();
    }
  }, [createItemSaga, editItemSaga]);

  useEffect(() => {
    if (formStatus === "create") {
      setImagesLimit(6);
    } else {
      let uploadedImagesCount = 0;

      if (params.categoryItem.item.mainImage) {
        uploadedImagesCount += 1;
      }
      if (params.categoryItem.item.images) {
        uploadedImagesCount += params.categoryItem.item.images.length;
      }

      setImagesLimit(uploadedImagesCount);
    }
  }, [formStatus]);

  useEffect(() => {
    if (params.categoryItem) {
      setValue("name", params.categoryItem.item["name"]);
      setValue("price", params.categoryItem.item["price"]);
      setValue("description", params.categoryItem.item["description"]);
      setValue("option", params.categoryItem.item["option"]);
    }
  }, [params]);

  const onSubmit = (data) => {
    if (formStatus === "create") {
      createItemSaga.dispatch(
        { ...data, businessId },
        params.categoryId,
          itemIcon
      );
    } else {
      let categoryId = params.category.categoryId
      if(itemIcon.files.length){
      editItemSaga.dispatch(
        { ...params.categoryItem.item, ...data, businessId,itemIcon,categoryId  }
      );
    }else{
        editItemSaga.dispatch(
            { ...params.categoryItem.item, ...data, businessId,categoryId  }
        )
      }
    }
  };
  const categoryItems = useSelector(({ categoryItems }) => categoryItems);
  const id = params.categoryItem && params.categoryItem.item ?  params.categoryItem.item.id  :''
  const selected = categoryItems.filter((a) =>
      a.item.id === id
  )

  const type =  sessionStorage.getItem('activeTab')


  return (
    <Container>
      <Typography className="title" color="text" weight="bold">
        {formStatus === "edit" ? "Edit Menu Item" : "Add Menu Item"}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="box">
          <Input
              padding={'8px'}
              containerClassName='input-padding'
            placeholder="*Menu Item Name"
            {...register("name", { required: true })}
          />
          <Input
              padding={'8px'}
              containerClassName='input-padding'
            type="number"
            placeholder="*Price"
            {...register("price", { required: true })}
          />
        </div>
        <Textarea
            padding={'8px'}
            containerClassName='input-padding'
          placeholder="*Add Ingredients..."
          {...register("description", { required: true })}
        />
        <Input
            padding={'8px'}
            containerClassName='input-padding'
          placeholder="Special Offers e.g. add chili sauce $2"
          {...register("option", { required: false })}
        />


        <FileUpload
            type={type}
            itemId={params && params.categoryItem && params.category.categoryId}
            requestType={'item'}
            url={selected.length ?  selected[0].item  && selected[0].item.mainImage &&  selected[0].item.mainImage.originalUrl : '' }
            id={params.categoryItem && params.categoryItem.item.mainImage ?  params.categoryItem.item.mainImage.id  :''}
            fileUrl={params && params.categoryItem && params.categoryItem.item.mainImage && params.categoryItem.item.mainImage.originalUrl}
            files={itemIcon.files}
            onChange={(files, _actionType, mainImageId) =>
              setItemIcon({ files, mainImageId })
            }
            limit={imagesLimit}
            mainImageId={itemIcon.mainImageId}
        />
        <Button
          onLoad={createItemSaga.status.onLoad || editItemSaga.status.onLoad}
          type="submit"
          square
          className='save-button'
        >
          {formStatus === "edit" ? "Edit" : "Add"}
        </Button>
      </form>
    </Container>
  );
};
