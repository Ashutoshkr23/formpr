import { Footer } from "@/components";
import { CartProvider } from "@/context/CartContext";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Oswald, Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
  variable: "--poppins-font",
});

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <CartProvider>
        <main className={`${poppins.variable} font-sans bg-whitebg `}>
          <Component {...pageProps} />
          {/* <Footer /> */}
        </main>
      </CartProvider>
    </SessionProvider>
  );
}

export default MyApp;
