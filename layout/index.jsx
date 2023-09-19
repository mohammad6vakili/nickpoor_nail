import { useState, useEffect } from "react";
import styles from "./layout.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PhoneIcon from "@/assets/icons/phone";

const Layout = ({ children }) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const scroll = (event) => {
      if (window.scrollY > 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", scroll, false);
    return () => window.removeEventListener("scroll", scroll, false);
  }, []);

  return (
    <main className={styles.layout_container}>
      <Header isScroll={isScroll} />
      <div className={styles.page_body}>{children}</div>
      <Footer />
      <a className={styles.contact_button} href="tel:09390624049">
        <PhoneIcon />
      </a>
    </main>
  );
};
export default Layout;
