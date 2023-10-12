import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/layout";
import styles from "@/styles/about.module.css";
import AboutBanner from "@/assets/images/about_banner.png";
import AboutOwnerImage from "@/assets/images/about_owner.png";

const About = () => {
  return (
    <Fragment>
      {/* head */}
      <Head>
        <title>اولین کلینیک درمان ناخن در قزوین | درباره کلینیک</title>
        <meta
          name="description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | درباره کلینیک"
        />
        <meta
          property="og:title"
          content="اولین کلینیک درمان ناخن در قزوین | درباره کلینیک"
        />
        <meta
          property="og:description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | درباره کلینیک"
        />
        <meta property="og:url" content="https://baharpod.ir/" />
        <meta property="og:site_name" content="کلینیک درمان ناخن" />
        <meta
          name="twitter:title"
          content="اولین کلینیک درمان ناخن در قزوین | درباره کلینیک"
        />
        <meta
          name="twitter:description"
          content="
          اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | درباره کلینیک"
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
          <Image src={AboutBanner} alt="درباره کلینیک درمان ناخن" />
          <div className={styles.background_image_opacity}>
            <h1>درباره ما</h1>
          </div>
        </section>
        <section className={styles.section_aboutUs}>
          <div className={styles.section_aboutUs_right}>
            <div className={styles.aboutUs}>
              <div className={styles.aboutUs_title}>
                <h1>درباره ما</h1>
                <div className={styles.aboutUs_line}></div>
              </div>
              <div className={styles.aboutUs_description}>
                <p>
                  کلینیک درمان بیماری های ناخن برای اولین بار در شهر قزوین توسط
                  بهار نیک پور زیر نظر پزشک مختصص با بیش از یک دهه فعالیت در این
                  زمینه به بیماران عزیز خدمات درمانی ارائه میدهد. کلینیک
                  پودولوژی بهار نیک پور توانسته است با مجموعه ای کامل از بهترین
                  و جدیدترین تجهیزات و تکنولوژی روز دنیا و محیط کاملا استریل به
                  بهترین شکل ممکن خدمات درمانی خود را برایتان انجام دهد. عمل
                  ناخن پا اگرچه ممکن است در ظاهر ساده به نظر برسد ولی به‌ شدت
                  نیاز به مهارت و تجربه بالا دارد تا مشکلاتی مانند خونریزی و
                  عفونت ایجاد نشود. با تجربه ای که در این زمینه داریم تلاش
                  میکنیم تا جایی که ممکن است بهترین روش درمان ناخن را برای شما
                  عزیزان ارائه دهیم.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.section_aboutUs_left}>
            <div>
              <Image src={AboutOwnerImage} alt="درباره کلینیک درمان ناخن" />
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  );
};
export default About;
