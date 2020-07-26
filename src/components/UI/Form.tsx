import React, { useState, useEffect } from "react"
import { Formik, Field } from "formik"
import * as Yup from "yup"

import { bookValidation, authorValidation } from "utils/validationSchemas"
import { BooksValues } from "containers/Books/CreateBook"
import { AuthorValues } from "containers/Authors/CreateAuthor"
import * as UI from "components/UI"

interface Props {
    validationSchema: Yup.InferType<typeof bookValidation | typeof authorValidation>
    authorOptions?: ({ value: number; label: string } | undefined)[]
    fields: { label: string; name: string; type: string }[]
    initialValues: BooksValues | AuthorValues
    getValuesFromForm: (values: any) => void
    isEdit?: boolean
}

export const Form = ({
    getValuesFromForm,
    validationSchema,
    initialValues,
    authorOptions,
    isEdit,
    fields,
}: Props): JSX.Element => {
    const [msg, setMsg] = useState("")

    useEffect(() => {
        setTimeout(() => setMsg(""), 1000)
    }, [msg])

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
                getValuesFromForm(values)
                setMsg("Сохранено!")
                if (!isEdit) resetForm()
            }}
            validationSchema={validationSchema}
        >
            {(props) => {
                const { touched, errors, handleSubmit } = props
                return (
                    <form className="form" onSubmit={handleSubmit}>
                        {fields.map((input) => (
                            <Field
                                key={input.name}
                                name={input.name}
                                render={({ field, meta }: any) => (
                                    <div className="form-field">
                                        <label className="form-label">{input.label}</label>
                                        {input.type !== "select" ? (
                                            <UI.Input width="255px" type={input.type} {...field} />
                                        ) : (
                                            <UI.Select width={255} {...field} options={authorOptions} />
                                        )}

                                        {meta.touched && meta.error && <div className="form-error"> {meta.error}</div>}
                                    </div>
                                )}
                            />
                        ))}

                        <UI.Button>Сохранить</UI.Button>
                        <div className="form-msg">{msg}</div>
                    </form>
                )
            }}
        </Formik>
    )
}
