import styles from "@/styles/blog.module.css";
import Layout from "@/layout";
import Head from "next/head";
import Image from "next/image";
import MoreArrowIcon from "@/assets/icons/more_arrow";
import BlogBanner from "@/assets/images/blog_header.jpg";
import BlogOneImage from "@/assets/images/blog1.png";
import BlogTwoImage from "@/assets/images/blog2.png";
import BlogThreeImage from "@/assets/images/blog3.png";
import OrtonixiaContentImageThree from "@/assets/images/ortonixia_content_3.png";
import OitmentForIngrownNail from "@/assets/images/oitment-for-ingrown-nail.jpg";
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
          <Image src={BlogBanner} alt="وبلاگ" loading="lazy" />
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
                  <Image src={BlogOneImage} alt="Article" loading="lazy" />
                </div>
                <div className={styles.detail_blog}>
                  <h3>پودولوژی چیست؟</h3>
                  <span>
                    پودولوژی شاخه ای از پزشکی است که به تشخیص، درمان و پیشگیری
                    از بیماری ها و اختلالات پا و ناخن می پردازد.این طیف وسیعی از
                    فعالیت‌ها را با هدف تشخیص و درمان بیماری‌های مختلف پا مانند
                    ناخن‌های فرورفته ...
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
                  <Image src={BlogTwoImage} alt="Blog" loading="lazy" />
                </div>
                <div className={styles.detail_blog}>
                  <h3>پیشگیری از ابتلا به قارچ ناخن</h3>
                  <span>
                    قارچ ناخن یک عفونت شایع است که میتواند ناخنهای پا یا دست را
                    درگیر کند. این عفونت میتواند باعث تغییر رنگ، ضخیم شدن،
                    شکنندگی و جدا شدن ناخن شود ...
                  </span>
                </div>
                <div className={styles.blog_btn}>
                  <button>
                    <Link href={"/blog/prevention_of_nail_fungus"}>
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
                  <Image src={BlogThreeImage} alt="Blog" loading="lazy" />
                </div>
                <div className={styles.detail_blog}>
                  <h3>اونیکولیز ، جدا شدن ناخن از بستر </h3>
                  <span>
                    اونیکولیز وضعیتی است که در آن ناخن از پوست زیر آن جدا می
                    شود. این می تواند در اثر عوامل مختلفی مانند ضربه، عفونت های
                    قارچی، پسوریازیس، آلرژی یا داروها ایجاد شود. جدا شدن ناخن
                    ...
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
            {/* article */}
            <li>
              <article className={styles.article}>
                <div>
                  <Image
                    src={OrtonixiaContentImageThree}
                    alt="Blog"
                    loading="lazy"
                  />
                </div>
                <div className={styles.detail_blog}>
                  <h3>ارتونیل (ارتودنسی ناخن)</h3>
                  <span>
                    یک روش غیرجراحی برای درمان ناخن فرورفته در گوشت است. این روش
                    شامل استفاده از سیم های مخصوصی است که بر روی صفحه ناخن نصب
                    می شوند. این سیم ها ناخن را از کناره ها بلند کرده و از رشد
                    ...
                  </span>
                </div>
                <div className={styles.blog_btn}>
                  <button>
                    <Link href={"/blog/ortonixia"}>
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
                  <Image
                    src={OitmentForIngrownNail}
                    alt="Blog"
                    loading="lazy"
                  />
                </div>
                <div className={styles.detail_blog}>
                  <h3>پماد برای ناخن فرورفته در گوشت</h3>
                  <span>
                    ناخن فرورفته در گوشت (Ingrown Toenail) یک مشکل شایع و دردناک
                    است که اغلب در ناخن‌های پا رخ می‌دهد. این وضعیت زمانی پیش
                    می‌آید که گوشه یا لبه ناخن به داخل پوست فرو می‌رود و باعث
                    ...
                  </span>
                </div>
                <div className={styles.blog_btn}>
                  <button>
                    <Link href={"/blog/ointment_for_nail"}>
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
