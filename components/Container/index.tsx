import React from "react"
import { ContainerDefault } from "./styles"

interface ContainerProps {
    children: JSX.Element[]
    bg: string
    h: string
}

const Container = ({children, bg, h}: ContainerProps) => {
    return(
        <ContainerDefault bg={bg} h={h}>
            {children}
        </ContainerDefault>
    )
}

export default Container