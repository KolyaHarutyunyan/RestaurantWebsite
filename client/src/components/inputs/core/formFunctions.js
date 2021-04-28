let test = {
	email: ({ value, errorText }) =>
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
			? false : errorText,
	password: ({ value, errorText }) =>
		value.length < 31 &&
		value.length > 7 &&
		/(?=.*[0-9\?\!\#\.\_\-\+\=])/.test(value) &&
		/(?=.*[A-Z])/.test(value) && /(?=.*[a-z])/.test(value) ? false : errorText,
	
	text: ({ value, errorText, minLength = 3, maxLength = 40 }) =>
		[ false, errorText.small, errorText.big ][(value.length < minLength && value.length>0) ? 1 : (value.length > maxLength) ? 2 : 0]
}
export const InputTypes = {
	email: {
		value: "",
		error: false,
		type: "email",
		errorText: "Incorrect email"
	},
	password: {
		value: "",
		error: false,
		type: "password",
		errorText: "Incorrect password"
	},
	text: {
		value: "",
		error: false,
		type: "text",
		minLength: 3,
		maxLength: 40,
		errorText: {
			small: " very small ",
			big: " very big "
		}
	},
	
	
}
export const Change = (setState, type, value) =>
	setState(current => ({
		...current,
		[type]:
			{
				...current[type],
				value
			}
	}))


export const Check = (setState, type) => setState(current => ({
	...current,
	[type]: {
		...current[type],
		error: test[current[type].type](current[type])
	}
}))

export const CheckForm = (setState) => {
	let notError = true
	setState(current => {
		let keys = Object.keys(current)
		let newState = { ...current }
		keys.map(key => {
			if (!current[key].value) {
				newState[key].error = "empty faild"
				return 0;
			}
			newState[key].error = test[current[key].type]({ ...current[key] })
			console.log(`${key} --> ${current[key].type}`)
			if (newState[key].error) notError = false
			return 0
		})
		return newState
	})
	return notError
}
