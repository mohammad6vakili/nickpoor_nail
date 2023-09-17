import styles from "./header.module.css";
import Image from "next/image";
import WhatsappIcon from "@/assets/icons/whatsapp";
import InstagramIcon from "@/assets/icons/instagram";
import TelegramIcon from "@/assets/icons/telegram";
import GpsIcon from "@/assets/icons/gps";
import PhoneIcon from "@/assets/icons/phone";
import ClockIcon from "@/assets/icons/clock";
import Logo from "@/assets/images/logo.svg";
import BottomArrowIcon from "@/assets/icons/bottom_arrow";
import Link from "next/link";
import { Popover } from "antd";

const Header = ({ isScroll }) => {
  const categoriesPopover = (
    <ul className={styles.categories_popover}>
      <li>
        <Link href={"/categories"}>ارتونیل (ارتودنسی ناخن)</Link>
      </li>
      <li>
        <Link href={"/categories"}>ناخن فرو رفته در گوشت</Link>
      </li>
      <li>
        <Link href={"/categories"}>درمان قارچ ناخن</Link>
      </li>
      <li>
        <Link href={"/categories"}>درمان ناخن فرورفته</Link>
      </li>
    </ul>
  );

  return (
    <header className={styles.header}>
      {/* header_top */}
      <div className={styles.header_top}>
        {/* Social_media */}
        <div className={styles.Social_media}>
          <Link href={"https://whatsapp.com"} target="_blank">
            <WhatsappIcon />
          </Link>
          <Link href={"https://instagram.com"} target="_blank">
            <InstagramIcon />
          </Link>
          <Link href={"https://telegram.org"} target="_blank">
            <TelegramIcon />
          </Link>
        </div>
        {/* information */}
        <div className={styles.information}>
          <div className={styles.gps}>
            <GpsIcon />
            <h4>آدرس : قزوین ، چهار راه شهرداری ، پلاک ۴۶ ، طبقه ۲ ، واحد ۳</h4>
          </div>
          <div className={styles.phone}>
            <PhoneIcon />
            ۰۹۳۹۰۶۲۴۰۴۹
          </div>
          <div>
            <ClockIcon />
            ۱۱ صبح تا ۳ بعدازظهر
          </div>
          <div></div>
        </div>
      </div>
      {/* header_bottom */}
      <div
        id={isScroll ? styles.header_bottom_is_scroll : ""}
        className={styles.header_bottom}
      >
        <div className={styles.logo}>
          <Link href={"/"}>
            <Image src={Logo} alt="Bahar Podology" />
          </Link>
        </div>
        {/* navbar */}
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li>
              <Popover
                content={categoriesPopover}
                title={null}
                placement="bottom"
              >
                <Link href="/">
                  <span>کلینیک درمان ناخن</span>
                  <BottomArrowIcon />
                </Link>
              </Popover>
            </li>
            <li>
              <Link href="/blog">وبلاگ</Link>
            </li>
            <li>
              <Link href="/about">درباره ما</Link>
            </li>
            <li>
              <Link href="/contact">تماس با ما</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.phone_consultancy}>
          <Link href="tel:09390624049">
            <div className={styles.circle}>
              <PhoneIcon />
            </div>
            <h4>مشاوره تلفنی :۰۹۳۹۰۶۲۴۰۴۹</h4>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
