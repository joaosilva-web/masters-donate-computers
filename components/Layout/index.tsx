import { useEffect, useRef, useState } from "react";
import NavBar from "../NavBar";
import { Header, PageWrapper } from "./styles"

interface LayoutProps {
    children: JSX.Element[] | JSX.Element;
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <PageWrapper>
            <Header>
                <NavBar/>
            </Header>
            <main>
            {children}
            </main>
        </PageWrapper>
    )
}