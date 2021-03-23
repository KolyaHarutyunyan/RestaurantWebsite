import { Styled } from ".."
import { Inputs } from "./inputs"
import { Button } from "@material-ui/core";


export const Form =
  ( {data} ) =>   <Styled.FormBlock onSubmit={e => data.submit.event(e)}>
      {data.inputs.map(field => <Inputs  {...field}/>)}
      {
        data.submit
          ? <Button className={data.submit.className} onClick={e => data.submit.event(e)}
                    onSubmit={e => data.submit.event(e)}>{data.submit.text}</Button>
          : null
      }
    </Styled.FormBlock>
