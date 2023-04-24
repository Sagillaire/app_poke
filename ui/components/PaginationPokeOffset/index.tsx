import React, { FC } from 'react'
import { TPaginationPokeOffset } from './types'
import { ButtonPage, PaginationContainer } from './styled'

export const PaginationPokeOffset: FC<TPaginationPokeOffset> = ({ pokes, isLoading, setOffset, offset }) => {
    const totalPages = Math.ceil(Number(pokes?.count) / 20);
    const currentPage = Math.floor(offset / 20) + 1;

    return (
        <PaginationContainer>
            <ButtonPage
                disabled={!pokes?.previous || isLoading}
                onClick={() => setOffset(offset - 20)}
            >Prev Page</ButtonPage>
            <ButtonPage
                disabled={!pokes?.next || isLoading}
                onClick={() => setOffset(offset + 20)}
            >Next Page</ButtonPage>
            <div style={{ color: 'white', fontSize: '12px' }}>
                Page: {currentPage} of {totalPages}
            </div>
        </PaginationContainer>
    )
}
