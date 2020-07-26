import React from "react"

export interface Props {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    value?: string
    type?: string
    name?: string
    width: string
    id?: string
}

export const Input = (props: Props): JSX.Element => {
    return (
        <input
            placeholder={props.placeholder}
            style={{ width: props.width }}
            onChange={props.onChange}
            value={props.value}
            name={props.name}
            type={props.type}
            id={props.id}
        />
    )
}
