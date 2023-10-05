import { Urbanist } from 'next/font/google'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import type { Metadata } from 'next'
import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Store',
	description: 'Store - The place for all your purchases.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<ModalProvider />
				<ToastProvider />
				{/* @ts-ignore */}
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
