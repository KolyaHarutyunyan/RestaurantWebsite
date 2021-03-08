import { memo } from "react";
import { Inputs } from "./inputs/input";
import { Form, Submit } from "./styles/style";


export const FormBuilder = memo(
  ( {data , onSubmit,submitText} ) => {
    console.log(data)
    return (
      <Form onSubmit={e=>onSubmit(e)}>
        {data.map(field => <Inputs  {...field}/>)}
        <Submit onClick={e=>onSubmit(e)} onSubmit={e=>onSubmit(e)}>{submitText}</Submit>
      </Form>
    )
  }
)