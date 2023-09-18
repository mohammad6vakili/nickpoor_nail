import Layout from "@/layout";
import styles from "@/styles/category.module.css";
import CloudBackgroundIcon from "@/assets/icons/cloud_background";
import DottedBackgroundIcon from "@/assets/icons/dotted_background";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import dynamic from "next/dynamic";
import Head from "next/head";
import OrtonixiaImageOne from "@/assets/images/ortonixia.png";
import OrtonixiaContentImageOne from "@/assets/images/ortonixia_content_1.png";
import OrtonixiaContentImageTwo from "@/assets/images/ortonixia_content_2.png";
import OrtonixiaContentImageThree from "@/assets/images/ortonixia_content_3.png";
import OrtonixiaContentImageFour from "@/assets/images/ortonixia_content_4.png";
const CustomerVideo = dynamic(() => import("@/components/customer_video"));

const NailDiggingIntoTheFlesh = () => {
  const array = [1, 1, 1, 1, 1];

  return (
    <>
      {/* head */}
      <Head>
        <title>اولین کلینیک درمان ناخن در قزوین | فرو رفتن ناخن در گوشت</title>
        <meta
          name="description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | فرو رفتن ناخن در گوشت"
        />
        <meta
          property="og:title"
          content="اولین کلینیک درمان ناخن در قزوین | فرو رفتن ناخن در گوشت"
        />
        <meta
          property="og:description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | فرو رفتن ناخن در گوشت"
        />
        <meta property="og:url" content="https://baharpod.ir/" />
        <meta property="og:site_name" content="کلینیک درمان ناخن" />
        <meta
          name="twitter:title"
          content="اولین کلینیک درمان ناخن در قزوین | فرو رفتن ناخن در گوشت"
        />
        <meta
          name="twitter:description"
          content="
          اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | فرو رفتن ناخن در گوشت"
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
          <Image src={OrtonixiaImageOne} alt="فرو رفتن ناخن در گوشت" />
          <div className={styles.background_image_opacity}>
            <h1>فرو رفتن ناخن در گوشت</h1>
          </div>
        </section>
        <section className={styles.section_ertonil}>
          <div className={styles.section_ertonil_right}>
            <div className={styles.ertonil}>
              <div className={styles.ertonil_title}>
                <h1>فرو رفتن ناخن در گوشت</h1>
                <div className={styles.ertonil_line}></div>
              </div>
              <div className={styles.ertonil_description}>
                <p>
                  فرو رفتن ناخن در گوشت زمانی اتفاق می‌افتد که ناخن از کناره‌ها
                  به دلایل مختلف در گوشت رشد کرده و انگشت را دچار التهاب و عفونت
                  می‌کند.
                </p>
              </div>
              <div className={styles.prescription}>
                <div className={styles.prescription_title}>
                  <div className={styles.dot}>
                    <div className={styles.dot1}></div>
                  </div>
                  <div>
                    <h2>علائم ناخن فرو رفته در گوشت چیست؟</h2>
                  </div>
                </div>
                <div className={styles.prescription_description}>
                  <p>
                    ملتهب و قرمز شدن، انگشت احساس درد در ناحیه انگشت، ترشح عفونت
                    از ناحیه مورد نظر، ورم انگشت، تغییر رنگ ناخن و خونریزی. در
                    صورت دیدن هر یک از این علائم حتما به پزشک مراجعه شود و از
                    خود درمانی پرهیز کرده زیرا شرایط را وخیم تر می‌کند. اگر
                    بیمار دیابت داشته باشد می‌تواند به مراتب خطرناک‌تر از شرایط
                    بیمار عادی باشد.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section_ertonil_left}>
            <div>
              <Image
                src={OrtonixiaContentImageOne}
                alt="فرو رفتن ناخن در گوشت"
              />
            </div>
          </div>
        </section>
        <section className={styles.section_ertonil_nails}>
          <div className={styles.ertonil_nails}>
            <div className={styles.ertonil_nails_right}>
              <Image
                src={OrtonixiaContentImageTwo}
                alt="فرو رفتن ناخن در گوشت"
              />
            </div>
            <div className={styles.ertonil_nails_left}>
              <div className={styles.ertonil_nails_left_title}>
                <div class={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>در چه صورتی ناخن در گوشت فرو می‌رود؟</h2>
                </div>
              </div>
              <div className={styles.ertonil_nails_left_description}>
                <p>
                  ناخن در صورتی در گوشت اطراف انگشت فرو می‌رود که تحت فشار قرار
                  بگیرد. <br />
                  از کناره های ناخن به صورت مداوم گرفتن آسیب زیادی به ناخن وارد
                  می‌کند که باعث جمع شدن گوشت از اطراف می‌شود و فشار چند برابر
                  به ناخنی که از کناره در حال رشد دوباره است وارد کرده و ناخن
                  تحت تاثیر فشار گوشت در داخل بافت رشد می‌کند و ایجاد درد،
                  التهاب و عفونت می‌شود. ناخن ها اگر از کناره بصورت غیر اصولی و
                  بدون مکمل درمانی گرفته شوند باعث زاویه دار شدن ناخن شده و رشد
                  ناخن از مسیر اصلی خارج می‌گردد و به داخل گوشت رشد می‌کند.
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
                باید درمان به صورت اصولی انجام شود. در مرحله اول از پوشیدن کفش
                خودداری کرده و در اولین فرصت با شماره های کلینیک درمان ناخن تماس
                گرفته تا مراحل درمان برای شما توضیح داده شود.
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
              <li>
                <span>ارتونیل</span>
              </li>
            </ul>
          </div>
          <div className={styles.section_question_left}>
            <Image
              src={OrtonixiaContentImageThree}
              alt="فرو رفتن ناخن در گوشت"
            />
            <DottedBackgroundIcon />
          </div>
        </section>
        <section className={styles.ertonil_advantage}>
          <div className={styles.ertonil_advantage_right}>
            <Image
              src={OrtonixiaContentImageFour}
              alt="فرو رفتن ناخن در گوشت"
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
              <p>
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
              <p>
                بهترین درمان ناخن فرو رفته در گوشت که به صورت لوله‌ای شکل است،
                فرو رفتن ناخن در گوشت می‌باشد که نتایج بسیار عالی برای بیمار به
                همراه خواهد داشت که بدون جراحی، درد و نقاهت انجام می‌شود.
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
export default NailDiggingIntoTheFlesh;
