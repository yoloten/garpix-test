import { useSelector, useDispatch } from "react-redux"
import { removeBook } from "slices/bookSlice"
import { RootState } from "reducer"
import { Link } from "react-navi"
import React from "react"

import MainLayout from "components/Layout"
import * as UI from "components/UI"

export default function index(): JSX.Element {
    const { book, author } = useSelector((state: RootState) => state)
    const dispatch = useDispatch()

    const deleteBook = (id: number) => {
        dispatch(removeBook(id))
    }

    return (
        <MainLayout>
            <div className="list-header">
                <UI.Title fontSize="1.25rem" fontWeight={500}>
                    Список книг
                </UI.Title>
                <Link href="/books/create">
                    <UI.Button>Добавить книгу</UI.Button>
                </Link>
            </div>
            <UI.Table
                titles={[{ title: "Название книги" }, { author: "Автор" }, { year: "Первая публикация" }]}
                data={[book.books, book.booksIDs, author.authors]}
                deleteItem={deleteBook}
                link="books"
            />
        </MainLayout>
    )
}
