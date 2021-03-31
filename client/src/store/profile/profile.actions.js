import {profileTypes} from '.';

export const profileActions = {
  sign:{
    in: payload => ({type: profileTypes.sign.in, payload}),
    out: () => ({type: profileTypes.sign.out}),
  },
  remove:payload=>({type:profileTypes.remove,payload})
}

