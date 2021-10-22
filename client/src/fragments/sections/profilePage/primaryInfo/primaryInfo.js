import {useEffect, useState} from "react";
import { Container } from "./style";
import {Typography, Button, Input, EditSaveButtons} from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { profileActions, useSagaStore } from "@eachbase/store";
import { useForm } from "react-hook-form";
import { BsPerson } from "react-icons/bs";
import { useSelector } from "react-redux";
export const PrimaryInfo = () => {
  const { register, handleSubmit } = useForm();
  const [editMode, setEditMode] = useState(false);
  const { dispatch, status } = useSagaStore(profileActions.updateUserInfo);
  const profile = useSelector(({ profile }) => profile);
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
  });
  const {httpOnLoad,httpOnSuccess} = useSelector((state) => ({
    httpOnLoad: state.httpOnLoad,
    httpOnSuccess: state.httpOnSuccess,
  }));

  const onLoad = !!httpOnLoad.find((type) => type === 'UPDATE_PROFILE_INFO');
  const onSuccess =httpOnSuccess.length && httpOnSuccess[0].type === 'UPDATE_PROFILE_INFO'

  useEffect(() => {
    setEditMode(false)
  }, [onSuccess]);

  const onSubmit = (info) => {
    if(info.fullName && info.email) {
    // if(editMode === true ) {
      if (profile.email === info.email) {
        const data = {
          fullName: info.fullName,
        }
        dispatch(data);
      } else {
        const data = {
          fullName: info.fullName,
          email: info.email
        }
          dispatch(data);

      }
    }
    // else{
    //   console.log('else')
    //   setErrors(
    //       !info.fullName ? 'fullName' :
    //           !info.email ? 'email' : ''
    //   )
    // }
  }

  if (profile) {
    return (
      <Container>
        <form onChange={() => setErrors('')} onSubmit={handleSubmit(onSubmit)}>
          <div className="head">
            {editMode ? (
                <EditSaveButtons
                   loader={onLoad}
                   handleSave={onSubmit}
                   handleClose={() => setEditMode(false)}
                />
            ) : (
              <button
                  className='classes-edit-button'
                color="action"
                onClick={() => setEditMode(true)}
                type="button"
                onLoad={status.onLoad}
              >
                Edit
              </button>
            )}
          </div>
          <div className="input-box">
            <Typography className='input-title' color="text">Full Name</Typography>
            <Input
              helperColo={true}
              helper={errors === 'fullName' && 'Name min length must be 7 characters' }
              icon={<BsPerson size={22} />}
              disabled={!editMode}
              defaultValue={profile.fullName}
              {...register("fullName", { required: true, minLength:7, maxLength:20 })}
            />
          </div>
          <div className="input-box">
            <Typography  className='input-title' color="text">Email</Typography>
            <Input
              // error={errors && !!errors.email.length}
              helper={errors.helper}
              icon={<Icons.EmailIcon />}
              disabled={!editMode}
              defaultValue={profile.email}
              type="email"
              {...register("email", { required: true })}
            />
          </div>
        </form>
      </Container>
    );
  }

  return null;
};
