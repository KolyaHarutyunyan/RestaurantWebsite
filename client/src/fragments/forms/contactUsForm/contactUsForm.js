import { useState, useEffect } from "react";
import { StyledContactUsForm } from "./style";
import { Button, useModal, UserInput } from "@eachbase/components";
import { useForm } from "react-hook-form";
import { services } from "@eachbase/store/services/services";

export const ContactUsForm = () => {
  const { activeModal, close } = useModal();

  const [loading, setLoading] = useState(false);

  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if (!activeModal) {
      reset();
    }
  }, [activeModal]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await services.constactUs(data);
      close();
      reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledContactUsForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Contact Us</h1>
        <p className="subtitle">
          Our friendly team will answer you as soon as possible!
        </p>
        <UserInput
          inputLabel={"Name"}
          inputType={"text"}
          inputName={"name"}
          {...register("name", { required: true })}
        />
        <UserInput
          inputLabel={"Email Address"}
          inputType={"email"}
          inputName={"emailAddress"}
          {...register("emailAddress", { required: true })}
        />
        <UserInput
          isTextArea={true}
          inputLabel={"Message"}
          inputName={"message"}
          inputPlaceholder={"Your message here ..."}
          charCounterIsShown={false}
          {...register("message", { required: true })}
        />
        <Button fullWidth square onLoad={loading}>
          Send
        </Button>
      </form>
    </StyledContactUsForm>
  );
};
