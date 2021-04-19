
import {Btn} from './button'
import { ActionBtn } from "./actionBtn";

export const Button ={
  Accept:props=><Btn type={"accept"}  {...props}/>,
  Cancel:props=><Btn type={"cancel"}  {...props}/>,
  Action:props=><ActionBtn {...props}/>
}