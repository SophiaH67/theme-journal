import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/nav/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen min-w-screen">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
