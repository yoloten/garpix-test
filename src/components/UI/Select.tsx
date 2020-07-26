import React from "react"

export interface Props {
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    placeholder?: string
    options?: any[]
    value?: string
    width: number
    name?: string
    id?: string
}

export const Select = (props: Props): JSX.Element => {
    return (
        <div>
            <select style={{ width: props.width + 45 }} name={props.name} onChange={props.onChange}>
                <option selected disabled value="">
                    Выберите
                </option>
                {props.options &&
                    props.options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
            </select>
            <div style={{ width: props.width }} className="wrapper">
                <div className="wrapper-content">
                    <div>
                        <div className="wrapper-text">
                            {props.placeholder && (!props.value || props.value === "cancel") && props.placeholder}
                        </div>
                        <div className="wrapper-text">
                            {props.options?.map((option) => option.value == props.value && option.label)}
                        </div>
                    </div>
                </div>
                <div>&#9662;</div>
            </div>
        </div>
    )
}
