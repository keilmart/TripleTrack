import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const isBrowser = typeof window !== "undefined"; // Check if the code is running on the client

  return (
    <>
      {isBrowser ? (
        <Auth0Provider
          domain={process.env.AUTH0_PUBLIC_DOMAIN}
          clientId={process.env.AUTH0_PUBLIC_CLIENT_ID}
          authorizationParams={{
            redirect_uri: window.location.origin, // Ensures proper redirect URI
          }}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <Nav />
            <Component {...pageProps} />
            <Footer />
          </ThemeProvider>
        </Auth0Provider>
      ) : (
        // Render without Auth0Provider during SSR
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      )}
    </>
  );
}

export default MyApp;
