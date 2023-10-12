import Layout from "@/layout";
import styles from "@/styles/category.module.css";
import DottedBackgroundIcon from "@/assets/icons/dotted_background";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import NailFungusBanner from "@/assets/images/nail_fungus_banner.png";
import OrtonixiaContentImageOne from "@/assets/images/ortonixia_content_1.png";
import OrtonixiaContentImageTwo from "@/assets/images/ortonixia_content_2.png";
import OrtonixiaContentImageThree from "@/assets/images/ortonixia_content_3.png";
const CustomerVideo = dynamic(() => import("@/components/customer_video"));

const NailFungus = () => {
  const array = [1, 1, 1, 1, 1];

  return (
    <>
      <Head>
        <title>اولین کلینیک درمان ناخن در قزوین | درمان قارچ ناخن پا</title>
        <meta
          name="description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | درمان قارچ ناخن پا"
        />
        <meta
          property="og:title"
          content="اولین کلینیک درمان ناخن در قزوین | درمان قارچ ناخن پا"
        />
        <meta
          property="og:description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | درمان قارچ ناخن پا"
        />
        <meta property="og:url" content="https://baharpod.ir/" />
        <meta property="og:site_name" content="کلینیک درمان ناخن" />
        <meta
          name="twitter:title"
          content="اولین کلینیک درمان ناخن در قزوین | درمان قارچ ناخن پا"
        />
        <meta
          name="twitter:description"
          content="
          اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | درمان قارچ ناخن پا"
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
          <Image src={NailFungusBanner} alt="درمان قارچ ناخن پا" />
          <div className={styles.background_image_opacity}>
            <h1>درمان قارچ ناخن پا</h1>
          </div>
        </section>
        <section className={styles.section_ertonil}>
          <div className={styles.section_ertonil_right}>
            <div className={styles.ertonil}>
              <div className={styles.ertonil_title}>
                <h1>درمان قارچ ناخن پا</h1>
                <div className={styles.ertonil_line}></div>
              </div>
              <div className={styles.ertonil_description}>
                <p>
                  کلینیک بهار پودولوژی با بهره گیری از جدیدترین متد روز دنیا و
                  پیشرفتهترین تجهیزات تشخیصی و درمانی برای درمان بیماریهای عفونی
                  و قارچی ناخن آماده ارائه خدمات به شما عزیزان میباشد. <br />
                  درمان قارچ ناخن معمولاً با داروهای ضد قارچ خوراکی یا موضعی
                  انجام میشود. داروهای ضد قارچ خوراکی معمولاً برای عفونتهای
                  شدیدتر استفاده میشوند. داروهای ضد قارچ موضعی معمولاً برای
                  عفونتهای خفیفتر استفاده میشوند.
                </p>
              </div>
              <div className={styles.prescription}>
                <div className={styles.prescription_title}>
                  <div className={styles.dot}>
                    <div className={styles.dot1}></div>
                  </div>
                  <div>
                    <h2>قارچ ناخن چیست؟</h2>
                  </div>
                </div>
                <div className={styles.prescription_description}>
                  <p>
                    قارچ ناخن یک عفونت شایع است که میتواند ناخنهای پا یا دست را
                    درگیر کند. این عفونت میتواند باعث تغییر رنگ، ضخیم شدن،
                    شکنندگی و جدا شدن ناخن شود. <br />
                    قارچها موجودات زنده کوچکی هستند که در محیطهای گرم و مرطوب
                    رشد میکنند. ناخنهای پا به دلیل قرار گرفتن در معرض رطوبت و
                    گرما بیشتر در معرض عفونت قارچی قرار دارند.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section_ertonil_left}>
            <div>
              <Image src={OrtonixiaContentImageOne} alt="درمان قارچ ناخن پا" />
            </div>
          </div>
        </section>
        <section className={styles.section_ertonil_nails}>
          <div className={styles.ertonil_nails}>
            <div className={styles.ertonil_nails_right}>
              <Image src={OrtonixiaContentImageTwo} alt="درمان قارچ ناخن پا" />
            </div>
            <div className={styles.ertonil_nails_left}>
              <div className={styles.ertonil_nails_left_title}>
                <div class={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>چرا باید به کلینیک درمان قارچ ناخن پا مراجعه کرد؟</h2>
                </div>
              </div>
              <div className={styles.ertonil_nails_left_description}>
                <p>
                  یک پزشک متخصص میتواند با معاینه بصری ناخن و در صورت لزوم انجام
                  آزمایشات تشخیصی، قارچ ناخن را به درستی تشخیص دهد. او میتواند
                  بهترین درمان را برای نوع و شدت عفونت شما توصیه کند و میتواند
                  اقدامات لازم را برای جلوگیری از گسترش عفونت به دیگران انجام
                  دهد.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section_question}>
          <div className={styles.section_question_right}>
            <div className={styles.question}>
              <div className={styles.question_title}>
                <h2>راه جلوگیری از قارچ ناخن</h2>
              </div>
            </div>
            <div className={styles.question_description}>
              <p>
                مراجعه به کلینیک تخصصی قارچ ناخن بهار پودولوژی که مجهز به
                تجهیزات تشخیصی و پزشک حاذق می‌باشد از اصول اولیه درمان بوده و
                باعث می‌شود عفونت در سطح گسترده‌ای پخش نشود و پوست اطراف را
                درگیر نکند.
              </p>
            </div>

            <div className={styles.question}>
              <div className={styles.question_title}>
                <h2>چه عواملی باعث ایجاد قارچ ناخن می‌شود؟</h2>
              </div>
            </div>
            <ul className={styles.question_description_list}>
              <li>
                <span>
                  سن: افراد مسن بیشتر در معرض ابتلا به قارچ ناخن هستند.
                </span>
              </li>
              <li>
                <span>
                  دیابت: افراد مبتلا به دیابت بیشتر در معرض ابتلا به عفونتهای
                  قارچی هستند.
                </span>
              </li>
              <li>
                <span>
                  ضعف سیستم ایمنی بدن: افراد مبتلا به بیماریهایی که سیستم ایمنی
                  بدن را تضعیف میکنند، مانندHIV ، بیشتر در معرض ابتلا به
                  عفونتهای قارچی هستند.
                </span>
              </li>
              <li>
                <span>
                  آسیب به ناخن: آسیب به ناخن، مانند شکستگی یا بریدگی، میتواند
                  باعث شود که ناخن مستعد ابتلا به عفونت قارچی شود.
                </span>
              </li>
              <li>
                <span>
                  پوشیدن کفشهای تنگ یا مرطوب: پوشیدن کفشهای تنگ یا مرطوب میتواند
                  باعث ایجاد شرایطی شود که برای رشد قارچها مناسب است.
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.section_question_left}>
            <Image src={OrtonixiaContentImageThree} alt="درمان قارچ ناخن پا" />
            <DottedBackgroundIcon />
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
                <CustomerVideo />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </Layout>
    </>
  );
};
export default NailFungus;
