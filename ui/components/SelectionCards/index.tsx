'use client'
import { FC } from "react"
import { TSelectionCards } from "./types"
import { useRouter } from "next/router"
import { CardContainer, CardSelection } from "./styled"

export const SelectionCards: FC<TSelectionCards> = ({ children, url }) => {
    const router = useRouter()
    const typeId = router?.query?.id as string
    const handlePush = (url?: string) => {
        console.log('ENTRO', typeId)
        if (typeId) {
            return router.push(`/type/${typeId}/?name=${url}`)
        }

        router.push(`/?name=${url}`)
    }

    return (
        <CardContainer>
            {children}
            <CardSelection onClick={() => handlePush(url)}>
                SELECT
            </CardSelection>
        </CardContainer>
    )
}
