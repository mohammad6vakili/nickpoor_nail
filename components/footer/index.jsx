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

const Footer = () => {
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
          <button>
            <SendMailIcon />
          </button>
          <input placeholder="ایمیل" type="email" />
        </div>
        <div className={styles.link}>
          <span>
            <a href="home">کلینیک درمان ناخن </a>
          </span>

          <a href="ortonil">ارتونیل (ارتودنسی ناخن)</a>
          <a href="treatment_nailFungus">کلینیک درمان قارچ ناخن پا</a>
          <a href="pedicure_treatment">پدیکور درمانی</a>
          <a href="treatment_ingrownToenails">فرو رفتن ناخن در گوشت</a>
        </div>
        <div className={styles.link}>
          <span>
            <a href="home">دسترسی سریع</a>
          </span>

          <a href="home">صفحه اصلی</a>
          <a href="nail treatment clinic">کلینیک درمان ناخن</a>
          <a href="blog">وبلاگ</a>
          <a href="about us">درباره ما</a>
          <a href="contact us">تماس با ما</a>
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
