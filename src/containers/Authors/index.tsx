import { useSelector, useDispatch } from "react-redux"
import { removeBookByAuthor } from "slices/bookSlice"
import { removeAuthor } from "slices/authorSlice"
import { RootState } from "reducer"
import { Link } from "react-navi"
import * as dayjs from "dayjs"
import React from "react"

import MainLayout from "components/Layout"
import * as UI from "components/UI"

export default function index(): JSX.Element {
    const { authors, authorsIDs } = useSelector((state: RootState) => state.author)
    const dispatch = useDispatch()

    const deleteAuthor = (id: number) => {
        dispatch(removeBookByAuthor(id))
        dispatch(removeAuthor(id))
    }

    return (
        <MainLayout>
            <div className="list-header">
                <UI.Title fontSize="1.25rem" fontWeight={400}>
                    Список авторов
                </UI.Title>
                <Link href="/authors/create">
                    <UI.Button>Добавить автора</UI.Button>
                </Link>
            </div>
            <UI.Table
                titles={[{ last_name: "Фамилия Автора" }, { first_name: "Имя Автора" }]}
                data={[authors, authorsIDs]}
                deleteItem={deleteAuthor}
                link="authors"
            />
        </MainLayout>
    )
}
