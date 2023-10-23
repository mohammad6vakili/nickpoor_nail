import Layout from "@/layout";
import styles from "@/styles/category.module.css";
import CloudBackgroundIcon from "@/assets/icons/cloud_background";
import DottedBackgroundIcon from "@/assets/icons/dotted_background";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Head from "next/head";
import OrtonixiaImageOne from "@/assets/new_images/ortonixia_pages_background.jpg";
import OrtonixiaContentImageOne from "@/assets/images/ortonixia_content_1.png";
import OrtonixiaContentImageTwo from "@/assets/images/ortonixia_content_2.png";
import OrtonixiaContentImageThree from "@/assets/new_images/ortonixia_3.jpg";
import OrtonixiaContentImageFour from "@/assets/images/ortonixia_content_4.png";

const Ortonixia = () => {
  const array = [
    {
      id: 1,
      url: "https://baharpod.storage.iran.liara.space/2.mp4",
    },
    {
      id: 2,
      url: "https://baharpod.storage.iran.liara.space/3.mp4",
    },
    {
      id: 3,
      url: "https://baharpod.storage.iran.liara.space/2.mp4",
    },
    {
      id: 4,
      url: "https://baharpod.storage.iran.liara.space/3.mp4",
    },
    {
      id: 5,
      url: "https://baharpod.storage.iran.liara.space/2.mp4",
    },
    {
      id: 6,
      url: "https://baharpod.storage.iran.liara.space/3.mp4",
    },
  ];

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
          <Image
            src={OrtonixiaImageOne}
            alt="ارتونیل یا ارتودنسی ناخن"
            loading="lazy"
          />
          <div className={styles.background_image_opacity}>
            <h1>ارتونیل (ارتودنسی ناخن)</h1>
          </div>
        </section>
        <section className={styles.section_ertonil}>
          <div className={styles.section_ertonil_right}>
            <div className={styles.ertonil}>
              <div className={styles.ertonil_title}>
                <h1>ارتونیل</h1>
                <div className={styles.line_x_3}></div>
              </div>
              <div className={styles.ertonil_description}>
                <p>
                  یک روش غیرجراحی برای درمان ناخن فرورفته در گوشت است. این روش
                  شامل استفاده از سیم های مخصوصی است که بر روی صفحه ناخن نصب می
                  شوند. این سیم ها ناخن را از کناره ها بلند کرده و از رشد آن به
                  داخل بافت ها جلوگیری می کنند.
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
                <div
                  style={{ color: "#555" }}
                  className={styles.prescription_description}
                >
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
                loading="lazy"
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
                loading="lazy"
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
                  روش ارتونیل ناخن دست معمولا توسط متخصص پوست یا متخصص پا انجام
                  می شود. پزشک ابتدا ناخن و پوست اطراف آن را تمیز و ضد عفونی می
                  کند. سپس با استفاده از ابزار مخصوص سوراخ کوچکی در ناخن نزدیک
                  پایه ایجاد می کنند. سپس یک سیم نازک از طریق سوراخ وارد می شود
                  و خم می شود تا به شکل ناخن مناسب باشد. سپس سیم را با یک پد چسب
                  کوچک روی میخ محکم می کنیم.
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
                بله ، این سیمها معمولاً بین 4 تا 6 هفته در جای خود باقی میمانند
                و در این مدت، بیمار میتواند به فعالیتهای روزانه خود از جمله راه
                رفتن بپردازد.
              </p>
            </div>

            <div className={styles.question}>
              <div className={styles.question_title}>
                <h2>مراقبت های پس از انجام ارتونیل چه مواردی هستند؟</h2>
              </div>
            </div>

            <ul className={styles.question_description_list}>
              <li>
                <span>کفش راحت و مناسب بپوشید.</span>
              </li>
              <li>
                <span>
                  کفش های پاشنه بلند می توانند باعث فشار روی ناخن و سیم های
                  ارتونیل شوند.
                </span>
              </li>
              <li>
                <span>
                  از فعالیت های شدید خودداری کنید. فعالیت های شدید می توانند
                  باعث آسیب به سیم های ارتونیل شوند.
                </span>
              </li>
              <li>
                <span>
                  ناخن را خشک نگه دارید زیرا رطوبت می تواند باعث عفونت شود.
                </span>
              </li>
              <li>
                <span>از پوشیدن جوراب یا کفش مرطوب و تنگ خودداری کنید.</span>
              </li>
              <li>
                <span>
                  از برداشتن سیم های ارتونیل خودداری کنید زیرا سیم ها باید توسط
                  پزشک برداشته شوند.
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.section_question_left}>
            <Image
              src={OrtonixiaContentImageThree}
              alt="ارتونیل یاارتودنسی ناخن"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
            <DottedBackgroundIcon />
          </div>
        </section>
        <section className={styles.ertonil_advantage}>
          <div className={styles.ertonil_advantage_right}>
            <Image
              src={OrtonixiaContentImageFour}
              alt="ارتونیل یاارتودنسی ناخن"
              loading="lazy"
            />
            <CloudBackgroundIcon />
          </div>
          <div className={styles.ertonil_advantage_left}>
            <div className={styles.taking_care}>
              <div className={styles.taking_care_title}>
                <h2>مزایای ارتونیل نسبت به روش های دیگر :</h2>
              </div>
            </div>
            <ul className={styles.taking_care_description}>
              <li>
                غیرتهاجمی است .در این روش، هیچ بافتی از بدن برداشته نمی شود.
              </li>
              <li>
                موثر است. در اکثر موارد، ارتونیل باعث بهبودی کامل ناخن فرورفته
                در گوشت می شود.
              </li>
              <li>
                عوارض جانبی کمی دارد. ارتونیل معمولاً بدون درد است و دوره ی
                بهبودی کوتاهی دارد.
              </li>
              <li>دوره ی بهبودی کوتاهی دارد.</li>
            </ul>

            <div className={styles.taking_care}>
              <div className={styles.taking_care_title}>
                <h2>آیا برای ارتونیل بی حسی استفاده می شود؟</h2>
              </div>
            </div>
            <div
              style={{ color: "#555" }}
              className={styles.taking_care_description}
            >
              <p>
                درهنگام ارتونیل نیاز به هیچ سرکننده و یا بی حسی موضعی نمیباشد.
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
            breakpoints={{
              300: {
                width: 300,
                slidesPerView: 1,
                spaceBetween: 10,
              },
              568: {
                width: 350,
                slidesPerView: 2,
                spaceBetween: 40,
              },
              970: {
                width: 350,
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay]}
            autoplay={true}
            className={styles.swiper_wrapper}
          >
            {array.map((item, index) => (
              <SwiperSlide key={index} className={styles.swiper_slide}>
                <video width="100%" height="100%" controls>
                  <source src={item.url} type="video/mp4" />
                </video>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </Layout>
    </>
  );
};
export default Ortonixia;
