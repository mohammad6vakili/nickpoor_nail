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
          <Image src={ContentImageOne} alt="پودولوژی چیست؟" loading="lazy" />
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
                  پودولوژی شاخه ای از پزشکی است که به تشخیص، درمان و پیشگیری از
                  بیماری ها و اختلالات پا و ناخن می پردازد.این طیف وسیعی از
                  فعالیت‌ها را با هدف تشخیص و درمان بیماری‌های مختلف پا مانند
                  ناخن‌های فرورفته، ناهنجاری‌های پا، آسیب‌های پا و غیره پوشش
                  می‌دهد.
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
                    پودولوژیست ها متخصصان مراقبت‌های بهداشتی هستند که در مراقبت
                    از پا تخصص دارند.آنها تشخیص و ارزیابی دقیق بیماری های پا و
                    ناخن را انجام می دهند و برنامه های درمانی و مراقبت های مناسب
                    را ارائه می دهندو با آموزش بهداشت مناسب پا، کفش مناسب، تکنیک
                    های مراقبت و پیشگیری از آسیب، نقش اساسی در پیشگیری از بیماری
                    های پا دارند.
                  </p>
                </div>
              </div>
              <div className={styles.podiatrist}>
                <div className={styles.podiatrist_title}>
                  <div className={styles.dot}>
                    <div className={styles.dot1}></div>
                  </div>
                  <div>
                    <h2>آیا در پودولوژی درد را احساس میکنیم؟</h2>
                  </div>
                </div>
                <div className={styles.podiatrist_description}>
                  <p>
                    خیر پودولوژیست بدون کوچکترین درد بیماری ناخن ما را درمان
                    میکند و سلامتی و زیبایی ناخن را برمیگرداند.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section_podology_left}>
            <div>
              <Image
                src={ContentImageTwo}
                alt="پودولوژی چیست؟"
                loading="lazy"
              />
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
                  <h2>پودولوژیست از ما میخواهد چه کارهایی انجام ندهیم؟</h2>
                </div>
              </div>
              <div className={styles.notـdo_description}>
                <span>۱- ناخن های پای خود را خیلی کوتاه نکنید.</span>
                <span>۲- کفش های خیلی کوچک نپوشید.</span>
                <span>۳- از بهداشت پا غافل نشوید.</span>
                <span>
                  ۴- از معاینات منظم پا غافل نشوید، به خصوص برای کسانی که دیابت
                  دارند.
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
                  <h2>
                    در صورت داشتن موارد زیر باید به پودولوژیست مراجعه کنیم:
                  </h2>
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
