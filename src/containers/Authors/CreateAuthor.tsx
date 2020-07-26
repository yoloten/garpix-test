import { useDispatch, useSelector } from "react-redux"
import { createAuthor } from "slices/authorSlice"
import { Link } from "react-navi"
import React from "react"

import { authorValidation } from "utils/validationSchemas"
import { Form, Navbar } from "components/UI"
import { RootState } from "reducer"

export interface AuthorValues {
    first_name: string | undefined
    last_name: string | undefined
}

export default function index(): JSX.Element {
    const { authors, authorsIDs } = useSelector((state: RootState) => state.author)
    const dispatch = useDispatch()

    const authorOptions = authorsIDs.map(
        (id) => authors && { value: authors[id].id, label: `${authors[id].first_name} ${authors[id].last_name}` },
    )

    const initialValues: AuthorValues = {
        first_name: "",
        last_name: "",
    }

    const fields = [
        { name: "first_name", label: "Имя Писателя", type: "text" },
        { name: "last_name", label: "Фамилия Писателя", type: "text" },
    ]

    const onCreate = (values: AuthorValues) => dispatch(createAuthor(values))

    return (
        <div className="create">
            <Navbar />
            <Link href="/" className="create-tohome">
                &larr; На главную
            </Link>
            <div className="create-main">
                <div className="create-main-title">Добавить автора</div>
                <Form
                    validationSchema={authorValidation}
                    initialValues={initialValues}
                    getValuesFromForm={onCreate}
                    fields={fields}
                />
            </div>
        </div>
    )
}
