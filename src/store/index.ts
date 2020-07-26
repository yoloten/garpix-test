import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1"
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import rootReducer from "reducer"
import logger from "redux-logger"


const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel1
  }
  
const persistedReducer = persistReducer(persistConfig, rootReducer)



export default () => {
    const store = configureStore({
        reducer: persistedReducer,
        middleware: getDefaultMiddleware({serializableCheck: false})//.concat(logger)
    })
    const persistor = persistStore(store)

    return { store, persistor }
}

// if (process.env.NODE_ENV === "development" && module.hot) {
//     module.hot.accept("../reducers", () => {
//         const newRootReducer = require("../reducers").default
//         store.replaceReducer(newRootReducer)
//     })
// }

// export type AppDispatch = typeof store.dispatch
