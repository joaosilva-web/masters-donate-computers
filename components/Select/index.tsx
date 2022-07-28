import React from "react"
import { Option, SelectInput } from "./styles"

interface SelectProps {
    data: {value: string, label: string}[]
    placeholder?: string
}

const Select = ({data, placeholder}: SelectProps) => {
    return(
        <label htmlFor="">
            <p>{placeholder}</p>
            <SelectInput>
            {data.map((option) => (
                <Option key={option.label} value={option.value}>{option.label}</Option>
            ))}
        </SelectInput>
        </label>
    )
}

export default Select