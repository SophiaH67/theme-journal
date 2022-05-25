import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/nav/Nav";
import ReactModal from "react-modal";
import Footer from "../components/home/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  ReactModal.setAppElement("#__next");
  return (
    <div className="min-w-screen min-h-screen font-roboto">
      <div className="flex min-h-screen flex-col justify-between">
        <div>
          <Nav />
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
