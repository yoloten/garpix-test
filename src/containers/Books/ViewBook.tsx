import { useSelector, useDispatch } from "react-redux"
import { useCurrentRoute } from "react-navi"
import React from "react"

import MainLayout from "components/Layout"
import * as Icons from "public/icons"
import { Card } from "components/UI"
import { RootState } from "reducer"

export default function index(): JSX.Element {
    const { book, author } = useSelector((state: RootState) => state)
    const { url } = useCurrentRoute()

    const { authors } = author
    const { id } = url.query
    const { books } = book

    const data = [
        {
            icon: <Icons.Books />,
            titles:
                authors && books
                    ? [
                          `Название книги: ${books[id].title}`,
                          `Автор книги: ${authors[books[id].author_id].first_name} ${
                              authors[books[id].author_id].last_name
                          }`,
                          `Первая публикация: ${books[id].year} год`,
                      ]
                    : [],
            links: [],
        },
    ]

    if (books && authors) {
        return (
            <MainLayout>
                <Card data={data} />
            </MainLayout>
        )
    } else return <></>
}
