import Layout from "@/layout";
import styles from "@/styles/category.module.css";
import DottedBackgroundIcon from "@/assets/icons/dotted_background";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Head from "next/head";
import NailFungusBanner from "@/assets/images/nail_fungus_banner.png";
import ContentImageOne from "@/assets/images/onycholysis_content_1.png";
import ContentImageTwo from "@/assets/images/onycholysis_content_2.png";
import ContentImageThree from "@/assets/images/onycholysis_content_3.png";

const Onycholysis = () => {
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
      url: "https://baharpod.storage.iran.liara.space/4.MP4",
    },
  ];

  return (
    <>
      <Head>
        <title>
          اولین کلینیک درمان ناخن در قزوین | اونیکولیز (جدا شدن ناخن از بستر)
        </title>
        <meta
          name="description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | اونیکولیز (جدا شدن ناخن از بستر)"
        />
        <meta
          property="og:title"
          content="اولین کلینیک درمان ناخن در قزوین | اونیکولیز (جدا شدن ناخن از بستر)"
        />
        <meta
          property="og:description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | اونیکولیز (جدا شدن ناخن از بستر)"
        />
        <meta property="og:url" content="https://baharpod.ir/" />
        <meta property="og:site_name" content="کلینیک درمان ناخن" />
        <meta
          name="twitter:title"
          content="اولین کلینیک درمان ناخن در قزوین | اونیکولیز (جدا شدن ناخن از بستر)"
        />
        <meta
          name="twitter:description"
          content="
          اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | اونیکولیز (جدا شدن ناخن از بستر)"
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
            src={NailFungusBanner}
            alt="اونیکولیز (جدا شدن ناخن از بستر)"
            loading="lazy"
          />
          <div className={styles.background_image_opacity}>
            <h1>اونیکولیز (جدا شدن ناخن از بستر)</h1>
          </div>
        </section>
        <section className={styles.section_ertonil}>
          <div className={styles.section_ertonil_right}>
            <div className={styles.ertonil}>
              <div className={styles.ertonil_title}>
                <h1>اونیکولیز (جدا شدن ناخن از بستر)</h1>
                <div className={styles.line_x_2}></div>
              </div>
              <div className={styles.ertonil_description}>
                <p>
                  اونیکولیز وضعیتی است که در آن ناخن از پوست زیر آن جدا می شود.
                  این می تواند در اثر عوامل مختلفی مانند ضربه، عفونت های قارچی،
                  پسوریازیس، آلرژی یا داروها ایجاد شود. جدا شدن ناخن از بستر
                  ناخن معمولاً بدون درد است و می تواند ناخن های دست و پا را تحت
                  تأثیر قرار دهد.
                </p>
              </div>
              <div className={styles.prescription}>
                <div className={styles.prescription_title}>
                  <div className={styles.dot}>
                    <div className={styles.dot1}></div>
                  </div>
                  <div>
                    <h2>روش درمان</h2>
                  </div>
                </div>
                <div className={styles.prescription_description}>
                  <p style={{ color: "#555" }}>
                    برای درمان اونیکولیز، ابتدا باید علت اصلی آن شناسایی و درمان
                    شود. این ممکن است شامل تغییر در مراقبت از ناخن، استفاده از
                    داروهای موضعی یا خوراکی، و در برخی موارد مراجعه به پزشک
                    متخصص پوست باشد. مهم است که در صورت مشاهده هرگونه تغییر در
                    ناخن‌ها، به ویژه جدا شدن ناخن از بستر، به پزشک مراجعه کنید
                    تا تشخیص دقیق و درمان مناسب انجام شود
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section_ertonil_left}>
            <div>
              <Image
                src={ContentImageOne}
                alt="اونیکولیز (جدا شدن ناخن از بستر)"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section className={styles.section_ertonil_nails}>
          <div className={styles.ertonil_nails}>
            <div className={styles.ertonil_nails_right}>
              <Image
                src={ContentImageTwo}
                alt="اونیکولیز (جدا شدن ناخن از بستر)"
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
                  <h2>درمان اونیکولیز ناخن چقدر زمان می‌برد؟</h2>
                </div>
              </div>
              <div className={styles.ertonil_nails_left_description}>
                <p>
                  از زمانی که متخصصان علت جدایی ناخن را تشخیص دهند و درمان شروع
                  شود، ناخن‌های شما به آرامی شروع به رشد می‌کند. زمان رشد مجدد
                  ناخن هر فرد بستگی به شرایط بالینی او می‌باشد ولی عموما رشد
                  مجدد ناخن دست بین 6 تا 9 ماه و رشد کامل ناخن پا بین 12 الی 18
                  ماه زمان می‌برد.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section_question}>
          <div className={styles.section_question_right}>
            <div className={styles.question}>
              <div className={styles.question_title}>
                <h2>
                  چه عواملی احتمال جدا شدن گوشت اطراف ناخن را افزایش می‌دهند؟
                </h2>
              </div>
            </div>
            <div className={styles.question_description}>
              <p>
                ناخن های بلند مانند یک اهرم عمل می کنند و در لحظه اصابت، مانند:
                ضربه زدن به میز، کیبورد، پیانو و … بیشترین آسیب را می بینند و
                ناخن تحت این شرایط کم کم خود را از بستر جدا می‌کند. برای جلوگیری
                از این اتفاق ناخن‌ها را کوتاه نگه میداریم تا در لحظه برخورد در
                ابتدا نوک انگشت به جای ناخن اصابت را احساس کند و باعث جدا نشدن
                ناخن از گوشت می‌شود.
              </p>
            </div>

            <div className={styles.question}>
              <div className={styles.question_title}>
                <h2>روش‌های جلوگیری از جدا شدن ناخن از بستر</h2>
              </div>
            </div>
            <ul className={styles.question_description_list}>
              <li>
                <span>حفظ بهداشت و مراقبت از ناخن‌ها</span>
              </li>
              <li>
                <span>استفاده از محصولات محافظ</span>
              </li>
              <li>
                <span>خودداری از استفاده بیش از حد از مواد شیمیایی</span>
              </li>
              <li>
                <span>جلوگیری از آسیب فیزیکی</span>
              </li>
              <li>
                <span>تغذیه مناسب</span>
              </li>
            </ul>
          </div>
          <div className={styles.section_question_left}>
            <Image
              src={ContentImageThree}
              alt="درمان قارچ ناخن پا"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
            <DottedBackgroundIcon />
          </div>
        </section>
        {/* customer videos */}
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
export default Onycholysis;
