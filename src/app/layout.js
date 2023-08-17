import './styles/globals.scss';
import { Inter } from 'next/font/google'
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Startupz by Francis Bernal Cabra',
  description: 'Landing page created with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
