import Layout from "@/layout";
import styles from "@/styles/category.module.css";
import CloudBackgroundIcon from "@/assets/icons/cloud_background";
import DottedBackgroundIcon from "@/assets/icons/dotted_background";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Head from "next/head";
import NailDiggingIntoTheFleshBanner from "@/assets/images/nail_digging_into_the_flesh_banner.png";
import OrtonixiaContentImageOne from "@/assets/new_images/nail_digging_into_the_flesh_1.jpg";
import OrtonixiaContentImageTwo from "@/assets/new_images/nail_digging_into_the_flesh_2.jpg";
import OrtonixiaContentImageThree from "@/assets/new_images/nail_digging_into_the_flesh_3.jpg";
import OrtonixiaContentImageFour from "@/assets/new_images/nail_digging_into_the_flesh_4.jpg";

const NailDiggingIntoTheFlesh = () => {
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
          اولین کلینیک درمان ناخن در قزوین | درمان فرو رفتن ناخن در گوشت
        </title>
        <meta
          name="description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | درمان فرو رفتن ناخن در گوشت"
        />
        <meta
          property="og:title"
          content="اولین کلینیک درمان ناخن در قزوین | درمان فرو رفتن ناخن در گوشت"
        />
        <meta
          property="og:description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | درمان فرو رفتن ناخن در گوشت"
        />
        <meta property="og:url" content="https://baharpod.ir/" />
        <meta property="og:site_name" content="کلینیک درمان ناخن" />
        <meta
          name="twitter:title"
          content="اولین کلینیک درمان ناخن در قزوین | درمان فرو رفتن ناخن در گوشت"
        />
        <meta
          name="twitter:description"
          content="
          اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | درمان فرو رفتن ناخن در گوشت"
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
            src={NailDiggingIntoTheFleshBanner}
            alt="درمان فرو رفتن ناخن در گوشت"
            loading="lazy"
          />
          <div className={styles.background_image_opacity}>
            <h1>درمان فرو رفتن ناخن در گوشت</h1>
          </div>
        </section>
        <section className={styles.section_ertonil}>
          <div className={styles.section_ertonil_right}>
            <div className={styles.ertonil}>
              <div className={styles.ertonil_title}>
                <h1>فرو رفتن ناخن در گوشت</h1>
                <div className={styles.line_x_1}></div>
              </div>
              <div className={styles.ertonil_description}>
                <p>
                  یک مشکل شایع در پا است که در آن گوشه یا لبه ناخن پا به داخل
                  پوست اطراف آن رشد میکند. این امر میتواند باعث درد، قرمزی، تورم
                  و عفونت شود
                </p>
              </div>
              <div className={styles.prescription}>
                <div className={styles.prescription_title}>
                  <div className={styles.dot}>
                    <div className={styles.dot1}></div>
                  </div>
                  <div>
                    <h2>علائم فرورفتن ناخن در گوشت عبارتند از:</h2>
                  </div>
                </div>
                <ul
                  className={styles.prescription_description}
                  style={{ paddingRight: 12 }}
                >
                  <li>درد، قرمزی و تورم در اطراف ناخن</li>
                  <li>ترشح چرکی از اطراف ناخن</li>
                  <li>حساسیت به لمس</li>
                  <li>مشکل در راه رفتن</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.section_ertonil_left}>
            <div>
              <Image
                src={OrtonixiaContentImageOne}
                alt="درمان فرو رفتن ناخن در گوشت"
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
                alt="درمان فرو رفتن ناخن در گوشت"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.ertonil_nails_left}>
              <div className={styles.ertonil_nails_left_title}>
                <div class={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>به چه دلایلی ناخن در گوشت فرو می رود؟</h2>
                </div>
              </div>
              <div className={styles.ertonil_nails_left_description}>
                <p>
                  دلایل مختلفی برای فرورفتن ناخن در گوشت وجود دارد. یکی از دلایل
                  اصلی فرورفتن ناخن در گوشت، کوتاه کردن ناخن بیش از حد کوتاه
                  است. زمانی که ناخنها بیش از حد کوتاه میشوند، گوشههای تیز ایجاد
                  میشود که میتوانند به داخل پوست فرو بروند. <br />
                  کفشهای تنگ یا پاشنه بلند میتوانند به انگشتان پا فشار وارد کنند
                  و باعث فرورفتن ناخن شوند. <br />
                  آسیب به ناخن، مانند ضربه یا شکستگی همچنین برخی از بیماریهای
                  پوستی، مانند پسوریازیس، میتوانند باعث نازک شدن پوست اطراف ناخن
                  شوند و خطر فرورفتن ناخن را افزایش دهند.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section_question}>
          <div className={styles.section_question_right}>
            <div className={styles.question}>
              <div className={styles.question_title}>
                <h2>درمان ناخن فرو رفته در گوشت چیست؟</h2>
              </div>
            </div>
            <div className={styles.question_description}>
              <p>
                در مرحله اول از پوشیدن کفش خودداری کرده و در اولین فرصت با شماره
                های کلینیک درمان ناخن تماس گرفته تا مراحل درمان برای شما توضیح
                داده شود.
              </p>
            </div>

            <div className={styles.question}>
              <div className={styles.question_title}>
                <h2>جلوگیری از فرو رفتن ناخن در گوشت</h2>
              </div>
            </div>
            <ul className={styles.question_description_list}>
              <li>
                <span>پوشیدن کفش های مناسب</span>
              </li>
              <li>
                <span>استفاده از جوراب های نخی و آزاد</span>
              </li>
              <li>
                <span>به صورت استاندارد ناخن را کوتاه کردن</span>
              </li>
              <li>
                <span>استفاده از صندل در طول روز در محیط کار</span>
              </li>
              <li>
                <span>پدیکور درمانی</span>
              </li>
            </ul>
          </div>
          <div className={styles.section_question_left}>
            <Image
              src={OrtonixiaContentImageThree}
              alt="درمان فرو رفتن ناخن در گوشت"
              loading="lazy"
            />
            <DottedBackgroundIcon />
          </div>
        </section>
        <section className={styles.ertonil_advantage}>
          <div className={styles.ertonil_advantage_right}>
            <Image
              src={OrtonixiaContentImageFour}
              alt="درمان فرو رفتن ناخن در گوشت"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
            <CloudBackgroundIcon />
          </div>
          <div className={styles.ertonil_advantage_left}>
            <div className={styles.taking_care}>
              <div className={styles.taking_care_title}>
                <h2>عوارض فرو رفتن ناخن در گوشت</h2>
              </div>
            </div>
            <div className={styles.taking_care_description}>
              <p style={{ color: "#555" }}>
                فرورفتن ناخن در گوشت باعث درد و تورم و در نهایت عفونت می‌شود،
                اگر به این شرایط، توسط متخصص رسیدگی نشود، عفونت می‌تواند کل
                ناحیه مورد نظر را در بر گرفته و عواقب جبران ناپذیری را به همراه
                داشته باشد.
              </p>
            </div>

            <div className={styles.taking_care}>
              <div className={styles.taking_care_title}>
                <h2>راه درمان ناخن فرو رفته در گوشت چیست؟</h2>
              </div>
            </div>
            <div className={styles.taking_care_description}>
              <p style={{ color: "#555" }}>
                بهترین درمان ناخن فرو رفته در گوشت که به صورت لوله‌ای شکل است،
                درمان در کلینیک می‌باشد که نتایج بسیار عالی برای بیمار به همراه
                خواهد داشت که بدون جراحی، درد و نقاهت انجام می‌شود. برای درمان و
                مشاوره همین حالا میتوانید با کلینیک درمان ناخن بهار پودولوژی
                تماس بگیرید.
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
export default NailDiggingIntoTheFlesh;
