import { useState } from "react";
import Layout from "@/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import HomeSectionOneImage from "@/assets/images/home_section_one_image.png";
import MoreArrowIcon from "@/assets/icons/more_arrow";
import GalleryOneImage from "@/assets/images/gallery1.png";
import GalleryThreeImage from "@/assets/images/gallery3.png";
import GalleryFourImage from "@/assets/images/gallery4.png";
import GalleryFiveImage from "@/assets/images/gallery5.png";
import GallerySixImage from "@/assets/images/gallery6.png";
import BlogOneImage from "@/assets/images/blog1.png";
import BlogTwoImage from "@/assets/images/blog2.png";
import BlogThreeImage from "@/assets/images/blog3.png";
import HomeSliderOne from "@/assets/images/home_slider_1.png";
import HomeSliderTwo from "@/assets/images/home_slider_2.png";
import SwiperNextIcon from "@/assets/icons/swiper_next";
import SwiperPrevIcon from "@/assets/icons/swiper_prev";
import CategroySliderOne from "@/assets/images/category_slider_1.png";
import CategroySliderTwo from "@/assets/images/category_slider_2.png";
import CategroySliderThree from "@/assets/images/category_slider_3.png";
import CommentUserImage from "@/assets/images/comment_user.png";
import StarIcon from "@/assets/images/star";

const Home = () => {
  const array = [1, 1, 1, 1, 1, 1, 1, 1];
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
            autoplay={true}
            slidesPerView={1}
            onSwiper={(swiper) => setTopSwiperRef(swiper)}
          >
            <SwiperSlide className={styles.top_swipper_slide}>
              <Image
                src={HomeSliderOne}
                alt="Banner"
                fill
                objectFit={"cover"}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.top_swipper_slide}>
              <Image
                src={HomeSliderTwo}
                alt="Banner"
                fill
                objectFit={"cover"}
              />
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
              <h1>درباره کلینیک ناخن</h1>
              <div className={styles.line}></div>
            </div>
            <div className={styles.description}>
              <p>
                کلینیک فوق تخصصی درمان ناخن با بیش از یک دهه فعالیت مستمر در
                کلاس جهانی، متنوع‌ترین و به روزترین خدمات تشخیصی و درمانی ناخن
                را به ایرانیان و بیماران خارج از کشور ارائه می دهد. این مجموعه
                با دارا بودن پزشک مسلط به بیماری‌های ناخن بهترین خدمات درمانی را
                به شما عزیزان ارائه می‌دهد.
              </p>
            </div>
            <div className={styles.section_one_right_btn}>
              <button>
                <div>
                  <span>بیشتر بدانید</span>
                  <MoreArrowIcon />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.section_one_left}>
            <div className={styles.Photo_background}>
              <Image src={HomeSectionOneImage} alt="About Clinic" />
            </div>
          </div>
        </section>
        {/* section_two */}
        <section className={styles.section_two}>
          <div className={styles.section_two_title}>
            <h1>کلینیک درمان بیماری های ناخن</h1>
            <div className={styles.line1}></div>
          </div>
          <Swiper slidesPerView={3} spaceBetween={40}>
            <SwiperSlide className={styles.categories_swiper_slide_with_btn}>
              <div>
                <Image src={CategroySliderOne} alt="Category" />
              </div>
              <div className={styles.detail}>
                <h3>ارتونیل (ارتودنسی ناخن)</h3>
                <span>
                  سیم‌های مخصوصی به روی صفحه ناخن نصب می‌شود، که ناخن را از
                  کناره‌ها بلند کرده و از رشد آن به داخل بافت ها جلوگیری می کند.
                </span>
              </div>
              <div className={styles.swiper_slide_btn}>
                <button>
                  <div>
                    <span>بیشتر بدانید</span>
                    <MoreArrowIcon />
                  </div>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.categories_swiper_slide_with_btn}>
              <div>
                <Image src={CategroySliderTwo} alt="Category" />
              </div>
              <div className={styles.detail}>
                <h3>ناخن فرو رفته در گوشت</h3>
                <span>
                  فرو رفتن ناخن در گوشت زمانی اتفاق می‌افتد که ناخن از کناره‌ها
                  به دلایل مختلف در گوشت رشد کرده و انگشت را دچار التهاب و عفونت
                  می‌کند.
                </span>
              </div>
              <div className={styles.swiper_slide_btn}>
                <button>
                  <div>
                    <span>بیشتر بدانید</span>
                    <MoreArrowIcon />
                  </div>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.categories_swiper_slide_with_btn}>
              <div>
                <Image src={CategroySliderThree} alt="Category" />
              </div>
              <div className={styles.detail}>
                <h3>کلینیک درمان قارچ ناخن</h3>
                <span>
                  درمان با روش جدید ارتونیل بدون کشیدن ناخن و بدون جراحی و حتی
                  بدون تزریق با روش جدید ارتونیل
                </span>
              </div>
              <div className={styles.swiper_slide_btn}>
                <button>
                  <div>
                    <span>بیشتر بدانید</span>
                    <MoreArrowIcon />
                  </div>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.categories_swiper_slide_with_btn}>
              <div>
                <Image src={CategroySliderOne} alt="Category" />
              </div>
              <div className={styles.detail}>
                <h3>کلینیک درمان ناخن فرو رفته</h3>
                <span>
                  بدون جراحی و بدون حتی تزریق و بدون درد و خونریزی ناخن فرو رفته
                  در گوشت را درمان می کنیم.
                </span>
              </div>
              <div className={styles.swiper_slide_btn}>
                <button>
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
                    src={GalleryFourImage}
                    alt="Gallery"
                  />
                </Link>
              </div>
              <div className={styles.gallery_right_bottom}>
                <Link href={"/"}>
                  <Image src={GallerySixImage} alt="Gallery" />
                </Link>
              </div>
            </div>
            <div className={styles.gallery_center}>
              <div className={styles.gallery_center_top}>
                <div>
                  <Link href={"/"}>
                    <Image src={GalleryThreeImage} alt="Gallery" />
                  </Link>
                </div>
                <div>
                  <Link href={"/"}>
                    <Image src={GalleryFourImage} alt="Gallery" />
                  </Link>
                </div>
              </div>
              <div className={styles.gallery_center_bottom}>
                <Link href={"/"}>
                  <Image src={GalleryFiveImage} alt="Gallery" />
                </Link>
              </div>
            </div>
            <div class={styles.gallery_left}>
              <Link href={"/"}>
                <Image src={GalleryOneImage} alt="Gallery" />
              </Link>
            </div>
          </div>
          {/* <div className={styles.section_three_btn}>
            <button>
              <div>
                <span>مشاهده تصاویر بیشتر</span>
              </div>
            </button>
          </div> */}
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
                <Image src={BlogOneImage} alt="Blog" />
              </div>
              <div className={styles.detail_blog}>
                <h3>پودولوژی چیست؟</h3>
                <span>
                  پودولوژی به عنوان جایگزینی برای درمان‌های پر عارضه سنتی و
                  قدیمی می‌باشد. پودولوژی (Podology) چیست؟
                </span>
              </div>
              <div className={styles.blog_btn}>
                <button>
                  <div>
                    <span>بیشتر بدانید</span>
                    <MoreArrowIcon />
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.box}>
              <div>
                <Image src={BlogTwoImage} alt="Blog" />
              </div>
              <div className={styles.detail_blog}>
                <h3>سوزاندن ریشه ی ناخن</h3>
                <span>
                  در گذشته، ناخن های فرو رفته در گوشت توسط پزشکان از طریق کشیدن
                  و سوزاندن ریشه ناخن انجام میشد که این ...
                </span>
              </div>
              <div className={styles.blog_btn}>
                <button>
                  <div>
                    <span>بیشتر بدانید</span>
                    <MoreArrowIcon />
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.box}>
              <div>
                <Image src={BlogThreeImage} alt="Blog" />
              </div>
              <div className={styles.detail_blog}>
                <h3>اونیکولیز ، جدا شدن ناخن از بستر </h3>
                <span>
                  به جدا شدن ناخن از بستر اصطلاحا اونیکولیز گفته می شود.این جدا
                  شدگی از شیار دیستال یا زیر صفحه ناخن شروع می شود و ممکن است
                  چند ناخن را درگیر کند. ناخن جدا شده...
                </span>
              </div>
              <div className={styles.blog_btn}>
                <button>
                  <div>
                    <span>بیشتر بدانید</span>
                    <MoreArrowIcon />
                  </div>
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
              spaceBetween={40}
            >
              {array.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className={styles.swiper_slide_comments}
                >
                  <div className={styles.swiper_slide_comments_top}>
                    <div className={styles.image_profile}>
                      <Image src={CommentUserImage} alt="User Comments" />
                      <div>
                        <h3>مریم موسوی</h3>
                        <span>درمان ناخن فرورفته</span>
                      </div>
                    </div>
                    <div className={styles.star}>
                      <StarIcon />
                    </div>
                  </div>
                  <div className={styles.swiper_slide_comments_bottom}>
                    <span>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان بلکه روزنامه و مجله می باشد.
                    </span>
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
