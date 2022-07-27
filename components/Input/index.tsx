import React, { FormEvent, InputHTMLAttributes, useCallback } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { phone, zipcode } from "./masks";
import { InputText } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLElement>{
    inputType: string;
    label?: string;
    placeholder: string;
    mask?: string
    register?: any
}

const Input = ({inputType, label, placeholder,  mask, register}: InputProps) => {

    // USECALLBACK TO GET THE INPUT MASK
    const handleKeyUp = useCallback(
        (e: FormEvent<HTMLInputElement>) => {
                    if(mask === 'phone'){
                        phone(e)
                    }
                    if(mask === 'zipcode'){
                        zipcode(e)
                    }
    }, [mask])

    return(
        <label>
            {label && <p>{label}</p>}
            <InputText type={inputType} placeholder={placeholder} onKeyUp={handleKeyUp} {...register}/>
        </label>
    )
}

export default Input