import Layout from "@/layout";
import styles from "@/styles/blog.module.css";
import Image from "next/image";
import Head from "next/head";
import DottedBackgroundIcon from "@/assets/icons/dotted_background";
import OrtonixiaImageOne from "@/assets/new_images/ortonixia_pages_background.jpg";
import OrtonixiaContentImageOne from "@/assets/images/ortonixia_content_1.png";
import OrtonixiaContentImageTwo from "@/assets/images/ortonixia_content_2.png";
import OrtonixiaContentImageThree from "@/assets/new_images/ortonixia_3.jpg";
import OrtonixiaContentImageFour from "@/assets/images/ortonixia_content_4.png";

const Ortonixia = () => {
  return (
    <>
      {/* head */}
      <Head>
        <title>
          اولین کلینیک درمان ناخن در قزوین | ارتونیل یا ارتودنسی ناخن
        </title>
        <meta
          name="description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | ارتونیل یا ارتودنسی ناخن"
        />
        <meta
          property="og:title"
          content="اولین کلینیک درمان ناخن در قزوین | ارتونیل یا ارتودنسی ناخن"
        />
        <meta
          property="og:description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | ارتونیل یا ارتودنسی ناخن"
        />
        <meta property="og:url" content="https://baharpod.ir/" />
        <meta property="og:site_name" content="کلینیک درمان ناخن" />
        <meta
          name="twitter:title"
          content="اولین کلینیک درمان ناخن در قزوین | ارتونیل یا ارتودنسی ناخن"
        />
        <meta
          name="twitter:description"
          content="
          اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | ارتونیل یا ارتودنسی ناخن"
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
          <Image src={OrtonixiaImageOne} alt="ارتونیل ناخن" loading="lazy" />
          <div className={styles.background_image_opacity}>
            <h1>ارتونیل (ارتودنسی ناخن)</h1>
          </div>
        </section>
        <section className={styles.section_burningRootNail}>
          <div className={styles.section_burningRootNail_right}>
            <div className={styles.burningRootNail}>
              <div className={styles.burningRootNail_title}>
                <h1>ارتونیل</h1>
                <div className={styles.burningRootNail_line}></div>
              </div>
              <div className={styles.burningRootNail_description}>
                <p>
                  یک روش غیرجراحی برای درمان ناخن فرورفته در گوشت است. این روش
                  شامل استفاده از سیم های مخصوصی است که بر روی صفحه ناخن نصب می
                  شوند. این سیم ها ناخن را از کناره ها بلند کرده و از رشد آن به
                  داخل بافت ها جلوگیری می کنند.
                </p>
              </div>
              <div className={styles.indented_nail}>
                <div className={styles.indented_nail_title}>
                  <div className={styles.dot}>
                    <div className={styles.dot1}></div>
                  </div>
                  <div>
                    <h2>ارتونیل برای چه افرادی تجویز می‌شود؟</h2>
                  </div>
                </div>
                <div className={styles.indented_nail_description}>
                  <p>
                    برای افرادی که به دلایل ارثی، پوشیدن کفش و جوراب نامناسب
                    ناخن درگوشت فرو رفته و حالت لوله‌ای پیدا می‌کند.علاوه براین
                    ورزش‌هایی مانند (فوتبال، والیبال، بسکتبال، تنیس، باله،
                    سوارکاری، کوهنوردی، بدنسازی و…) باعث تغییر فرم ناخن و
                    فرورفتن ناخن درگوشت می‌شود.در بعضی مواقع شیمی درمانی،
                    تیروئید و دیابت می‌توانند عامل این عارضه باشند.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section_burningRootNail_left}>
            <div>
              <Image
                src={OrtonixiaImageOne}
                alt="ارتونیل ناخن"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section className={styles.section_complications_burning}>
          <div className={styles.Complications_burning_right}>
            <div className={styles.image}>
              <Image
                src={OrtonixiaContentImageOne}
                alt="ارتونیل ناخن"
                loading="lazy"
              />
            </div>
            <div className={styles.image2}>
              <Image
                width={154}
                height={175}
                src={OrtonixiaContentImageTwo}
                alt="ارتونیل ناخن"
                loading="lazy"
              />
              <Image
                width={153.609}
                height={111.743}
                src={OrtonixiaContentImageThree}
                alt="ارتونیل ناخن"
                loading="lazy"
              />
            </div>
          </div>
          <div className={styles.Complications_burning_left}>
            <div className={styles.Complications_burning_Frame}>
              <div className={styles.Complications_burning_Frame1}>
                <div className={styles.Complications_burning}>
                  <div className={styles.Complications_burning_title}>
                    <div className={styles.dot}>
                      <div className={styles.dot1}></div>
                    </div>
                    <div>
                      <h2>
                        برای پیشگیری از عفونت قارچ ناخن نکات زیر را رعایت کنید:
                      </h2>
                    </div>
                  </div>
                  <div className={styles.Complications_burning_description}>
                    <span>
                      - ناخنهای خود را کوتاه و مرتب نگه دارید. ناخنهای بلند و
                      کثیف میتوانند محیط مناسبی برای رشد قارچها فراهم کنند.
                    </span>
                    <span>
                      - از پوشیدن کفشهای تنگ یا مرطوب خودداری کنید. کفشهای تنگ
                      یا مرطوب میتوانند باعث ایجاد رطوبت و گرما شوند که شرایط
                      مناسبی برای رشد قارچها است.
                    </span>
                    <span>
                      - از خشک کردن پاهای خود بعد از شنا یا ورزش اطمینان حاصل
                      کنید. رطوبت باقیمانده روی پوست پا میتواند باعث رشد قارچها
                      شود.
                    </span>
                    <span>
                      - از جورابهای نخی استفاده کنید. جورابهای نخی به جذب رطوبت
                      کمک میکنند.
                    </span>
                    <span>
                      - از اشتراک گذاشتن حوله یا سایر وسایل شخصی با دیگران
                      خودداری کنید. قارچها میتوانند از طریق تماس پوست با پوست
                      منتقل شوند.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section_question}>
          <div className={styles.section_question_right}>
            <div className={styles.question}>
              <div className={styles.question_title}>
                <h2>ارتونیل ناخن دست (ارتودنسی ناخن دست)</h2>
              </div>
            </div>
            <div className={styles.question_description}>
              <p>
                روش ارتونیل ناخن دست معمولا توسط متخصص پوست یا متخصص پا انجام می
                شود. پزشک ابتدا ناخن و پوست اطراف آن را تمیز و ضد عفونی می کند.
                سپس با استفاده از ابزار مخصوص سوراخ کوچکی در ناخن نزدیک پایه
                ایجاد می کنند. سپس یک سیم نازک از طریق سوراخ وارد می شود و خم می
                شود تا به شکل ناخن مناسب باشد. سپس سیم را با یک پد چسب کوچک روی
                میخ محکم می کنیم.
              </p>
            </div>
          </div>
          <div className={styles.section_question_left}>
            <Image
              src={OrtonixiaContentImageFour}
              alt="ارتونیل ناخن"
              loading="lazy"
            />
            <DottedBackgroundIcon />
          </div>
        </section>
      </Layout>
    </>
  );
};
export default Ortonixia;
