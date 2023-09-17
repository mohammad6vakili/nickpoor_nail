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
        <div className={styles.background_image}>
          <Image src={AboutBanner} alt="درباره کلینیک درمان ناخن" />
          <div className={styles.background_image_opacity}>
            <h1>درباره ما</h1>
          </div>
        </div>
        <div className={styles.section_aboutUs}>
          <div className={styles.section_aboutUs_right}>
            <div className={styles.aboutUs}>
              <div className={styles.aboutUs_title}>
                <h1>درباره ما</h1>
                <div className={styles.aboutUs_line}></div>
              </div>
              <div className={styles.aboutUs_description}>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.section_aboutUs_left}>
            <div>
              <Image src={AboutOwnerImage} alt="درباره کلینیک درمان ناخن" />
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};
export default About;
