'use client'
import { FC } from "react"
import { TSelectionCards } from "./types"
import { useRouter } from "next/navigation"
import { CardContainer, CardSelection } from "./styled"

export const SelectionCards: FC<TSelectionCards> = ({ children, url }) => {
    const router = useRouter()

    return (
        <CardContainer>
            {children}
            <CardSelection onClick={() => router.push(`/?name=${url}`)}>
                SELECT
            </CardSelection>
        </CardContainer>
    )
}
