import React from "react"
import {SelectContainer, SelectInput } from "./styles"

interface SelectProps {
    data: {value: string, label: string}[]
    placeholder?: string
    w: string
}

const Select = ({data, placeholder, w}: SelectProps) => {
    return(
        <SelectContainer w={w}>
            <label htmlFor="">
                <p>{placeholder}</p>
            </label>
            <SelectInput>
                <option hidden>{'Selecione'}</option>
            {data.map((option) => (
                <option key={option.label} value={option.value}>{option.label}</option>
            ))}
        </SelectInput>
        </SelectContainer>
    )
}

export default Select