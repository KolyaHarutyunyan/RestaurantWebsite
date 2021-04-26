import { useCallback, useState } from "react"
import { useDropzone } from 'react-dropzone'

export const FileInput = () => {
	let [ file, setFile ] = useState(false)
	const onDrop = useCallback(acceptedFiles => {
		// Do something with the files
		setFile(acceptedFiles)
		console.log(acceptedFiles[0].base64)
	}, [])
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
	
	return (
		<div {...getRootProps()}>
			{
				file
					? <p>thanks for file</p>
					: <>
						<input {...getInputProps()} />
						{
							isDragActive ?
								<p>Drop the files here ...</p> :
								<p>Drag 'n' drop some files here, or click to select files</p>
						}
					</>
			}
		</div>
	)
}