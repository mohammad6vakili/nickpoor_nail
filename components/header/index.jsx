import { useState } from "react";
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
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { Popover } from "antd";
import HamburgerMenu from "../hamburger_menu";
import { CONFIG } from "@/constant/config";

const Header = ({ isScroll }) => {
  const [open, setOpen] = useState(false);
  const categoriesPopover = (
    <ul className={styles.categories_popover}>
      <li>
        <Link href={"/categories/ortonixia"}>ارتونیل (ارتودنسی ناخن)</Link>
      </li>
      <li>
        <Link href={"/categories/nail_digging_into_the_flesh"}>
          فرو رفتن ناخن در گوشت
        </Link>
      </li>
      <li>
        <Link href={"/categories/nail_fungus"}>درمان قارچ ناخن</Link>
      </li>
      <li>
        <Link href={"/categories/pedicure_treatment"}>پدیکور درمانی</Link>
      </li>
      <li>
        <Link href={"/categories/pedicure_treatment"}>درمان ترک پا</Link>
      </li>
    </ul>
  );

  return (
    <header
      style={open ? { zIndex: 9 } : { zIndex: 9999 }}
      className={styles.header}
    >
      {/* header_top */}
      <div className={styles.header_top}>
        {/* Social_media */}
        <div className={styles.Social_media}>
          <Link href={CONFIG.WHATSAPP_NUMBER} target="_blank">
            <WhatsappIcon />
          </Link>
          <Link href={CONFIG.INSTAGRAM_ID} target="_blank">
            <InstagramIcon />
          </Link>
        </div>
        {/* information */}
        <div className={styles.information}>
          <div className={styles.gps}>
            <GpsIcon />
            <h4>{CONFIG.ADRESS}</h4>
          </div>
          <div className={styles.phone}>
            <PhoneIcon />
            {CONFIG.MOBILE_NUMBER}
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
              <Link href="/">خانه</Link>
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
          <Link href={`tel:${CONFIG.MOBILE_NUMBER}`}>
            <div className={styles.circle}>
              <PhoneIcon />
            </div>
            <h4>مشاوره تلفنی : {CONFIG.MOBILE_NUMBER}</h4>
          </Link>
        </div>
        {/* hamburger menu btn */}

        <button
          onClick={() => setOpen(true)}
          type="button"
          className={styles.ham_menu_btn}
        >
          <AiOutlineMenu />
        </button>
      </div>
      <HamburgerMenu open={open} setOpen={setOpen} />
    </header>
  );
};
export default Header;
