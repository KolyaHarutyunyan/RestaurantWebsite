import {Typography, useModal, SmallButton} from "@eachbase/components";
import { Container } from "./style";
import { Icons } from "@eachbase/theme";
import { useRouter } from "next/router";

export const PaymentSuccess = () => {
  const { close } = useModal();
  const router = useRouter();

  const handleSuccess = ( ) => {
    router.push('/billing')
    close()
  }

  return (
    <Container>
        <Icons.SuccessBIg/>
      <Typography color="text" className={'title'}>
      Success
      </Typography>
      <Typography className={'subTitle'} color="text">
        Your payment succsefully have done.You can see invoice on page<br/>
        <a className='link' href={'/billing'}>Billing and payment</a>
      </Typography>
      <SmallButton
        width={'100%'}
        handleClick={handleSuccess}
        text={"Done"}
      />
    </Container>
  );
};
