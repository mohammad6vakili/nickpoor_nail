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

const PedicureTreatment = () => {
  const array = [1, 1, 1, 1, 1];

  return (
    <>
      <Head>
        <title>اولین کلینیک درمان ناخن در قزوین | پدیکور درمانی</title>
        <meta
          name="description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | پدیکور درمانی"
        />
        <meta
          property="og:title"
          content="اولین کلینیک درمان ناخن در قزوین | پدیکور درمانی"
        />
        <meta
          property="og:description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | پدیکور درمانی"
        />
        <meta property="og:url" content="https://baharpod.ir/" />
        <meta property="og:site_name" content="کلینیک درمان ناخن" />
        <meta
          name="twitter:title"
          content="اولین کلینیک درمان ناخن در قزوین | پدیکور درمانی"
        />
        <meta
          name="twitter:description"
          content="
          اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | پدیکور درمانی"
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
          <Image src={OrtonixiaImageOne} alt="پدیکور درمانی" />
          <div className={styles.background_image_opacity}>
            <h1>پدیکور درمانی</h1>
          </div>
        </section>
        <section className={styles.section_ertonil}>
          <div className={styles.section_ertonil_right}>
            <div className={styles.ertonil}>
              <div className={styles.ertonil_title}>
                <h1>پدیکور درمانی</h1>
                <div className={styles.ertonil_line}></div>
              </div>
              <div className={styles.ertonil_description}>
                <p>
                  یک متخصص پا (Podologist) یک پدیکور پزشکی انجام می‌دهد که تفاوت
                  قابل توجهی با پدیکور در سالن‌های زیبایی دارد. در پدیکور درمانی
                  میخچه‌ها، پینه‌ها، ترک‌ها و بافت‌های ضخیم شده از سطح پا حذف
                  می‌شود. پودولوژیست می‌تواند داروهایی را برای بیماری های قارچی،
                  تعریق بیش از حد و مراقبت‌های طول درمان تجویز کند
                </p>
              </div>
              <div className={styles.prescription}>
                <div className={styles.prescription_title}>
                  <div className={styles.dot}>
                    <div className={styles.dot1}></div>
                  </div>
                  <div>
                    <h2>چه کسی نیاز به پدیکور درمانی پا دارد؟</h2>
                  </div>
                </div>
                <div className={styles.prescription_description}>
                  <p>
                    بیمارانی که پاهایشان تحت تاثیر ترک پاشنه، زگیل، پینه، میخچه
                    و ناخن های ضخیم و قارچی و شاخی شکل می‌باشد، نیاز به پدیکور
                    درمانی دارند.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section_ertonil_left}>
            <div>
              <Image src={OrtonixiaContentImageOne} alt="پدیکور درمانی" />
            </div>
          </div>
        </section>
        <section className={styles.section_ertonil_nails}>
          <div className={styles.ertonil_nails}>
            <div className={styles.ertonil_nails_right}>
              <Image src={OrtonixiaContentImageTwo} alt="پدیکور درمانی" />
            </div>
            <div className={styles.ertonil_nails_left}>
              <div className={styles.ertonil_nails_left_title}>
                <div class={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>تفاوت پدیکور درمانی و پدیکور زیبایی چیست؟</h2>
                </div>
              </div>
              <div className={styles.ertonil_nails_left_description}>
                <p>
                  پدیکور درمانی نوعی از مراقبت است که نه تنها بر ظاهر بلکه بر
                  سلامت کلی ناخن ها و پوست پا تمرکز دارد و روی پای خشک انجام
                  می‌شود. پدیکور پزشکی یک درمان تخصصی با هدف کاهش عارضه و در
                  نهایت درمان و بهبود ناخن و پوست پا می‌باشد. از این روش برای
                  کسانی که ناخن های سالمی دارند جهت حفظ زیبایی و سلامت همیشگی
                  استفاده می‌شود.
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
                <h2>مراحل پدیکور درمانی</h2>
              </div>
            </div>
            <ul className={styles.question_description_list}>
              <li>
                <span>
                  در ابتدا پا معاینه شده تا در صورت مشاهده بیماری‌هایی همچون
                  زگیل، میخچه، ترک های عمیق پا، اگزمای پوستی و… به صورت جداگانه،
                  با متد و تجهیزات مربوط به عارضه رسیدگی شود.
                </span>
              </li>
              <li>
                <span>
                  پا ها کاملاً ضد عفونی شده و ناخن ها به صورت استاندارد کوتاه
                  می‌شوند.
                </span>
              </li>
              <li>
                <span>
                  تراشیدن و تمیز کردن ناخن هایی که مبتلا به قارچ و باکتری هستند،
                  البته به طوری که به بستر ناخن آسیبی وارد نشود.
                </span>
              </li>
              <li>
                <span>
                  درمان سلول های مرده و ضخیم شده ی پا همچون میخچه و پینه
                </span>
              </li>
              <li>
                <span>
                  ترک های کف پا تراشیده شده تا جایی که به بافت سالم پوست برسد و
                  قسمت های مرده ی پوست برداشته می‌شوند.
                </span>
              </li>
              <li>
                <span>پاها مجدد ضدعفونی و شستشو داده می‌شود.</span>
              </li>
              <li>
                <span>
                  برای احیا و بازسازی پوست و ناخن ها از کرم های درمانی استفاده
                  می‌شود که باعث ریکاوری سریع پوست می‌شوند.
                </span>
              </li>
              <li>
                <span>
                  استفاده از داروهای ضد قارچ، مختص به کسانی که دچار این عارضه
                  هستند.
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.section_question_left}>
            <Image src={OrtonixiaContentImageThree} alt="پدیکور درمانی" />
            <DottedBackgroundIcon />
          </div>
        </section>
        <section className={styles.ertonil_advantage}>
          <div className={styles.ertonil_advantage_right}>
            <Image src={OrtonixiaContentImageFour} alt="پدیکور درمانی" />
            <CloudBackgroundIcon />
          </div>
          <div className={styles.ertonil_advantage_left}>
            <div className={styles.taking_care}>
              <div className={styles.taking_care_title}>
                <h2>نتایج درمان به چه چیزهایی بستگی دارد؟</h2>
              </div>
            </div>
            <div className={styles.taking_care_description}>
              <p>
                نتایج درمان نه تنها به مهارت پودولوژیست بلکه به مراقبت های خود
                بیمار هم بستگی دارد. پودولوژیست در ابتدا وضعیت پای شما را
                می‌بیند سپس روش درمانی مناسب را انتخاب می‌کند.
              </p>
            </div>

            <div className={styles.taking_care}>
              <div className={styles.taking_care_title}>
                <h2>نکته مهم درباره پدیکور درمانی</h2>
              </div>
            </div>
            <div className={styles.taking_care_description}>
              <p>
                این کرم های احیا کننده با توجه به نوع پوست و عارضه های هر فرد
                انتخاب می‌شود و مصرف خود سرانه و انتخاب اشتباه آن‌ها باعث آسیب و
                تشدید بیماری های پوستی می‌گردد.
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
export default PedicureTreatment;
