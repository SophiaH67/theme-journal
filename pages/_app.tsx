import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/nav/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-w-screen min-h-screen">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
