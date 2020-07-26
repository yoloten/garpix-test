import "core-js/stable"
import "regenerator-runtime/runtime"

import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import * as ReactDOM from "react-dom"
import React from "react"

import App from "./containers/App"
import persistedStore from "store"

import "public/styles/_main.sass"

const render = () => {
    ReactDOM.render(
        <Provider store={persistedStore().store}>
            <PersistGate loading={null} persistor={persistedStore().persistor}>
                <App />
            </PersistGate>
        </Provider>,
        document.getElementById("root"),
    )
}

render()

if (process.env.NODE_ENV === "development" && module.hot) {
    module.hot.accept("./containers/App", render)
}
