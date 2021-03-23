export const changeEmail = ( value, setState ) => {
  setState(current => ( {
    ...current,
    email: {
      ...current.email,
      value,
      error: emailTest(value) ? null : "please check your email"

    }
  } ))
}
export const changePass = ( value, setState ) => {
  setState(current => ( {
    ...current,
    password: {
      ...current.password,
      value
    }
  } ))
}
export const changeText = ( type,value, setState ) => {
  setState(current => ( {
    ...current,
    [type]: {
      ...current[type],
      value
    }
  } ))
}
let emailTest = email => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
export const checkIsEmail = ( setState ) => {
  setState(current => ( {
      ...current,
      email: {
        ...current.email,
        error: emailTest(current.email.value) ? null : "please check your email"
      }
    } )
  )
}
const passTest = pass => true

export const checkIsPass = ( setState ) => {
  setState(current => ( {
      ...current,
      password: {
        ...current.password,
        error: passTest(current.email.value) ? null : "u can't use this password"
      }
    } )
  )
}

export const checkIsText = ( type,setState ) => {
  setState(current => ( {
      ...current,
      [type]: {
        ...current[type],
        error: current[type].value.replace(/\s/g,"").length>3 ? null : `${type} is very small`
      }
    } )
  )
}