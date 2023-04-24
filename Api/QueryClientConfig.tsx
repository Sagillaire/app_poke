'use client'
import { ReactNode } from 'react';
import { QueryClientProvider as Provider, QueryClient } from 'react-query';

/**
 * @description React Query Client
 */
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

/**
 * @description React Query Client Provider
 */
export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider client={queryClient}>
            {children}
        </Provider>
    )
}