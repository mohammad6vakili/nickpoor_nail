import styles from "@/styles/blog.module.css";
import Head from "next/head";
import Layout from "@/layout";
import Image from "next/image";
import ContentImageOne from "@/assets/images/what_is_podology.png";
import ContentImageTwo from "@/assets/images/what_is_podology_content_1.png";

const WhatIsPodology = () => {
  return (
    <>
      <Head>
        <title>اولین کلینیک درمان ناخن در قزوین | پودولوژی چیست؟</title>
        <meta
          name="description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | پودولوژی چیست؟"
        />
        <meta
          property="og:title"
          content="اولین کلینیک درمان ناخن در قزوین | پودولوژی چیست؟"
        />
        <meta
          property="og:description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | پودولوژی چیست؟"
        />
        <meta property="og:url" content="https://baharpod.ir/" />
        <meta property="og:site_name" content="کلینیک درمان ناخن" />
        <meta
          name="twitter:title"
          content="اولین کلینیک درمان ناخن در قزوین | پودولوژی چیست؟"
        />
        <meta
          name="twitter:description"
          content="
          اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | پودولوژی چیست؟"
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
      <Layout>
        <section className={styles.background_image}>
          <Image src={ContentImageOne} alt="پودولوژی چیست؟" />
          <div className={styles.background_image_opacity}>
            <h1>پودولوژی چیست؟</h1>
          </div>
        </section>
        <section className={styles.section_podology}>
          <div className={styles.section_podology_right}>
            <div className={styles.podology}>
              <div className={styles.podology_title}>
                <h1>پودولوژی</h1>
                <div className={styles.podology_line}></div>
              </div>
              <div className={styles.podology_description}>
                <p>
                  پودولوژی (Podology) علمی‌ست که از روش‌های تهاجمی مانند کشیدن
                  ناخن، جراحی ناخن و بیماری های مرتبط جلوگیری کرده و بدون آسیب،
                  درد و نقاهت درمان را انجام می‌دهد.
                </p>
              </div>
              <div className={styles.podiatrist}>
                <div className={styles.podiatrist_title}>
                  <div className={styles.dot}>
                    <div className={styles.dot1}></div>
                  </div>
                  <div>
                    <h2>پودولوژیست کیست؟</h2>
                  </div>
                </div>
                <div className={styles.podiatrist_description}>
                  <p>
                    پودولوژیست (Podologist) متخصصی است که مراقبت و تشخیص درمان
                    پای بیمار را انجام می‌دهد. چنین متخصصی می‌تواند بیماری های
                    ناخن و پا را در مراحل اولیه شناسایی کند و به انتخاب کفش
                    مناسب به بیمار کمک کند. پیش از این بیماری‌های پوست و
                    ناخن‌های پا با یک دوره‌ی دردناک بعد از عمل جراحی طی میشد.
                    اما پودولوژی این امکان را به شما می‌دهد تا این درمان را بدون
                    آسیب، نقاهت و درد سپری کنید.
                  </p>
                </div>
              </div>
              <div className={styles.podiatrist}>
                <div className={styles.podiatrist_title}>
                  <div className={styles.dot}>
                    <div className={styles.dot1}></div>
                  </div>
                  <div>
                    <h2>چرا در پودولوژی دردی را احساس نمی‌کنید؟</h2>
                  </div>
                </div>
                <div className={styles.podiatrist_description}>
                  <p>
                    زیرا یک پودولوژیست با دقت، به کار با پوست و ناخن می‌پردازد و
                    حساسیت بیمار را در نظر می‌گیرد و در محیطی استریل این کار را
                    انجام می‌دهد.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section_podology_left}>
            <div>
              <Image src={ContentImageTwo} alt="پودولوژی چیست؟" />
            </div>
          </div>
        </section>
        <section className={styles.section_podology2}>
          <div className={styles.section_podology2_right}>
            <div className={styles.notـdo}>
              <div className={styles.notـdoـtitle}>
                <div className={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>پودولوژی شما را از چند مورد منع می‌کند:</h2>
                </div>
              </div>
              <div className={styles.notـdo_description}>
                <span>
                  ۱- خود درمانی: بطور مثال تشخیص اشتباه میان میخچه و زگیل منجر
                  به تشدید و انتشار ویروس می‌شود اگر از درمان میخچه برای زگیل
                  استفاده شود.
                </span>
                <span>
                  ۲- استفاده از دارو بدون تجویز پزشک یا مصرف خود سرانه.
                </span>
                <span>
                  ۳- کشیدن ناخن (آسیب شدید به بافت ناخن و بستر وارد می‌شود).
                </span>
                <span>
                  ۴- جدی نگرفتن بیماری (باعث تشدید عارضه در ناحیه مورد نظر
                  می‌شود و گاه درمان را سخت ‌تر و طولانی تر می‌کند یا دیگر راهی
                  برای درمان نمی‌باشد).
                </span>
              </div>
            </div>
          </div>
          <div className={styles.section_podology2_left}>
            <div className={styles.podology2}>
              <div className={styles.podology2ـtitle}>
                <div className={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>پودولوژیست یا متخصص پا چه مشکلاتی را درمان می‌کند؟</h2>
                </div>
              </div>
              <div className={styles.podology2_description}>
                <div className={styles.podology2_description2}>
                  <div></div>
                  <span>ناخن های فرو رفته در گوشت</span>
                </div>
                <div className={styles.podology2_description2}>
                  <div></div> <span>اونیکولیز(جدا شدن صفحه ناخن از بستر)</span>
                </div>
                <div className={styles.podology2_description2}>
                  <div></div> <span>قارچ و باکتری ناخن</span>
                </div>
                <div className={styles.podology2_description2}>
                  <div></div> <span>پای دیابتی</span>
                </div>
                <div className={styles.podology2_description2}>
                  <div></div>
                  <span>ترک پا</span>
                </div>
                <div className={styles.podology2_description2}>
                  <div></div> <span>پینه</span>
                </div>
                <div className={styles.podology2_description2}>
                  <div></div> <span>میخچه</span>
                </div>
                <div className={styles.podology2_description2}>
                  <div></div> <span>ارتونیل</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default WhatIsPodology;
