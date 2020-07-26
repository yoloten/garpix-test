import React from "react"

import { Navbar } from "components/UI"

interface Props {
    children: React.ReactChild[] | React.ReactChild
}

export default function index({ children }: Props): JSX.Element {
    return (
        <>
            <Navbar />
            <div className="main">{children}</div>
        </>
    )
}
