'use client'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Nav from "./nav";

interface RootLayoutProps {
    children: ReactNode
}
export default function ClientLayout({ children }: RootLayoutProps) {
    // Your client-side logic here
    const pathname = usePathname()
    return (
        <>
            {pathname !== '/' && (
                <Nav />
            )}
            <main>{children}</main>
        </>
    )
}