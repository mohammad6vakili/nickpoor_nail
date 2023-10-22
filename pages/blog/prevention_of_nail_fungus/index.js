import Layout from "@/layout";
import styles from "@/styles/blog.module.css";
import Image from "next/image";
import Head from "next/head";
import BannerImage from "@/assets/images/burn_nail_banner.png";
import DottedBackgroundIcon from "@/assets/icons/dotted_background";
import ContentImageOne from "@/assets/images/burn_nail_content_1.png";
import ContentImageTwo from "@/assets/images/burn_nail_content_2.png";
import ContentImageThree from "@/assets/images/burn_nail_content_3.png";
import ContentImageFour from "@/assets/images/burn_nail_content_4.png";
import ContentImageFive from "@/assets/images/burn_nail_content_5.png";

const BurningTheRootOfTheNail = () => {
  return (
    <>
      <Head>
        <title>
          اولین کلینیک درمان ناخن در قزوین | پیشگیری از ابتلا به قارچ ناخن
        </title>
        <meta
          name="description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | پیشگیری از ابتلا به قارچ ناخن"
        />
        <meta
          property="og:title"
          content="اولین کلینیک درمان ناخن در قزوین | پیشگیری از ابتلا به قارچ ناخن"
        />
        <meta
          property="og:description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | پیشگیری از ابتلا به قارچ ناخن"
        />
        <meta property="og:url" content="https://baharpod.ir/" />
        <meta property="og:site_name" content="کلینیک درمان ناخن" />
        <meta
          name="twitter:title"
          content="اولین کلینیک درمان ناخن در قزوین | پیشگیری از ابتلا به قارچ ناخن"
        />
        <meta
          name="twitter:description"
          content="
          اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | پیشگیری از ابتلا به قارچ ناخن"
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
          <Image
            src={BannerImage}
            alt="پیشگیری از ابتلا به قارچ ناخن"
            loading="lazy"
          />
          <div className={styles.background_image_opacity}>
            <h1>پیشگیری از ابتلا به قارچ ناخن</h1>
          </div>
        </section>
        <section className={styles.section_burningRootNail}>
          <div className={styles.section_burningRootNail_right}>
            <div className={styles.burningRootNail}>
              <div className={styles.burningRootNail_title}>
                <h1>پیشگیری از ابتلا به قارچ ناخن</h1>
                <div className={styles.burningRootNail_line}></div>
              </div>
              <div className={styles.burningRootNail_description}>
                <p>
                  قارچ ناخن یک عفونت شایع است که میتواند ناخنهای پا یا دست را
                  درگیر کند. این عفونت میتواند باعث تغییر رنگ، ضخیم شدن، شکنندگی
                  و جدا شدن ناخن شود. قارچ ناخن با عنوان آنیکومیکوز شناخته می
                  شود و به رنگ زرد و تیره یا لکه سفید رنگ در زیر ناخن پا یا حتی
                  دست به وجود می آید و هرچقدر عفونت قارچی و تغییر رنگ ناخن بیشتر
                  شود، گوشه های ناخن تخریب و شکننده شده و ضخیم تر می شود. نکته
                  مهم این است که عفونت ناخن پا در افراد مبتلا به دیابت یا سیستم
                  ایمنی ضعیف به وفور مشاهده می شود. در این افراد که به بیماری
                  های زمینه ای مبتلا هستن به علت مصرف دارو های ویژه ، عفونت از
                  ناخن های پا به انگشتان دیگر و نقاط دیگر بدن تکثیر پیدا می کند
                  و وارد بخش های مختلف بدن می گردد.
                  <br />
                  به همین دلیل در صورت مشاهده قارچ ناخن پا باید در اسرع وقت به
                  پودولوژیست مراجعه نمایید.
                </p>
              </div>
              <div className={styles.indented_nail}>
                <div className={styles.indented_nail_title}>
                  <div className={styles.dot}>
                    <div className={styles.dot1}></div>
                  </div>
                  <div>
                    <h2>نکته مهم درباره قارچ ناخن</h2>
                  </div>
                </div>
                <div className={styles.indented_nail_description}>
                  <p>
                    در بسیاری از موارد هر تغییری که در شکل و رنگ ناخن ایجاد
                    می‌شود به نظر می‌رسد فرد مبتلا به قارچ شده است اما این طور
                    نیست. تشخیص قارچ یا باکتری ناخن بسیار موضوع مهمی است چون
                    تشخیص اشتباه می‌تواند باعث درمان‌های طولانی شود و ناخن درمان
                    که نمی شود هیچ ، بدتر هم می شود.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section_burningRootNail_left}>
            <div>
              <Image
                src={ContentImageOne}
                alt="پیشگیری از ابتلا به قارچ ناخن"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section className={styles.section_complications_burning}>
          <div className={styles.Complications_burning_right}>
            <div className={styles.image}>
              <Image
                src={ContentImageTwo}
                alt="پیشگیری از ابتلا به قارچ ناخن"
                loading="lazy"
              />
            </div>
            <div className={styles.image2}>
              <Image
                width={154}
                height={175}
                src={ContentImageThree}
                alt="پیشگیری از ابتلا به قارچ ناخن"
                loading="lazy"
              />
              <Image
                width={153.609}
                height={111.743}
                src={ContentImageFour}
                alt="پیشگیری از ابتلا به قارچ ناخن"
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
                <h2>چرا باید به کلینیک برای درمان قارچ ناخن مراجعه کرد؟</h2>
              </div>
            </div>
            <div className={styles.question_description}>
              <p>
                یک پزشک متخصص میتواند با معاینه بصری ناخن و در صورت لزوم انجام
                آزمایشات تشخیصی، قارچ ناخن را به درستی تشخیص دهد. او میتواند
                بهترین درمان را برای نوع و شدت عفونت شما توصیه کند و میتواند
                اقدامات لازم را برای جلوگیری از گسترش عفونت به دیگران انجام دهد.
              </p>
            </div>
          </div>
          <div className={styles.section_question_left}>
            <Image
              src={ContentImageFive}
              alt="پیشگیری از ابتلا به قارچ ناخن"
              loading="lazy"
            />
            <DottedBackgroundIcon />
          </div>
        </section>
      </Layout>
    </>
  );
};
export default BurningTheRootOfTheNail;
