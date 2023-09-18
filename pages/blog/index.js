import styles from "@/styles/blog.module.css";
import Layout from "@/layout";
import Head from "next/head";
import Image from "next/image";
import MoreArrowIcon from "@/assets/icons/more_arrow";
import BlogBanner from "@/assets/images/blog_header.jpg";
import BlogOneImage from "@/assets/images/blog1.png";
import BlogTwoImage from "@/assets/images/blog2.png";
import BlogThreeImage from "@/assets/images/blog3.png";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      {/* head */}
      <Head>
        <title>اولین کلینیک درمان ناخن در قزوین | وبلاگ</title>
        <meta
          name="description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | وبلاگ"
        />
        <meta
          property="og:title"
          content="اولین کلینیک درمان ناخن در قزوین | وبلاگ"
        />
        <meta
          property="og:description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | وبلاگ"
        />
        <meta property="og:url" content="https://baharpod.ir/" />
        <meta property="og:site_name" content="کلینیک درمان ناخن" />
        <meta
          name="twitter:title"
          content="اولین کلینیک درمان ناخن در قزوین | وبلاگ"
        />
        <meta
          name="twitter:description"
          content="
          اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | وبلاگ"
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
          <Image src={BlogBanner} alt="وبلاگ" />
          <div className={styles.background_image_opacity}>
            <h1>وبلاگ</h1>
          </div>
        </section>
        <section className={styles.blog_articles}>
          <ul className={styles.blog_article_list}>
            {/* article */}
            <li>
              <article className={styles.article}>
                <div>
                  <Image src={BlogOneImage} alt="Article" />
                </div>
                <div className={styles.detail_blog}>
                  <h3>پودولوژی چیست؟</h3>
                  <span>
                    پودولوژی به عنوان جایگزینی برای درمان‌های پر عارضه سنتی و
                    قدیمی می‌باشد. پودولوژی (Podology) چیست؟
                  </span>
                </div>
                <div className={styles.blog_btn}>
                  <button>
                    <Link href={"/blog/what_is_podology"}>
                      <div>
                        <span>ادامه مطلب</span>
                        <MoreArrowIcon />
                      </div>
                    </Link>
                  </button>
                </div>
              </article>
            </li>
            {/* article */}
            <li>
              <article className={styles.article}>
                <div>
                  <Image src={BlogTwoImage} alt="Blog" />
                </div>
                <div className={styles.detail_blog}>
                  <h3>سوزاندن ریشه ی ناخن</h3>
                  <span>
                    در گذشته، ناخن های فرو رفته در گوشت توسط پزشکان از طریق
                    کشیدن و سوزاندن ریشه ناخن انجام میشد که این ...
                  </span>
                </div>
                <div className={styles.blog_btn}>
                  <button>
                    <Link href={"/blog/burn_nail"}>
                      <div>
                        <span>ادامه مطلب</span>
                        <MoreArrowIcon />
                      </div>
                    </Link>
                  </button>
                </div>
              </article>
            </li>
            {/* article */}
            <li>
              <article className={styles.article}>
                <div>
                  <Image src={BlogThreeImage} alt="Blog" />
                </div>
                <div className={styles.detail_blog}>
                  <h3>اونیکولیز ، جدا شدن ناخن از بستر </h3>
                  <span>
                    به جدا شدن ناخن از بستر اصطلاحا اونیکولیز گفته می شود.این
                    جدا شدگی از شیار دیستال یا زیر صفحه ناخن شروع می شود و ممکن
                    است چند ناخن را درگیر کند. ناخن جدا شده...
                  </span>
                </div>
                <div className={styles.blog_btn}>
                  <button>
                    <Link href={"/blog/onycholysis"}>
                      <div>
                        <span>ادامه مطلب</span>
                        <MoreArrowIcon />
                      </div>
                    </Link>
                  </button>
                </div>
              </article>
            </li>
          </ul>
        </section>
      </Layout>
    </>
  );
};
export default Blog;
