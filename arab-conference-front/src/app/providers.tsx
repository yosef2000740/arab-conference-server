'use client'

import AuthProvider from '@/context/Auth'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
            <AuthProvider>
                {children}
            </AuthProvider>
    )
}