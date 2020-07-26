import React, { useState, useEffect } from "react"

export default function useWindowSize(): number {
    function getSize() {
        return window.innerWidth
    }

    const [windowSize, setWindowSize] = useState(getSize)

    useEffect(() => {
        function handleResize() {
            setWindowSize(getSize())
        }

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowSize
}
