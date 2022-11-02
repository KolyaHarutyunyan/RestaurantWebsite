import { StyledContactUsForm } from "./style";
import { Button, UserInput } from "@eachbase/components";
import { useForm } from "react-hook-form";

export const ContactUsForm = () => {
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <StyledContactUsForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Contact Us</h1>
        <p className="subtitle">
          Our friendly team will answer you as soon as possible!
        </p>
        <UserInput
          required={true}
          inputLabel={"Name"}
          inputType={"text"}
          inputName={"name"}
          {...register("name", { required: true })}
        />
        <UserInput
          required={true}
          inputLabel={"Email Address"}
          inputType={"email"}
          inputName={"emailAddress"}
          {...register("emailAddress", { required: true })}
        />
        <UserInput
          required={true}
          isTextArea={true}
          inputLabel={"Message"}
          inputName={"message"}
          inputPlaceholder={"Your message here ..."}
          charCounterIsShown={false}
          {...register("message", { required: true })}
        />
        <Button fullWidth square>
          Send
        </Button>
      </form>
    </StyledContactUsForm>
  );
};
