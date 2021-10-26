import { StoreProvider } from "easy-peasy";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { store, useStore } from "../store";

import "../styles/globals.css";
import { strapi } from "../utils";

export default function MyApp({ Component, pageProps }) {
  const { setUser, setAuth } = useStore();

  async function checkUser() {
    const resp = await strapi.fetchUser();
    console.log(resp);
    if (resp) {
      setUser({
        user: resp,
      });
      setAuth(true);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <StoreProvider store={store}>
        <Container>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </StoreProvider>
    </>
  );
}
