import { createBrowserNavigation } from "navi"
import { rootRoutes } from "./routes"

// Используется browser history api
export const navigation = createBrowserNavigation({
    routes: rootRoutes,
})
