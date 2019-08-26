import React from 'react';

const TextArea = (props) => {
	return(
		<div className="flex flex-col mb-8">
			<label for={props.name} className="text-sm">{props.title}</label>
			<textarea
				className="mt-2 text-sm border p-4 shadow bg-white rounded focus:outline-none"
				disabled={props.disabled}
				id={props.name}
				name={props.name}
				value={props.value}
				rows={props.rows}
				onChange={props.onChange}
	    	placeholder={props.placeholder}
			/>
	  </div>
	)
}

export default TextArea;
