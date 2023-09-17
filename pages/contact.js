import { Fragment, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/layout";
import styles from "@/styles/contact.module.css";
import ContactAvatar from "@/assets/images/contact_avatar.png";
import ContactPhoneIcon from "@/assets/icons/contact_phone";
import ContactInstagramIcon from "@/assets/icons/contact_instagram";
import ContactWhatsappIcon from "@/assets/icons/contact_whatsapp";
import ContactAddressIcon from "@/assets/icons/contact_address";
import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import("../components/map/index"), {
  ssr: false,
});

const Contact = () => {
  return (
    <Fragment>
      {/* head */}
      <Head>
        <title>اولین کلینیک درمان ناخن در قزوین | تماس با کلینیک</title>
        <meta
          name="description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | تماس با کلینیک"
        />
        <meta
          property="og:title"
          content="اولین کلینیک درمان ناخن در قزوین | تماس با کلینیک"
        />
        <meta
          property="og:description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | تماس با کلینیک"
        />
        <meta property="og:url" content="https://baharpod.ir/" />
        <meta property="og:site_name" content="کلینیک درمان ناخن" />
        <meta
          name="twitter:title"
          content="اولین کلینیک درمان ناخن در قزوین | تماس با کلینیک"
        />
        <meta
          name="twitter:description"
          content="
          اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | تماس با کلینیک"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#156419" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="کلینیک درمان ناخن در قزوین"
          href="https://baharpod.ir/"
        />
        <link rel="canonical" href="https://baharpod.ir/" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
        />
      </Head>
      {/* page body */}
      <Layout>
        <div className={styles.background_image2}>
          <div className={styles.background_image2_right}>
            <Image
              src={ContactAvatar}
              alt="بهار پودولوژی اولین کلینیک درمان ناخن در قزوین"
            />
          </div>
          <div className={styles.background_image2_left}>
            <h1>بهار نیک پور</h1>
            <h3>اولین کلینیک درمان ناخن در قزوین</h3>
            <span>با بیش از ۱۰ سال سابقه ی کار</span>
          </div>
        </div>
        <div className={styles.contactUs_information}>
          <div className={styles.contactUs_box}>
            <Link href={"tel://09390624049"}>
              <ContactPhoneIcon />
              <h3>تماس مستقیم</h3>
              <h4>۰۹۳۹۰۶۲۴۰۴۹</h4>
            </Link>
          </div>
          <div className={styles.contactUs_box}>
            <Link href={"https://instagram.com/baharspedicure"} target="_blank">
              <ContactInstagramIcon />
              <h3>اینستاگرام</h3>
              <h4 style={{ direction: "ltr" }}>@baharspedicure</h4>
              <h4 style={{ direction: "ltr" }}>@baharspodology</h4>
            </Link>
          </div>
          <div className={styles.contactUs_box}>
            <Link href={"whatsapp://send?phone=09390624049"}>
              <ContactWhatsappIcon />
              <h3>پیام به واتساپ</h3>
              <h4>۰۹۳۹۰۶۲۴۰۴۹</h4>
            </Link>
          </div>
        </div>
        <div className={styles.section_Address}>
          <div className={styles.Address1}>
            <ContactAddressIcon />
            <h3>
              آدرس : قزوین ، چهار راه شهرداری ، ضلع شرقی ، پلاک ۴۶ ، طبقه ۲ ،
              واحد ۳ ، جنب آموزشگاه فارابی
            </h3>
          </div>
        </div>
        <div class={styles.section_about}>
          <div className={styles.mapTitle}>
            <h1>آدرس ما را روی نقشه پیدا کنید</h1>
          </div>
          <div className={styles.map_container}>
            <MapComponent />
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};
export default Contact;
