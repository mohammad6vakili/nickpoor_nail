import Layout from "@/layout";
import styles from "@/styles/category.module.css";
import CloudBackgroundIcon from "@/assets/icons/cloud_background";
import DottedBackgroundIcon from "@/assets/icons/dotted_background";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import TreatmentOfCrackedFeetBanner from "@/assets/images/treatment_of_cracked_feet_banner.png";
import OrtonixiaContentImageOne from "@/assets/images/ortonixia_content_1.png";
import OrtonixiaContentImageTwo from "@/assets/images/ortonixia_content_2.png";
import OrtonixiaContentImageThree from "@/assets/images/ortonixia_content_3.png";
import OrtonixiaContentImageFour from "@/assets/images/ortonixia_content_4.png";

const TreatmentOfCrackedFeet = () => {
  const array = [
    {
      id: 1,
      url: "https://baharpod.storage.iran.liara.space/1.mp4",
    },
    {
      id: 2,
      url: "https://baharpod.storage.iran.liara.space/2.mp4",
    },
    {
      id: 3,
      url: "https://baharpod.storage.iran.liara.space/3.mp4",
    },
    {
      id: 4,
      url: "https://baharpod.storage.iran.liara.space/1.mp4",
    },
    {
      id: 5,
      url: "https://baharpod.storage.iran.liara.space/2.mp4",
    },
    {
      id: 6,
      url: "https://baharpod.storage.iran.liara.space/3.mp4",
    },
  ];

  return (
    <>
      <Head>
        <title>اولین کلینیک درمان ناخن در قزوین | درمان ترک پا</title>
        <meta
          name="description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | درمان ترک پا"
        />
        <meta
          property="og:title"
          content="اولین کلینیک درمان ناخن در قزوین | درمان ترک پا"
        />
        <meta
          property="og:description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | درمان ترک پا"
        />
        <meta property="og:url" content="https://baharpod.ir/" />
        <meta property="og:site_name" content="کلینیک درمان ناخن" />
        <meta
          name="twitter:title"
          content="اولین کلینیک درمان ناخن در قزوین | درمان ترک پا"
        />
        <meta
          name="twitter:description"
          content="
          اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | درمان ترک پا"
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
      </Head>
      <Layout>
        <section className={styles.background_image}>
          <Image
            src={TreatmentOfCrackedFeetBanner}
            alt="درمان ترک پا"
            loading="lazy"
          />
          <div className={styles.background_image_opacity}>
            <h1>درمان ترک پا</h1>
          </div>
        </section>
        <section className={styles.section_ertonil}>
          <div className={styles.section_ertonil_right}>
            <div className={styles.ertonil}>
              <div className={styles.ertonil_title}>
                <h1>درمان ترک پا</h1>
                <div className={styles.ertonil_line}></div>
              </div>
              <div className={styles.ertonil_description}>
                <p>
                  ترک پا یک مشکل شایع پوستی است که در آن پوست کف پا خشک و ترک
                  خورده می شود. ترک پا می تواند باعث درد، ناراحتی و حتی خونریزی
                  شود. درمان ترک پا به شدت آن بستگی دارد. در موارد خفیف، می
                  توان ترک پا را با مراقبت های خانگی درمان کرد. در موارد شدید،
                  ممکن است نیاز به درمان پزشکی باشد.
                </p>
              </div>
              <div className={styles.prescription}>
                <div className={styles.prescription_title}>
                  <div className={styles.dot}>
                    <div className={styles.dot1}></div>
                  </div>
                  <div>
                    <h2>دلایل ترک پا</h2>
                  </div>
                </div>
                <ul className={styles.prescription_description}>
                  <li>
                    خشک شدن پوست: خشک شدن پوست یکی از دلایل اصلی ترک پا است.
                    پوست پا به طور طبیعی خشک تر از سایر قسمت های بدن است و اگر
                    به اندازه کافی آب ننوشد، می تواند ترک بخورد.
                  </li>
                  <li>
                    قرار گرفتن در معرض عوامل محیطی: عوامل محیطی مانند هوای سرد و
                    خشک، آفتاب و استفاده از مواد شیمیایی خشن می توانند باعث خشک
                    شدن پوست پا شوند.
                  </li>
                  <li>
                    پوشیدن کفش های نامناسب: کفش های تنگ یا نامناسب می توانند
                    باعث تحریک پوست پا و افزایش خطر ترک خوردن آن شوند.
                  </li>
                  <li>
                    بیماری های پوستی: برخی از بیماری های پوستی، مانند اگزما و
                    پسوریازیس، می توانند باعث خشک شدن و ترک خوردن پوست پا شوند.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.section_ertonil_left}>
            <div>
              <Image
                src={OrtonixiaContentImageOne}
                alt="درمان ترک پا"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section className={styles.ertonil_advantage}>
          <div className={styles.ertonil_advantage_right}>
            <Image
              src={OrtonixiaContentImageFour}
              alt="درمان ترک پا"
              loading="lazy"
            />
            <CloudBackgroundIcon />
          </div>
          <div className={styles.ertonil_advantage_left}>
            <div className={styles.taking_care}>
              <div className={styles.taking_care_title}>
                <h2>درمان هایی برای ترک پا</h2>
              </div>
            </div>
            <ul className={styles.taking_care_description}>
              <li>
                مرطوب نگه داشتن پاها: یکی از مهم ترین راه های درمان ترک پا،
                مرطوب نگه داشتن آن است. از مرطوب کننده های بدون عطر و الکل
                استفاده کنید و پاهای خود را به طور مرتب مرطوب کنید.
              </li>
              <li>
                استفاده از روغن های طبیعی: روغن های طبیعی مانند روغن زیتون، روغن
                نارگیل و روغن جوجوبا می توانند به نرم کردن پوست پا و بهبود ترک
                خوردگی آن کمک کنند. پوست اندازی: پوست اندازی می تواند به از بین
                بردن پوست مرده و خشک کمک کند. می توانید از سنگ پا یا یک برس نرم
                برای پوست اندازی پاها استفاده کنید.
              </li>
              <li>
                پوشیدن کفش های راحت: از پوشیدن کفش های تنگ یا نامناسب خودداری
                کنید.
              </li>
              <li>
                داروهای موضعی: داروهای موضعی مانند کرم های کورتیکواستروئید و
                کرم های حاوی اوره می توانند به نرم کردن پوست پا و بهبود ترک
                خوردگی آن کمک کنند.
              </li>
              <li>
                داروهای خوراکی: داروهای خوراکی مانند داروهای ضد قارچ و داروهای
                ضد التهاب می توانند به درمان عفونت های قارچی و التهاب پوست پا
                کمک کنند.
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.Customer_satisfaction}>
          <div className={styles.videoSwiper_title}>
            <h1>ویدیوهای رضایت مشتری</h1>
            <div className={styles.videoSwiper_line}></div>
          </div>
        </section>
        <section className={styles.videoSwiper}>
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            modules={[Autoplay]}
            autoplay={true}
            className={styles.swiper_wrapper}
          >
            {array.map((item, index) => (
              <SwiperSlide key={index} className={styles.swiper_slide}>
                <video width="100%" height="100%" controls>
                  <source src={item.url} type="video/mp4" />
                </video>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </Layout>
    </>
  );
};
export default TreatmentOfCrackedFeet;
