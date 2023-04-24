'use client'
import HeaderView from './Header'
import React, { ReactNode } from 'react'
import { Main, ContentLayout } from './styles'

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Main>
            <HeaderView />
            <ContentLayout>
                {children}
            </ContentLayout>
        </Main>
    )
}
