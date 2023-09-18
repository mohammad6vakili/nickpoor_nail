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
          <Image src={BannerImage} alt="سوزاندن ریشه ناخن" />
          <div className={styles.background_image_opacity}>
            <h1>سوزاندن ریشه ناخن</h1>
          </div>
        </section>
        <section className={styles.section_burningRootNail}>
          <div className={styles.section_burningRootNail_right}>
            <div className={styles.burningRootNail}>
              <div className={styles.burningRootNail_title}>
                <h1>سوزاندن ریشه ناخن</h1>
                <div className={styles.burningRootNail_line}></div>
              </div>
              <div className={styles.burningRootNail_description}>
                <p>
                  در گذشته، ناخن های فرو رفته در گوشت توسط پزشکان از طریق کشیدن
                  و سوزاندن ریشه ناخن انجام میشد که این عمل نه تنها در بهبود
                  ناخن تاثیری نداشت بلکه ایجاد مشکلات بیشتری میکرد . زیرا با
                  سوزاندن ریشه آسیب بسیار زیادی به بستر زیرین ناخن و ریشه وارد
                  می شود که عوارض جبران ناپذیری به همراه دارد.
                </p>
              </div>
              <div className={styles.indented_nail}>
                <div className={styles.indented_nail_title}>
                  <div className={styles.dot}>
                    <div className={styles.dot1}></div>
                  </div>
                  <div>
                    <h2>ناخن فرورفته در گوشت</h2>
                  </div>
                </div>
                <div className={styles.indented_nail_description}>
                  <p>
                    یک بیماری شایع است که می تواند بسیار دردناک باشد و باعث
                    تورم، التهاب و عفونت شود. در این حالت معمولا شست پا از یک
                    طرف یا هر دو طرف درگیر می شود. فردی که دچار این عارضه می شود
                    باید به محض مشاهده علائم به خصوص اگر مبتلا به دیابت، آسیب
                    عصبی در پا یا گردش خون ضعیف باشد سریعاً اقدام به درمان
                    نماید. گاهی اوقات با رعایت کردن بعضی موارد مانند پوشیدن کفش
                    های آزاد یا صندل ها می توان بیماری را کنترل کرد اما در موارد
                    حادتر باید با یک متخصص پا یا پودولوژیست مشورت کرد به جای
                    استفاده از داروهای بدون نسخه که ممکن است درد را پنهان کند
                    اما مشکل اساسی را برطرف نمی کند.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section_burningRootNail_left}>
            <div>
              <Image src={ContentImageOne} alt="سوزاندن ریشه ناخن" />
            </div>
          </div>
        </section>
        <section className={styles.section_complications_burning}>
          <div className={styles.Complications_burning_right}>
            <div className={styles.image}>
              <Image src={ContentImageTwo} alt="سوزاندن ریشه ناخن" />{" "}
            </div>
            <div className={styles.image2}>
              <Image
                width={154}
                height={175}
                style={{ marginBottom: 20 }}
                src={ContentImageThree}
                alt="سوزاندن ریشه ناخن"
              />
              <Image
                width={153.609}
                height={111.743}
                src={ContentImageFour}
                alt="سوزاندن ریشه ناخن"
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
                      <h2>سوزاندن ریشه ناخن چه عوارضی دارد ؟</h2>
                    </div>
                  </div>
                  <div className={styles.Complications_burning_description}>
                    <p>
                      اگر ناخن فرو رفته در گوشت درمان نشود و همینجور باقی بماند
                      ممکن است باعث عفونت استخوان شده که این می‌تواند منجر به
                      عفونت جدی استخوان شود.
                    </p>
                  </div>
                  <div className={styles.Complications_burning_description}>
                    <span>- عفونت ناخن</span>
                    <span>
                      - تغییر شکل انگشت (به علت اینکه هیچ ناخنی وجود ندارد سر
                      انگشت به مرور زمان خم می شود)
                    </span>
                    <span>
                      - احتمال رشد دوباره ناخن به صورت تکه تکه که ظاهری زبر و
                      خشن در انگشت ایجاد می کند.
                    </span>
                    <span>
                      در بعضی موارد فقط ناحیه ای که در گوشت رشد می کند سوزانده
                      می شود که در بیشتر اوقات ناخن دوباره از کناره رشد کرده اما
                      به صورت تکه ای جداگانه که ایجاد درد، تورم و عفونت می کند.
                    </span>
                    <span>
                      و اگر از کناره های ناخن بیش از اندازه ی مجاز بریده شود
                      صفحه ی باریکی از ناخن باقی می ماند که ظاهری ناخوشایند به
                      پاها می دهد.
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
                <h2>جراحی ناخن با لیزر</h2>
              </div>
            </div>
            <div className={styles.question_description}>
              <p>
                در این جراحی برش دادن و سوزاندن ریشه ی ناخن به وسیله ی لیزر
                انجام می شود که در هر صورت (جراحی ناخن با لیزر ، سوزاندن ، کشیدن
                ) روشی تهاجمی محسوب می شود که آسیب های مشابهی به جای می گذارد.
              </p>
              <p>
                در این روش هم اگر ناخن دوباره رشد کند به صورت قطعه قطعه و
                پراکنده خواهد بود زیرا قسمت هایی از ریشه درست سوزانده نشده است و
                به شکل یک ناهنجاری در می آید.
              </p>
              <p>
                هدف از انتخاب یکی از این روشها ( درمان ) می باشد که هیچ کدام ما
                را به نتیجه دلخواه و مطلوب نخواهند رساند و در انتها پس از جراحی
                بیمار با عوارض به جا مانده تنها خواهد ماند.
              </p>
            </div>
          </div>
          <div className={styles.section_question_left}>
            <Image src={ContentImageFive} alt="سوزاندن ریشه ناخن" />
            <DottedBackgroundIcon />
          </div>
        </section>
      </Layout>
    </>
  );
};
export default BurningTheRootOfTheNail;
