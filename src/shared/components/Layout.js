import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}