import HelmetProvider from "react-navi-helmet-async"
import { navigation } from "containers/Navigation"
import { View, Router } from "react-navi"
import React, { Suspense } from "react"

export default function App(): JSX.Element {
    return (
        <HelmetProvider>
            <Router navigation={navigation}>
                <div>
                    <Suspense fallback={null}>
                        <View />
                    </Suspense>
                </div>
            </Router>
        </HelmetProvider>
    )
}
