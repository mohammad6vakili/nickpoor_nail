import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="white" height={3.5} />
      <Component {...pageProps} />
    </>
  );
}
