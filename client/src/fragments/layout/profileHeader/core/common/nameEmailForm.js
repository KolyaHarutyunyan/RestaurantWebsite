import { useState } from "react";
import { StyledNameEmailForm } from "./style";
import { UserInput } from "@eachbase/components";
import { useForm } from "react-hook-form";
import { Images } from "@eachbase/theme/images";

export const NameEmailForm = ({ account }) => {
  const [edit, setEdit] = useState(false);

  const { handleSubmit, register, reset } = useForm();

  const handleEdit = (event) => {
    event?.preventDefault();
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
    reset(account);
  };

  const onSubmit = (data) => console.log(data);

  return (
    <StyledNameEmailForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name-email-actions-wrapper">
          <div className={"account-save-cancel-btns"}>
            {edit ? (
              <>
                <button type="submit" className="edit-button">
                  Save
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                className="edit-button"
                onClick={handleEdit}
              >
                Edit
              </button>
            )}
          </div>
        </div>
        <UserInput
          required={true}
          inputType={"text"}
          inputName={"name"}
          inputIcon={<Images.FullNameIcon />}
          defaultValue={`${account?.name} ${account?.surname}`}
          {...register("name", { required: true })}
          disabled={!edit}
        />
        <UserInput
          required={true}
          inputType={"email"}
          inputName={"email"}
          inputIcon={<Images.EmailIcon />}
          defaultValue={account?.email}
          {...register("email", { required: true })}
          disabled={!edit}
        />
      </form>
    </StyledNameEmailForm>
  );
};
