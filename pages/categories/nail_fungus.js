import Layout from "@/layout";
import styles from "@/styles/category.module.css";
import CloudBackgroundIcon from "@/assets/icons/cloud_background";
import DottedBackgroundIcon from "@/assets/icons/dotted_background";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import dynamic from "next/dynamic";
import OrtonixiaImageOne from "@/assets/images/ortonixia.png";
import OrtonixiaContentImageOne from "@/assets/images/ortonixia_content_1.png";
import OrtonixiaContentImageTwo from "@/assets/images/ortonixia_content_2.png";
import OrtonixiaContentImageThree from "@/assets/images/ortonixia_content_3.png";
import OrtonixiaContentImageFour from "@/assets/images/ortonixia_content_4.png";
const CustomerVideo = dynamic(() => import("@/components/customer_video"));

const NailFungus = () => {
  const array = [1, 1, 1, 1, 1];

  return (
    <Layout>
      <section className={styles.background_image}>
        <Image src={OrtonixiaImageOne} alt="درمان قارچ ناخن پا" />
        <div className={styles.background_image_opacity}>
          <h1>درمان قارچ ناخن پا</h1>
        </div>
      </section>
      <section className={styles.section_ertonil}>
        <div className={styles.section_ertonil_right}>
          <div className={styles.ertonil}>
            <div className={styles.ertonil_title}>
              <h1>درمان قارچ ناخن پا</h1>
              <div className={styles.ertonil_line}></div>
            </div>
            <div className={styles.ertonil_description}>
              <p>
                کلینیک درمان قارچ ناخن پا کلینیک بهار پودولوژی با بهره گیری از
                جدیدترین متد روز دنیا و پیشرفته‌ترین تجهیزات تشخیصی و درمانی
                برای درمان بیماری‌های عفونی و قارچی ناخن آماده ارائه خدمات به
                شما عزیزان می‌باشد.
              </p>
            </div>
            <div className={styles.prescription}>
              <div className={styles.prescription_title}>
                <div className={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>قارچ ناخن چیست؟</h2>
                </div>
              </div>
              <div className={styles.prescription_description}>
                <p>
                  قارچ ناخن یکی از بیماری‌های شایع در ناخن می‌باشد.عفونت‌های
                  قارچی ممکن است در ناخن دست و پا نمایان شوند که توسط گونه‌های
                  متفاوتی از قارچ ها ایجاد می‌شود. عفونت‌های قارچی ابتدا در صفحه
                  ‌‌ی ناخن مستقر شده و باعث ایجاد تورم و درد شده که درنهایت منجر
                  به جدا شدن صفحه‌ی ناخن از بستر می‌شود.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section_ertonil_left}>
          <div>
            <Image src={OrtonixiaContentImageOne} alt="درمان قارچ ناخن پا" />
          </div>
        </div>
      </section>
      <section className={styles.section_ertonil_nails}>
        <div className={styles.ertonil_nails}>
          <div className={styles.ertonil_nails_right}>
            <Image src={OrtonixiaContentImageTwo} alt="درمان قارچ ناخن پا" />
          </div>
          <div className={styles.ertonil_nails_left}>
            <div className={styles.ertonil_nails_left_title}>
              <div class={styles.dot}>
                <div className={styles.dot1}></div>
              </div>
              <div>
                <h2>چرا باید به کلینیک درمان قارچ ناخن پا مراجعه کرد؟</h2>
              </div>
            </div>
            <div className={styles.ertonil_nails_left_description}>
              <p>
                وجود عفونت‌های قارچی در ناخن بسیار خطرناک و دردناک بوده همچنین
                می‌تواند باعث از بین رفتن کامل صفحه‌ی ناخن شود.علاوه بر این
                عفونت قارچی به سایر ناخن‌ها منتقل شده و پوست اطراف را درگیر
                می‌کند که عوارض جبران ناپذیری را به همراه دارد.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section_question}>
        <div className={styles.section_question_right}>
          <div className={styles.question}>
            <div className={styles.question_title}>
              <h2>راه جلوگیری از قارچ ناخن</h2>
            </div>
          </div>
          <div className={styles.question_description}>
            <p>
              مراجعه به کلینیک تخصصی قارچ ناخن بهار پودولوژی که مجهز به تجهیزات
              تشخیصی و پزشک حاذق می‌باشد از اصول اولیه درمان بوده و باعث می‌شود
              عفونت در سطح گسترده‌ای پخش نشود و پوست اطراف را درگیر نکند.
            </p>
          </div>

          <div className={styles.question}>
            <div className={styles.question_title}>
              <h2>چه عواملی باعث ایجاد قارچ ناخن می‌شود؟</h2>
            </div>
          </div>
          <ul className={styles.question_description_list}>
            <li>
              <span>عدم رعایت بهداشت درکفش و جوراب</span>
            </li>
            <li>
              <span>عدم شخصی سازی وسایلی همچون: ناخن گیر و سوهان</span>
            </li>
            <li>
              <span>کاشت ناخن به صورت غیر اصولی در محیط های آلوده</span>
            </li>
            <li>
              <span>ژلیش ناخن به صورت مکرر</span>
            </li>
            <li>
              <span>
                استفاده از ابزار آلوده و غیراستریل در سالن های زیبایی و آرایشی
              </span>
            </li>
            <li>
              <span>تعریق بیش از حد در کفش و ضربه به پا در حین ورزش</span>
            </li>
          </ul>
        </div>
        <div className={styles.section_question_left}>
          <Image src={OrtonixiaContentImageThree} alt="درمان قارچ ناخن پا" />
          <DottedBackgroundIcon />
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
  );
};
export default NailFungus;
