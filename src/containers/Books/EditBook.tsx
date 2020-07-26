import { useSelector, useDispatch } from "react-redux"
import { useCurrentRoute, Link } from "react-navi"
import { editBook } from "slices/bookSlice"
import { BooksValues } from "./CreateBook"
import React from "react"

import { bookValidation } from "utils/validationSchemas"
import { authorOptions } from "utils/options"
import { Form, Navbar } from "components/UI"
import { RootState } from "reducer"

export default function EditBook(): JSX.Element {
    const { author, book } = useSelector((state: RootState) => state)
    const { url } = useCurrentRoute()
    const dispatch = useDispatch()

    const options = authorOptions(author.authorsIDs, author.authors)
    const existedBooks = book.books && book.books[url.query.id]
    const initialValues: BooksValues = {
        author_id: existedBooks?.author_id,
        title: existedBooks?.title,
        year: existedBooks?.year,
    }
    const fields = [
        { name: "title", label: "Название книги", type: "text" },
        { name: "year", label: "Первая публикация", type: "number" },
        { name: "author_id", label: "Выберите автора", type: "select" },
    ]

    const onEdit = (values: BooksValues) => {
        dispatch(editBook({ ...values, id: url.query.id }))
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
                    validationSchema={bookValidation}
                    initialValues={initialValues}
                    getValuesFromForm={onEdit}
                    authorOptions={options}
                    fields={fields}
                    isEdit={true}
                />
            </div>
        </div>
    )
}
