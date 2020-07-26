import { mount, route, redirect, lazy, Matcher } from "navi"
import React from "react"

import CreateAuthor from "../Authors/CreateAuthor"
import EditAuthor from "../Authors/EditAuthor"
import ViewAuthor from "../Authors/ViewAuthor"
import CreateBook from "../Books/CreateBook"
import EditBook from "../Books/EditBook"
import ViewBook from "../Books/ViewBook"
import Authors from "../Authors"
import Books from "../Books"
import Home from "../Home"

export const rootRoutes = mount({
    "/": route({
        view: <Home />,
        title: "Библиотека",
    }),
    "/books": lazy(() =>
        mount({
            "/": route({
                view: <Books />,
                title: "Список книг",
            }),
            "/create": route({
                view: <CreateBook />,
                title: "Добавить книгу",
            }),
            "/edit": route({
                view: <EditBook />,
                title: "Изменить данные о книге",
            }),
            "/view": route({
                view: <ViewBook />,
                title: "Просмотр книги",
            }),
        }),
    ),
    "/authors": lazy(() =>
        mount({
            "/": route({
                view: <Authors />,
                title: "Список авторов",
            }),
            "/create": route({
                view: <CreateAuthor />,
                title: "Добавить автора",
            }),
            "/edit": route({
                view: <EditAuthor />,
                title: "Изменить данные об авторе",
            }),
            "/view": route({
                view: <ViewAuthor />,
                title: "Просмотр автора",
            }),
        }),
    ),
})
