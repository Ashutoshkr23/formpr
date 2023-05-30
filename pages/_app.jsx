import { Footer } from '@/components'
import { CartProvider } from '@/context/CartContext'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <CartProvider>
        <Component {...pageProps} />
        <Footer/>
      </CartProvider>
    </SessionProvider>
  )
}

export default MyApp
