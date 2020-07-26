import { createSlice } from "@reduxjs/toolkit"
import booksJson from "./authors.json"
import { normalize } from "normalizr"
import { author } from "./schemas"

export interface Author {
    first_name: string
    last_name: string
    id: number
}

export interface InitialState {
    authors: { [key: string]: Author } | undefined
    authorsIDs: number[]
}

const normalizedData = normalize(booksJson, [author])
const initialState: InitialState = {
    authors: normalizedData.entities.authors,
    authorsIDs: normalizedData.result,
}

export const authorSlice = createSlice({
    name: "author",
    initialState,
    reducers: {
        editAuthor(state, { payload }) {
            if (state.authors) {
                state.authors[payload.id] = payload
            }
        },
        removeAuthor(state, { payload }: { payload: number }) {
            state.authorsIDs = state.authorsIDs.filter((id) => id !== payload)

            if (state.authors) {
                delete state.authors[payload.toString()]
            }
        },
        createAuthor(state, { payload }) {
            const newId = state.authorsIDs.slice(-1)[0] + 1
            const newAuthor: Author = { id: newId, last_name: payload.last_name, first_name: payload.first_name }

            if (state.authors) {
                state.authors[newId] = newAuthor
            }

            state.authorsIDs.push(newId)
        },
    },
})

export const { editAuthor, removeAuthor, createAuthor } = authorSlice.actions
export default authorSlice.reducer
