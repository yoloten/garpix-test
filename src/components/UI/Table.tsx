import { Link, useLinkProps } from "react-navi"
import React from "react"

import useWindowSize from "utils/useWindowSize"
import * as Icons from "public/icons"

interface Props {
    titles: { [key: string]: string }[]
    deleteItem: (id: number) => void
    link: string
    data: any[]
}

export const Table = ({ titles, data, deleteItem, link }: Props): JSX.Element => {
    const width = useWindowSize()

    const Titles = (
        <div className="table-item">
            <>
                {titles.map((obj) => (
                    <div className="table-row grey" key={obj[Object.keys(obj)[0]]}>
                        {obj[Object.keys(obj)[0]]}
                    </div>
                ))}
            </>
            <div className="table-actions" />
        </div>
    )
    console.log(link)
    return (
        <div className="table">
            {width > 600 ? Titles : ""}
            {data[1].map((id: number) => {
                let authorId = 0

                if (data[0] && data[0][id].author_id) {
                    authorId = data[0][id].author_id.toString()
                }

                const author = data[2] && data[2][authorId]
                const book = data[0] && data[0][id]

                return (
                    <div className={width <= 600 ? "table-change" : ""} key={id}>
                        {width <= 600 ? Titles : ""}
                        <div className="table-item">
                            <>
                                {titles.map((title) => {
                                    if (Object.keys(title)[0] !== "id" && Object.keys(title)[0] !== "created_at") {
                                        return (
                                            <div className="table-row">
                                                {Object.keys(title)[0] + "_id" === "author_id"
                                                    ? `${author.first_name} ${author.last_name}`
                                                    : book[Object.keys(title)[0]]}
                                            </div>
                                        )
                                    }
                                })}
                            </>
                            <div className="table-actions">
                                <Link href={`/${link}/view?id=${id}`}>
                                    <Icons.Eye />
                                </Link>
                                <Link href={`/${link}/edit?id=${id}`}>
                                    <Icons.Edit />
                                </Link>
                                <div onClick={() => deleteItem(id)}>
                                    <Icons.Trash />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
