import { Inter } from 'next/font/google'
import './globals.css'
import GlobalState from '../context/index'
import NextThemeProvider from '../theme-provider/index'
import CommonLayout from '../components/common-layout/index'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalState>
        <NextThemeProvider>
          <CommonLayout>
          {children}
          </CommonLayout>
        </NextThemeProvider>
      </GlobalState>
    </html>
  )
}
