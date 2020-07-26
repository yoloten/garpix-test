import { useSelector, useDispatch } from "react-redux"
import { useCurrentRoute } from "react-navi"
import React from "react"

import MainLayout from "components/Layout"
import * as Icons from "public/icons"
import { Card } from "components/UI"
import { RootState } from "reducer"

export default function index(): JSX.Element {
    const { authors } = useSelector((state: RootState) => state.author)
    const { url } = useCurrentRoute()

    const { id } = url.query
    const data = [
        {
            icon: <Icons.Author />,
            titles: authors ? [`Имя: ${authors[id].first_name}`, `Фамилия: ${authors[id].last_name}`] : [],
            links: [],
        },
    ]

    if (authors) {
        return (
            <MainLayout>
                <Card data={data} />
            </MainLayout>
        )
    } else return <></>
}
