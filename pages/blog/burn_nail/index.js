import Layout from "@/layout";
import styles from "@/styles/blog.module.css";
import Image from "next/image";
import Head from "next/head";
import ContentImageOne from "@/assets/images/what_is_podology.png";
import ContentImageTwo from "@/assets/images/blog1.png";
import ContentImageFive from "@/assets/images/burn_nail_content_5.png";

const BurnNail = () => {
  return (
    <>
      <Head>
        <title>اولین کلینیک درمان ناخن در قزوین | سوزاندن ریشه ناخن</title>
        <meta
          name="description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | سوزاندن ریشه ناخن"
        />
        <meta
          property="og:title"
          content="اولین کلینیک درمان ناخن در قزوین | سوزاندن ریشه ناخن"
        />
        <meta
          property="og:description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | سوزاندن ریشه ناخن"
        />
        <meta property="og:url" content="https://baharpod.ir/" />
        <meta property="og:site_name" content="کلینیک درمان ناخن" />
        <meta
          name="twitter:title"
          content="اولین کلینیک درمان ناخن در قزوین | سوزاندن ریشه ناخن"
        />
        <meta
          name="twitter:description"
          content="
          اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | سوزاندن ریشه ناخن"
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
          <Image src={ContentImageOne} alt="سوزاندن ریشه ناخن" loading="lazy" />
          <div className={styles.background_image_opacity}>
            <h1>سوزاندن ریشه ناخن</h1>
          </div>
        </section>
        <section className={styles.section_onycholysis}>
          <div className={styles.section_onycholysis_right}>
            <div className={styles.onycholysis}>
              <div className={styles.onycholysis_title}>
                <h1>سوزاندن ریشه ناخن</h1>
                <div className={styles.onycholysis_line}></div>
              </div>
              <div className={styles.onycholysis_description}>
                <p>
                  سوزاندن ریشه ناخن به عنوان یک روش جراحی استفاده می‌شود که در
                  برخی موارد برای درمان مشکلات ناخنی مانند ناخن‌های فرو رفته در
                  گوشت (ingrown toenails) و برخی عفونت‌های ناخن مورد استفاده
                  قرار می‌گیرد. این روش به طور دقیق معمولاً به عنوان "ابلیشن
                  ناخن" یا "ماتریکسکتومی" شناخته می‌شود. در این روش، ماتریکس
                  ناخن که محل رشد ناخن است، تخریب می‌شود تا از رشد دوباره ناخن
                  در آن ناحیه جلوگیری شود.
                </p>
              </div>
              <div className={styles.indented_nail}>
                <div className={styles.indented_nail_title}>
                  <div className={styles.dot}>
                    <div className={styles.dot1}></div>
                  </div>
                  <div>
                    <h2>پیگیری درمان</h2>
                  </div>
                </div>
                <div className={styles.indented_nail_description}>
                  <p>
                    پس از عمل، باید ویزیت‌های پیگیری با پزشک انجام شود تا روند
                    بهبودی ارزیابی شود و هرگونه عارضه جانبی یا عفونت ممکن را
                    مدیریت کند. استفاده از سوزاندن ریشه ناخن بسته به شرایط خاص و
                    توصیه‌های پزشک انجام می‌شود و پیش از تصمیم‌گیری باید با پزشک
                    خود مشاوره کنید.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section_burningRootNail_left}>
            <div>
              <Image
                src={ContentImageFive}
                alt="سوزاندن ریشه ناخن"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section className={styles.section_strike}>
          <div className={styles.section_strike_right}>
            <Image
              src={ContentImageTwo}
              alt="سوزاندن ریشه ناخن"
              loading="lazy"
            />
          </div>
          <div className={styles.section_strike_left}>
            <div className={styles.strike_left}>
              <div className={styles.strike_left_title}>
                <div className={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>مزایای سوزاندن ریشه ناخن</h2>
                </div>
              </div>
              <div className={styles.strike_left_description}>
                <span>
                  درمان دائمی مشکلات ناخنی مانند ناخن‌های فرو رفته و کاهش درد و
                  عفونت‌های مکرر در ناخن.
                </span>
              </div>
            </div>
            <div className={styles.strike_left}>
              <div className={styles.strike_left_title}>
                <div className={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>معایب سوزاندن ریشه ناخن</h2>
                </div>
              </div>
              <div className={styles.strike_left_description}>
                <span>
                  درد و ناراحتی پس از عمل، خطر عفونت و عوارض جانبی نادر
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section_Agents}>
          <div className={styles.section_Agents_top}>
            <div className={styles.section_Agents_top_right}>
              <div className={styles.Agents_top_right_title}>
                <div className={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>ماتریکسکتومی شیمیایی</h2>
                </div>
              </div>
              <div className={styles.Agents_top_right_description}>
                <p>
                  در این روش، از مواد شیمیایی مانند فنول یا سدیم هیدروکسید برای
                  تخریب ماتریکس ناخن استفاده می‌شود. این مواد به ناحیه مورد نظر
                  اعمال می‌شوند تا رشد مجدد ناخن را متوقف کنند.
                </p>
              </div>
            </div>
            <div className={styles.section_Agents_top_left}>
              <div className={styles.Agents_top_left_title}>
                <div className={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>ماتریکسکتومی با لیزر</h2>
                </div>
              </div>
              <div className={styles.Agents_top_left_description}>
                <span>
                  در این روش، از لیزر برای تخریب ماتریکس ناخن استفاده می‌شود.
                  این روش معمولاً کم‌تر تهاجمی و دقیق‌تر از روش‌های شیمیایی است.
                </span>
              </div>
            </div>
          </div>

          <div className={styles.section_Agents_top}>
            <div className={styles.section_Agents_top_right}>
              <div className={styles.Agents_top_right_title}>
                <div className={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>ماتریکسکتومی جراحی</h2>
                </div>
              </div>
              <div className={styles.Agents_top_right_description}>
                <p>
                  در این روش، جراح به طور فیزیکی بخشی از ماتریکس ناخن را با
                  استفاده از ابزار جراحی حذف می‌کند.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default BurnNail;
