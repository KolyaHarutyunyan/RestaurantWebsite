 import { useRef } from "react";

export const VerifyInput =
		({VerifyKeyLength=6,verifyKey, onChange,error,onBlur}) => {
			let inputs = [...Array(VerifyKeyLength).keys()].map(id => useRef())
			const getKey = (value, id) => {
				let newVerifyKey = id ? verifyKey.slice(0, id) : ""
				if ( !value.length ) {
					if ( id ) inputs[id - 1].current.focus()
				} else {
					if ( value.length === 1 ) {
						newVerifyKey += value
					}
					if ( value.length === 2 ) {
						newVerifyKey += value[1]
					}
					if ( id + 1 < VerifyKeyLength ) {
						inputs[id + 1].current.focus()
					} else {
						inputs[id].current.blur()
						onBlur()
					}
				}
				onChange(newVerifyKey)
			}

			return (
				<>
					<div>
						{
							[...Array(VerifyKeyLength).keys()].map(id =>
								<div key={id} correct={!error} onPrecc={() => inputs[id].current.focus()}>
									<input
										dataDetectorTypes={"phoneNumber"} autoFocus={!id && true}
										onFocus={() => (id && verifyKey.length < id) && inputs[id - 1].current.focus()}
										ref={inputs[id]} maxLength={2}
										onChangeText={text => getKey(text, id)}
										keyboardType={"number-pad"}
										value={verifyKey[id] || ""}
									/>
								</div>
							)
						}
					</div>
					{
						error &&
						<div>
							{error}
						</div>
					}
				</>

			)
		}