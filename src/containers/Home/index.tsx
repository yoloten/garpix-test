import { Link } from "react-navi"
import React from "react"

import MainLayout from "components/Layout"
import * as Icons from "public/icons"
import { Card } from "components/UI"

export default function index(): JSX.Element {
    const data = [
        { icon: <Icons.Books />, titles: ["Список книг"], links: ["/books"] },
        { icon: <Icons.Author />, titles: ["Список авторов"], links: ["/authors"] },
    ]

    return (
        <MainLayout>
            <Card data={data} />
        </MainLayout>
    )
}
