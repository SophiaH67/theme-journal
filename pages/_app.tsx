import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/nav/Nav";
import ReactModal from "react-modal";

function MyApp({ Component, pageProps }: AppProps) {
  ReactModal.setAppElement("#__next");
  return (
    <div className="min-w-screen min-h-screen">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
