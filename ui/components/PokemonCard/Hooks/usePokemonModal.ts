'use client'
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export const usePokemonModal = () => {
    const [open, setOpen] = useState<boolean>(false)
    const router = useRouter()

    const handlePokeModal = () => setOpen(!open)
    const handleClosePokeModal = () => {
        setOpen(!open)
        router.push('/')
    }

    const searchParams = useSearchParams()
    const pokeName = searchParams.get('name')

    useEffect(() => {
        if (pokeName) {
            handlePokeModal()
        }
    }, [pokeName])

    return { open, handlePokeModal, handleClosePokeModal }
}