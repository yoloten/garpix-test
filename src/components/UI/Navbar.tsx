import { Link } from "react-navi"
import React from "react"

export const Navbar = (): JSX.Element => {
    return (
        <div className="navbar">
            <Link className="logo navbar-link" href="/">
                GarpixTest
            </Link>
            <Link className="navbar-link" href="/books" activeClassName="navbar-activelink">
                Книги
            </Link>
            <Link className="navbar-link" href="/authors" activeClassName="navbar-activelink">
                Авторы
            </Link>
        </div>
    )
}
