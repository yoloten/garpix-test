import { useDispatch, useSelector } from "react-redux"
import { createBook } from "slices/bookSlice"
import { RootState } from "reducer"
import { Link } from "react-navi"
import React from "react"

import { bookValidation } from "utils/validationSchemas"
import { Form, Navbar } from "components/UI"
import { authorOptions } from "utils/options"

export interface BooksValues {
    author_id?: number
    title?: string
    year?: number
}

export default function index(): JSX.Element {
    const { authors, authorsIDs } = useSelector((state: RootState) => state.author)
    const dispatch = useDispatch()

    const options = authorOptions(authorsIDs, authors)

    const initialValues: BooksValues = {
        author_id: undefined,
        year: 2020,
        title: "",
    }
    const fields = [
        { name: "title", label: "Название книги", type: "text" },
        { name: "year", label: "Первая публикация", type: "number" },
        { name: "author_id", label: "Выберите автора", type: "select" },
    ]

    const onCreate = (values: BooksValues) => {
        dispatch(createBook(values))
    }

    return (
        <div className="create">
            <Navbar />
            <Link href="/" className="create-tohome">
                &larr; На главную
            </Link>
            <div className="create-main">
                <div className="create-main-title">Добавить книгу</div>
                <Form
                    validationSchema={bookValidation}
                    initialValues={initialValues}
                    getValuesFromForm={onCreate}
                    authorOptions={options}
                    fields={fields}
                />
            </div>
        </div>
    )
}
