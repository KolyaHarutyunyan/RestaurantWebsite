import {
  useModal,
} from "@eachbase/components";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import { InvoiceInfoContainer } from "./styles";
import { Icons } from "@eachbase/theme";

export const InvoiceInfo = ({}) => {
  const {register, handleSubmit, reset} = useForm();
  const router = useRouter();
  const {params, close} = useModal();

  return (
    <InvoiceInfoContainer>
      <div className='invoice-head'>
        <Icons.LogoIcon/>
        {/*<p>*/}
        {/*  Menumango <br/>*/}
        {/*  345 Park Avenue<br/>*/}
        {/*  San Francisco CA 95110-2704<br/>*/}
        {/*  United States*/}
        {/*</p>*/}
      </div>
      <div>
      </div>
      {/*<h1>aaaa</h1>*/}
    </InvoiceInfoContainer>
  );
};