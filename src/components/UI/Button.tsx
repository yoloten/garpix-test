import React from "react"

interface Props {
    children: React.ReactChild
}

export const Button = (props: Props): JSX.Element => {
    return <button>{props.children}</button>
}
