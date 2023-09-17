import styles from "./footer.module.css";
import Logo from "@/assets/images/logo.svg";
import Image from "next/image";
import WhatsappFooterIcon from "@/assets/icons/whatsapp_footer";
import InstagramFooterIcon from "@/assets/icons/instagram_footer";
import TelegramFooter from "@/assets/icons/telegram_footer";
import Link from "next/link";
import SendMailIcon from "@/assets/icons/send_mail";
import LocationFooterIcon from "@/assets/icons/location_footer";
import PhoneFooterIcon from "@/assets/icons/phone_footer";
import ClockFooterIcon from "@/assets/icons/clock_footer";
import { useState } from "react";
import { message } from "antd";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className={styles.footer}>
      {/* footer_top */}
      <div className={styles.footer_top}>
        <div className={styles.logo}>
          <Image src={Logo} alt="Bahar Podology" />
        </div>
        <div>
          <Link href={"https://whatsapp.com"} target="_blank">
            <WhatsappFooterIcon />
          </Link>
          <Link href={"https://instagram.com"} target="_blank">
            <InstagramFooterIcon />
          </Link>
          <Link href={"https://telegram.org"} target="_blank">
            <TelegramFooter />
          </Link>
        </div>
      </div>
      {/* line_footer */}
      <div className={styles.line_footer}></div>
      {/* footer_center */}
      <div className={styles.footer_center}>
        {/* input_email */}
        <div className={styles.input_email}>
          <button
            onClick={() => {
              if (email.length === 0) {
                message.error("لطفا ایمیل خود را وارد کنید");
              } else {
                message.success("با موفقیت انجام شد");
              }
            }}
          >
            <SendMailIcon />
          </button>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ایمیل"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className={styles.link}>
          <span>
            <Link href="/">کلینیک درمان ناخن </Link>
          </span>

          <Link href="/categories">ارتونیل (ارتودنسی ناخن)</Link>
          <Link href="/categories">کلینیک درمان قارچ ناخن پا</Link>
          <Link href="/categories">پدیکور درمانی</Link>
          <Link href="/categories">فرو رفتن ناخن در گوشت</Link>
        </div>
        <div className={styles.link}>
          <span>
            <Link href="/">دسترسی سریع</Link>
          </span>

          <Link href="/">صفحه اصلی</Link>
          <Link href="/">کلینیک درمان ناخن</Link>
          <Link href="/blog">وبلاگ</Link>
          <Link href="/about">درباره ما</Link>
          <Link href="/contact">تماس با ما</Link>
        </div>
        <div className={styles.footer_information}>
          <div>
            <LocationFooterIcon />
            <span>
              آدرس : قزوین ، چهار راه شهرداری ، پلاک ۴۶ ، طبقه ۲ ، واحد ۳
            </span>
          </div>
          <div>
            <PhoneFooterIcon />
            <span>۰۹۳۹۰۶۲۴۰۴۹</span>
          </div>
          <div>
            <ClockFooterIcon />
            <span>۱۱ صبح تا ۳ بعدازظهر</span>
          </div>
        </div>
      </div>
      <div className={styles.line_last}></div>
      <div className={styles.footer_bottom}>
        <span>کلیه حقوق مادی و معنوی این وب‌سایت محفوظ است.</span>
      </div>
    </footer>
  );
};
export default Footer;