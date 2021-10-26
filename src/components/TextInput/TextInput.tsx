import React from "react";
import "./TextInput.css";

type TextInputProps ={
    placeholder: string,
    value: any,
    type: string,
    width: string,
    height?: string,
    onChange: any,
}

const TextInput = ({width,value, height, type, placeholder, onChange}:TextInputProps)=>{

    return(
    <input
    className="inputText"
    type={type}
    name=""
    id=""
    value={value}
    placeholder={placeholder}
    style={{width: width, height: height !== null ? height : 40 }}
    onChange={onChange}
  />
    );
}

export default TextInput;