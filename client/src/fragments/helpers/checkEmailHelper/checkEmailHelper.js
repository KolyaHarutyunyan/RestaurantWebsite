import {Typography, Button, useModal, SmallButton} from "@eachbase/components";
import { Container } from "./style";
import { Icons } from "@eachbase/theme";

export const CheckEmailHelper = () => {
  const { close } = useModal();
  return (
    <Container>
        <Icons.SuccessBIg/>
      <Typography color="text" className={'title'}>
      Success
      </Typography>
      <Typography className={'subTitle'} color="text">
          We have sent you a recovery email. Please check it.
        {/*We sent you confirmation email. please check you'r email{" "}*/}
      </Typography>
      <SmallButton
          width={'100%'}
        handleClick={() => close()}
        text={"Done"}
      />


    </Container>
  );
};
