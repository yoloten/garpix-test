import React from "react"

interface Props {
    children: React.ReactChild
    fontWeight: number
    fontSize: string
}

export const Title = (props: Props): JSX.Element => (
    <div style={{ fontWeight: props.fontWeight, fontSize: props.fontSize }}>{props.children}</div>
)
