import React from "react";
import { ContainerDefault } from "./styles";

interface ContainerProps {
  children: JSX.Element[];
  bg: string;
  h: string;
  justify?: string;
}

const Container = ({
  children,
  bg,
  h,
  justify = "space-between",
}: ContainerProps) => {
  return (
    <ContainerDefault bg={bg} h={h} justify={justify}>
      {children}
    </ContainerDefault>
  );
};

export default Container;
