import { createSlice } from "@reduxjs/toolkit"
import { normalize } from "normalizr"
import booksJson from "./books.json"
import { book } from "./schemas"
import * as dayjs from "dayjs"

export interface Book {
    created_at: number
    author_id: number
    title: string
    year: number
    id: number
}

export interface InitialState {
    books: { [key: string]: Book } | undefined
    booksIDs: number[]
}

const normalizedData = normalize(booksJson, [book])
const initialState: InitialState = {
    books: normalizedData.entities.books,
    booksIDs: normalizedData.result,
}

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        editBook(state, { payload }) {
            if (state.books) {
                state.books[payload.id] = payload
            }
        },
        removeBook(state, { payload }: { payload: number }) {
            state.booksIDs = state.booksIDs.filter((id) => id !== payload)

            if (state.books) {
                delete state.books[payload.toString()]
            }
        },
        removeBookByAuthor(state, { payload }: { payload: number }) {
            const idsToRemove = state.booksIDs.map((id) => {
                if (state.books) {
                    if (state.books[id].author_id === payload) {
                        delete state.books[id]
                        return id
                    }
                }
            })

            state.booksIDs = state.booksIDs.filter((id) => !idsToRemove.includes(id))
        },
        createBook(state, { payload }) {
            const newId = state.booksIDs.slice(-1)[0] + 1
            const created_at = dayjs(new Date()).unix()
            const newBook: Book = {
                id: newId,
                title: payload.title,
                author_id: payload.author_id,
                year: payload.year,
                created_at,
            }

            if (state.books) {
                state.books[newId] = newBook
            }
            state.booksIDs.push(newId)
        },
    },
})

export const { editBook, removeBook, createBook, removeBookByAuthor } = bookSlice.actions
export default bookSlice.reducer
