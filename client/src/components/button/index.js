
import {Btn} from './button'
import { ActionBtn } from "./actionBtn";

export const Button ={
  Accept:props=><Btn type={"accept"}  {...props}/>,
  Action:props=><ActionBtn {...props}/>
}