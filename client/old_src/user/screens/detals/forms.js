import { memo } from "react"
import { FormBlock, SubmitButton } from "../styles/screens.style"
import { Inputs } from "./inputs";


export const Form = memo(
  ( {data} ) =>
    <FormBlock onSubmit={e => data.submit.event(e)}>
      {data.inputs.map(field => <Inputs  {...field}/>)}
      {
        data.submit
          ? <SubmitButton className={data.submit.className} onClick={e => data.submit.event(e)}
                          onSubmit={e => data.submit.event(e)}>{data.submit.text}</SubmitButton>
          : null
      }
    </FormBlock>
)