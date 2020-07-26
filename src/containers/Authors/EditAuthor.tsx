import { useSelector, useDispatch } from "react-redux"
import { useCurrentRoute, Link } from "react-navi"
import { AuthorValues } from "./CreateAuthor"
import { editAuthor } from "slices/authorSlice"
import { RootState } from "reducer"
import React from "react"

import { authorValidation } from "utils/validationSchemas"
import { Form, Navbar } from "components/UI"

export default function EditBook(): JSX.Element {
    const { author } = useSelector((state: RootState) => state)
    const { url } = useCurrentRoute()
    const dispatch = useDispatch()

    const existedAuthor = author.authors && author.authors[url.query.id]
    const initialValues: AuthorValues = {
        first_name: existedAuthor?.first_name,
        last_name: existedAuthor?.last_name,
    }
    const fields = [
        { name: "first_name", label: "Имя Писателя", type: "text" },
        { name: "last_name", label: "Фамилия Писателя", type: "text" },
    ]

    const onEdit = (values: AuthorValues) => {
        dispatch(editAuthor({ ...values, id: url.query.id }))
    }

    return (
        <div className="create">
            <Navbar />
            <Link href="/" className="create-tohome">
                &larr; На главную
            </Link>
            <div className="create-main">
                <div className="create-main-title">Изменить данные о книге</div>
                <Form
                    validationSchema={authorValidation}
                    initialValues={initialValues}
                    getValuesFromForm={onEdit}
                    fields={fields}
                    isEdit={true}
                />
            </div>
        </div>
    )
}
