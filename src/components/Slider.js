import React from 'react';

const Slider = (props) => {
	return (
    <div className="flex flex-col mb-10">
      <div className="flex justify-between items-end mb-2">
        <label for={props.name} className="text-sm">{props.title}</label>
        <p className="text-black text-lg">
          {props.formattedValue}
          {props.emoji &&
            <span className="font-sans ml-2 text-2xl">{props.emoji}</span>
          }
        </p>
      </div>
      <input
        type="range"
        disabled={props.disabled}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        min={props.min}
        max={props.max}
        step={props.step}
        {...props} />
    </div>
  )
}

export default Slider;
