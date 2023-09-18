import Layout from "@/layout";
import styles from "@/styles/category.module.css";
import CloudBackgroundIcon from "@/assets/icons/cloud_background";
import DottedBackgroundIcon from "@/assets/icons/dotted_background";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import OrtonixiaImageOne from "@/assets/images/ortonixia.png";
import OrtonixiaContentImageOne from "@/assets/images/ortonixia_content_1.png";
import OrtonixiaContentImageTwo from "@/assets/images/ortonixia_content_2.png";
import OrtonixiaContentImageThree from "@/assets/images/ortonixia_content_3.png";
import OrtonixiaContentImageFour from "@/assets/images/ortonixia_content_4.png";
const CustomerVideo = dynamic(() => import("@/components/customer_video"));

const Ortonixia = () => {
  const array = [1, 1, 1, 1, 1];
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
          <Image src={OrtonixiaImageOne} alt="ارتونیل یا ارتودنسی ناخن" />
          <div className={styles.background_image_opacity}>
            <h1>ارتونیل (ارتودنسی ناخن)</h1>
          </div>
        </section>
        <section className={styles.section_ertonil}>
          <div className={styles.section_ertonil_right}>
            <div className={styles.ertonil}>
              <div className={styles.ertonil_title}>
                <h1>ارتونیل</h1>
                <div className={styles.ertonil_line}></div>
              </div>
              <div className={styles.ertonil_description}>
                <p>
                  سیم‌های مخصوصی است که بر روی صفحه ناخن نصب می شود و ناخن را از
                  کناره‌ها بلند کرده و از رشد آن به داخل بافت جلوگیری
                  می‌کند.سیم‌ها می‌توانند صفحه‌ی ناخن را که به شدت خم و لوله‌ای
                  شکل شده را صاف کنند.
                </p>
              </div>
              <div className={styles.prescription}>
                <div className={styles.prescription_title}>
                  <div className={styles.dot}>
                    <div className={styles.dot1}></div>
                  </div>
                  <div>
                    <h2>ارتونیل برای چه افرادی تجویز می‌شود؟</h2>
                  </div>
                </div>
                <div className={styles.prescription_description}>
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
          <div className={styles.section_ertonil_left}>
            <div>
              <Image
                src={OrtonixiaContentImageOne}
                alt="ارتونیل یاارتودنسی ناخن"
              />
            </div>
          </div>
        </section>
        <section className={styles.section_ertonil_nails}>
          <div className={styles.ertonil_nails}>
            <div className={styles.ertonil_nails_right}>
              <Image
                src={OrtonixiaContentImageTwo}
                alt="ارتونیل یاارتودنسی ناخن"
              />
            </div>
            <div className={styles.ertonil_nails_left}>
              <div className={styles.ertonil_nails_left_title}>
                <div class={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>ارتونیل ناخن دست (ارتودنسی ناخن دست)</h2>
                </div>
              </div>
              <div className={styles.ertonil_nails_left_description}>
                <p>
                  فرو رفتن ناخن در گوشت خیلی کمتر در دست‌ها اتفاق می‌افتد. زیرا
                  فشار کمتری را ناخن های دست متحمل می‌شوند و در معرض نور و محیط
                  آزاد هستند.اما در مواردی مانند ضربه های شدید، پسوریازیس، دیابت
                  و… که به بافت ناخن آسیب می‌زنند می‌توانند باعث تغییر شکل، ضخیم
                  شدن و جدا شدن ناخن از بستر شوند و در بعضی مواقع حالت لوله ای
                  شکل به ناخن ها دهند.البته مانیکور اشتباه و غیر اصولی به همراه
                  ژلیش کردن مداوم، روی ناخن هم می‌تواند این آسیب را به همراه
                  داشته باشد.اما ارتونیل روی ناخن دست با صلاحدید پودولوژیست و
                  تشخیص ضخامت سیم قابل اجرا می‌باشد.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section_question}>
          <div className={styles.section_question_right}>
            <div className={styles.question}>
              <div className={styles.question_title}>
                <h2>آیا بعد از ارتونیل ناخن می‌توان راه رفت؟</h2>
              </div>
            </div>
            <div className={styles.question_description}>
              <p>
                بله، سیم‌های ارتونیل حجم بسیار کمی به اندازه یک میلی متر دارند
                که با ظرافت خاصی روی ناخن نصب می‌شوند به همین علت تداخلی
                درکارهای روزانه مثل: راه رفتن، رانندگی، ورزش و… ایجاد نمی‌کنند.
              </p>
            </div>

            <div className={styles.question}>
              <div className={styles.question_title}>
                <h2>مراقبت های پس از انجام ارتونیل چه مواردی هستند؟</h2>
              </div>
            </div>

            <ul className={styles.question_description_list}>
              <li>
                <span>استفاده از کفش راحت و مناسب با سرپنجه پهن</span>
              </li>
              <li>
                <span>استفاده از جوراب نخی و آزاد</span>
              </li>
              <li>
                <span>
                  خشک نگهداشتن محیط ناخن (جلوگیری از رشد عفونت‌های قارچی و
                  باکتریایی)
                </span>
              </li>
              <li>
                <span>استفاده از چسب‌های درمانی</span>
              </li>
              <li>
                <span>جلوگیری از ضربه و فشار</span>
              </li>
            </ul>
          </div>
          <div className={styles.section_question_left}>
            <Image
              src={OrtonixiaContentImageThree}
              alt="ارتونیل یاارتودنسی ناخن"
            />
            <DottedBackgroundIcon />
          </div>
        </section>
        <section className={styles.ertonil_advantage}>
          <div className={styles.ertonil_advantage_right}>
            <Image
              src={OrtonixiaContentImageFour}
              alt="ارتونیل یاارتودنسی ناخن"
            />
            <CloudBackgroundIcon />
          </div>
          <div className={styles.ertonil_advantage_left}>
            <div className={styles.taking_care}>
              <div className={styles.taking_care_title}>
                <h2>مزیت ارتونیل نسبت به روش کشیدن یا سوزاندن ناخن پا چیست؟</h2>
              </div>
            </div>
            <div className={styles.taking_care_description}>
              <p>
                مزیت ارتونیل ناخن: ارتونیل بدون اینکه آسیبی به بافت و بستر زیرین
                ناخن وارد کند باعث صاف شدن ناخن شده و بیمار در طول درمان و پس از
                آن هیچ دردی را احساس نخواهد کرد. همچنین این درمان بدون خونریزی
                بوده و هیچ دوره‌ی نقاهتی ندارد. در جراحی و سوزاندن ناخن عوارض
                جبران ناپذیری به بستر ناخن وارد شده و مشکل فرورفتگی ناخن با
                عارضه‌های جدید و حادتری پدیدار می‌شوند.
              </p>
            </div>

            <div className={styles.taking_care}>
              <div className={styles.taking_care_title}>
                <h2>آیا هنگام ارتونیل نیاز به بی حسی موضعی داریم؟</h2>
              </div>
            </div>
            <div className={styles.taking_care_description}>
              <p>
                خیر، درهنگام ارتونیل نیاز به هیچ سرکننده و یا بی حسی موضعی
                نمی‌باشد. در این متد درمانی شما هیچگونه دردی را احساس نخواهید
                کرد.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.Customer_satisfaction}>
          <div className={styles.videoSwiper_title}>
            <h1>ویدیوهای رضایت مشتری</h1>
            <div className={styles.videoSwiper_line}></div>
          </div>
        </section>
        <section className={styles.videoSwiper}>
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            modules={[Autoplay]}
            autoplay={true}
            className={styles.swiper_wrapper}
          >
            {array.map((item, index) => (
              <SwiperSlide key={index} className={styles.swiper_slide}>
                <CustomerVideo />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </Layout>
    </>
  );
};
export default Ortonixia;
