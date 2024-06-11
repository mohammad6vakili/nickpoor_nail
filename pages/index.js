import { useState } from "react";
import Layout from "@/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import HomeSectionOneImage from "@/assets/images/home_section_one_image.png";
import MoreArrowIcon from "@/assets/icons/more_arrow";
import BlogOneImage from "@/assets/images/blog1.png";
import BlogTwoImage from "@/assets/images/blog2.png";
import BlogThreeImage from "@/assets/images/blog3.png";
import SwiperNextIcon from "@/assets/icons/swiper_next";
import SwiperPrevIcon from "@/assets/icons/swiper_prev";
import CategroySliderOne from "@/assets/images/category_slider_1.png";
import CategroySliderTwo from "@/assets/images/category_slider_2.png";
import CategroySliderThree from "@/assets/images/category_slider_3.png";
import CategroySliderFour from "@/assets/images/category_slider_4.png";
import CategroySliderFive from "@/assets/images/category_slider_5.png";
import StarIcon from "@/assets/images/star";
import { useRouter } from "next/router";
import GalleryThreeImage from "@/assets/gallery/14.jpg";
import GalleryFiveImage from "@/assets/new_images/gallery_bottom_center.png";
import GallerySixImage from "@/assets/gallery/4.jpg";
import GalleryLeft from "@/assets/new_images/gallery_left.jpeg";
import GalleryRightTop from "@/assets/new_images/gallery_right_top.jpg";
import GalleryTopCenterLeft from "@/assets/new_images/gallery_top_center_left.jpg";
import { CommentsData } from "@/data/comments";

const Home = () => {
  const array = [1, 1, 1, 1, 1, 1, 1, 1];
  const router = useRouter();
  const [topSwiperRef, setTopSwiperRef] = useState();

  return (
    <>
      {/* head */}
      <Head>
        <title>اولین کلینیک درمان ناخن در قزوین | بهار پودولوژی</title>
        <meta
          name="description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | بهار پودولوژی"
        />
        <meta
          property="og:title"
          content="اولین کلینیک درمان ناخن در قزوین | بهار پودولوژی"
        />
        <meta
          property="og:description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | بهار پودولوژی"
        />
        <meta property="og:url" content="https://baharpod.ir/" />
        <meta property="og:site_name" content="کلینیک درمان ناخن" />
        <meta
          name="twitter:title"
          content="اولین کلینیک درمان ناخن در قزوین | بهار پودولوژی"
        />
        <meta
          name="twitter:description"
          content="
          اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | بهار پودولوژی"
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
      {/* page ui */}
      <Layout>
        {/* topSwiper */}
        <section className={styles.top_swipper}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            // autoplay={true}
            slidesPerView={1}
            onSwiper={(swiper) => setTopSwiperRef(swiper)}
          >
            <SwiperSlide
              className={styles.top_swipper_slide}
              id={styles.top_swipper_one}
            >
              <div></div>
              <div className={styles.home_slider_one_content}>
                <h1>درمان بیماریهای ناخن با ارتونیل</h1>
                <span>بدون جراحی ، خونریزی ، تزریق و درد</span>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={styles.top_swipper_slide}
              id={styles.top_swipper_two}
            >
              <div></div>
              <div className={styles.home_slider_two_content}>
                <h1>درمان بیماری های پا</h1>
                <span>ترک عمیق ، زگیل ، میخچه و پینه</span>
              </div>
            </SwiperSlide>
          </Swiper>
          <div
            onClick={() => {
              topSwiperRef?.slideNext();
            }}
            className={styles.swiper_button_next}
          >
            <SwiperNextIcon />
          </div>
          <div
            onClick={() => {
              topSwiperRef?.slidePrev();
            }}
            className={styles.swiper_button_prev}
          >
            <SwiperPrevIcon />
          </div>
        </section>
        {/* section_one */}
        <section className={styles.section_one}>
          <div className={styles.section_one_right}>
            <div className={styles.title}>
              <h1>درباره کلینیک</h1>
              <div className={styles.line}></div>
            </div>
            <div className={styles.description}>
              <p>
                کلینیک تخصصی بهار نیک پور با بیش از یک دهه فعالیت در زمینه ی
                تشخیص و درمان بیماری های ناخن آماده ی ارائه ی بهترین خدمات به
                شما عزیزان می باشد.
              </p>
            </div>
            <div className={styles.section_one_right_btn}>
              <button onClick={() => router.push("/about")}>
                <div>
                  <span>بیشتر بدانید</span>
                  <MoreArrowIcon />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.section_one_left}>
            <div className={styles.Photo_background}>
              <Image
                src={HomeSectionOneImage}
                alt="About Clinic"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        {/* section_two */}
        <section className={styles.section_two}>
          <div className={styles.section_two_title}>
            <h1>خدمات کلینیک درمان ناخن</h1>
            <div className={styles.line1}></div>
          </div>
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
          >
            <SwiperSlide className={styles.categories_swiper_slide_with_btn}>
              <div>
                <Image src={CategroySliderOne} alt="Category" loading="lazy" />
              </div>
              <div className={styles.detail}>
                <h3>ارتونیل (ارتودنسی ناخن)</h3>
                <span>
                  یک روش غیرجراحی برای درمان ناخن فرورفته در گوشت است. این روش
                  شامل استفاده از سیم های مخصوصی است که بر روی صفحه ناخن نصب می
                  شوند ...
                </span>
              </div>
              <div className={styles.swiper_slide_btn}>
                <button
                  onClick={() => {
                    router.push("/categories/ortonixia");
                  }}
                >
                  <div>
                    <span>بیشتر بدانید</span>
                    <MoreArrowIcon />
                  </div>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.categories_swiper_slide_with_btn}>
              <div>
                <Image src={CategroySliderTwo} alt="Category" loading="lazy" />
              </div>
              <div className={styles.detail}>
                <h3>درمان فرو رفتن ناخن در گوشت</h3>
                <span>
                  یک مشکل شایع در پا است که در آن گوشه یا لبه ناخن پا به داخل
                  پوست اطراف آن رشد میکند. این امر میتواند باعث درد، قرمزی، تورم
                  و عفونت شود ...
                </span>
              </div>
              <div className={styles.swiper_slide_btn}>
                <button
                  onClick={() =>
                    router.push("/categories/nail_digging_into_the_flesh")
                  }
                >
                  <div>
                    <span>بیشتر بدانید</span>
                    <MoreArrowIcon />
                  </div>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.categories_swiper_slide_with_btn}>
              <div>
                <Image
                  src={CategroySliderThree}
                  alt="Category"
                  loading="lazy"
                />
              </div>
              <div className={styles.detail}>
                <h3>درمان قارچ ناخن</h3>
                <span>
                  کلینیک درمان قارچ ناخن پا کلینیک بهار پودولوژی با بهره گیری از
                  جدیدترین متد روز دنیا و پیشرفتهترین تجهیزات تشخیصی و درمانی
                  برای درمان بیماریهای عفونی و قارچی ناخن ...
                </span>
              </div>
              <div className={styles.swiper_slide_btn}>
                <button onClick={() => router.push("/categories/nail_fungus")}>
                  <div>
                    <span>بیشتر بدانید</span>
                    <MoreArrowIcon />
                  </div>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.categories_swiper_slide_with_btn}>
              <div>
                <Image src={CategroySliderFour} alt="Category" loading="lazy" />
              </div>
              <div className={styles.detail}>
                <h3>پدیکور درمانی</h3>
                <span>
                  در این روش، ناخن های پا به شکل صحیح کوتاه می شوند و گوشت های
                  اضافه اطراف ناخن ها برداشته می شوند. همچنین، پوست پا نیز لایه
                  برداری می شود ...
                </span>
              </div>
              <div className={styles.swiper_slide_btn}>
                <button
                  onClick={() => router.push("/categories/pedicure_treatment")}
                >
                  <div>
                    <span>بیشتر بدانید</span>
                    <MoreArrowIcon />
                  </div>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.categories_swiper_slide_with_btn}>
              <div>
                <Image src={CategroySliderFive} alt="Category" loading="lazy" />
              </div>
              <div className={styles.detail}>
                <h3>درمان ترک پا</h3>
                <span>
                  ترک پا یک مشکل شایع پوستی است که در آن پوست کف پا خشک و ترک
                  خورده می شود. ترک پا می تواند باعث درد، ناراحتی و حتی خونریزی
                  شود. درمان ترک پا به شدت آن بستگی دارد ...
                </span>
              </div>
              <div className={styles.swiper_slide_btn}>
                <button
                  onClick={() =>
                    router.push("/categories/treatment_of_cracked_feet")
                  }
                >
                  <div>
                    <span>بیشتر بدانید</span>
                    <MoreArrowIcon />
                  </div>
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        {/* section_three */}
        <section className={styles.section_three}>
          <div className={styles.section_three_title}>
            <h1>گالری تصاویر</h1>
            <div className={styles.line2}></div>
          </div>
          <div className={styles.gallery_pictures}>
            <div className={styles.gallery_right}>
              <div className={styles.gallery_right_top}>
                <Link href={"/"}>
                  <Image
                    width={100}
                    height={100}
                    src={GalleryRightTop}
                    alt="Gallery"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className={styles.gallery_right_bottom}>
                <Link href={"/"}>
                  <Image src={GallerySixImage} alt="Gallery" loading="lazy" />
                </Link>
              </div>
            </div>
            <div className={styles.gallery_center}>
              <div className={styles.gallery_center_top}>
                <div>
                  <Link href={"/"}>
                    <Image
                      src={GalleryThreeImage}
                      alt="Gallery"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div>
                  <Link href={"/"}>
                    <Image
                      src={GalleryTopCenterLeft}
                      alt="Gallery"
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
              <div className={styles.gallery_center_bottom}>
                <Link href={"/"}>
                  <Image src={GalleryFiveImage} alt="Gallery" loading="lazy" />
                </Link>
              </div>
            </div>
            <div class={styles.gallery_left}>
              <Link href={"/"}>
                <Image src={GalleryLeft} alt="Gallery" loading="lazy" />
              </Link>
            </div>
          </div>
        </section>
        {/* section_four */}
        <section className={styles.section_four}>
          <div className={styles.section_four_title}>
            <h1>وبلاگ</h1>
            <div className={styles.line3}></div>
          </div>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <div>
                <Image src={BlogOneImage} alt="Blog" loading="lazy" />
              </div>
              <div className={styles.detail_blog}>
                <h3>پودولوژی چیست؟</h3>
                <span>
                  پودولوژی شاخه ای از پزشکی است که به تشخیص، درمان و پیشگیری از
                  بیماری ها و اختلالات پا و ناخن می پردازد.این طیف وسیعی از
                  فعالیت‌ها را با هدف تشخیص و درمان بیماری‌های مختلف پا مانند
                  ناخن‌های فرورفته ...
                </span>
              </div>
              <div className={styles.blog_btn}>
                <button>
                  <Link href={"/blog/what_is_podology"}>
                    <div>
                      <span>ادامه مطلب</span>
                      <MoreArrowIcon />
                    </div>
                  </Link>
                </button>
              </div>
            </div>
            <div className={styles.box}>
              <div>
                <Image src={BlogTwoImage} alt="Blog" loading="lazy" />
              </div>
              <div className={styles.detail_blog}>
                <h3>پیشگیری از ابتلا به قارچ ناخن</h3>
                <span>
                  قارچ ناخن یک عفونت شایع است که میتواند ناخنهای پا یا دست را
                  درگیر کند. این عفونت میتواند باعث تغییر رنگ، ضخیم شدن، شکنندگی
                  و جدا شدن ناخن شود ...
                </span>
              </div>
              <div className={styles.blog_btn}>
                <button>
                  <Link href={"/blog/prevention_of_nail_fungus"}>
                    <div>
                      <span>ادامه مطلب</span>
                      <MoreArrowIcon />
                    </div>
                  </Link>
                </button>
              </div>
            </div>
            <div className={styles.box}>
              <div>
                <Image src={BlogThreeImage} alt="Blog" loading="lazy" />
              </div>
              <div className={styles.detail_blog}>
                <h3>اونیکولیز ، جدا شدن ناخن از بستر </h3>
                <span>
                  اونیکولیز وضعیتی است که در آن ناخن از پوست زیر آن جدا می شود.
                  این می تواند در اثر عوامل مختلفی مانند ضربه، عفونت های قارچی،
                  پسوریازیس، آلرژی یا داروها ایجاد شود. جدا شدن ناخن ...
                </span>
              </div>
              <div className={styles.blog_btn}>
                <button>
                  <Link href={"/blog/onycholysis"}>
                    <div>
                      <span>ادامه مطلب</span>
                      <MoreArrowIcon />
                    </div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* section_five */}
        <section className={styles.section_five}>
          <div className={styles.section_five_title}>
            <h1>نظرات مشتریان</h1>
            <div className={styles.line4}></div>
          </div>
          <div className={styles.commentsSwiper}>
            <Swiper
              modules={[Autoplay]}
              autoplay={true}
              slidesPerView={3}
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
            >
              {CommentsData.map((cm, index) => (
                <SwiperSlide
                  key={index}
                  className={styles.swiper_slide_comments}
                >
                  <div className={styles.swiper_slide_comments_top}>
                    <div className={styles.image_profile}>
                      <Image
                        src={cm.avatar}
                        alt="User Comments"
                        loading="lazy"
                      />
                      <div>
                        <h3>{cm.name}</h3>
                        <span>{cm.category}</span>
                      </div>
                    </div>
                    <div className={styles.star}>
                      <StarIcon />
                    </div>
                  </div>
                  <div className={styles.swiper_slide_comments_bottom}>
                    <span>{cm.comment}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
