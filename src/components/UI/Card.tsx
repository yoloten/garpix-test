import { Link } from "react-navi"
import React from "react"

import { Button, Title } from "components/UI"

interface Props {
    data: {
        icon: JSX.Element
        titles: string[]
        links: string[]
    }[]
}

export const Card = ({ data }: Props): JSX.Element => {
    return (
        <div className="card">
            {data.map(({ icon, titles, links }, i) => (
                <div key={titles[0] + i} className="card-goTo">
                    <div className="card-icon">{icon}</div>
                    <div className="card-textbox">
                        {titles.map((title) => (
                            <Title key={title} fontSize="1.6rem" fontWeight={400}>
                                {title}
                            </Title>
                        ))}
                        {links.map((link) => (
                            <Link key={link} href={link}>
                                <Button>Перейти</Button>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
