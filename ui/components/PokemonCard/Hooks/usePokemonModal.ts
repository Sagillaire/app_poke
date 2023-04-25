'use client'
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export const usePokemonModal = () => {
    const [open, setOpen] = useState<boolean>(false)
    const router = useRouter()
    const typeId = router?.query?.id as string

    const handlePokeModal = () => setOpen(!open)
    const handleClosePokeModal = () => {
        setOpen(!open)
        if (typeId) {
            return router.push(`/type/${typeId}`)
        }
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