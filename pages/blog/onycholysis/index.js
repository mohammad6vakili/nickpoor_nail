import Layout from "@/layout";
import styles from "@/styles/blog.module.css";
import Image from "next/image";
import Head from "next/head";
import BannerImage from "@/assets/images/onycholysis_banner.png";
import ContentImageOne from "@/assets/images/onycholysis_content_1.png";
import ContentImageTwo from "@/assets/images/onycholysis_content_2.png";
import ContentImageThree from "@/assets/images/onycholysis_content_3.png";
import DottedBackgroundIcon from "@/assets/icons/dotted_background";

const Onycholysis = () => {
  return (
    <>
      <Head>
        <title>اولین کلینیک درمان ناخن در قزوین | اونیکولیز</title>
        <meta
          name="description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | اونیکولیز"
        />
        <meta
          property="og:title"
          content="اولین کلینیک درمان ناخن در قزوین | اونیکولیز"
        />
        <meta
          property="og:description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | اونیکولیز"
        />
        <meta property="og:url" content="https://baharpod.ir/" />
        <meta property="og:site_name" content="کلینیک درمان ناخن" />
        <meta
          name="twitter:title"
          content="اولین کلینیک درمان ناخن در قزوین | اونیکولیز"
        />
        <meta
          name="twitter:description"
          content="
          اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | اونیکولیز"
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
          <Image src={BannerImage} alt="اونیکولیز" loading="lazy" />
          <div className={styles.background_image_opacity}>
            <h1>اونیکولیز</h1>
          </div>
        </section>
        <section className={styles.section_onycholysis}>
          <div className={styles.section_onycholysis_right}>
            <div className={styles.onycholysis}>
              <div className={styles.onycholysis_title}>
                <h1>اونیکولیز</h1>
                <div className={styles.onycholysis_line}></div>
              </div>
              <div className={styles.onycholysis_description}>
                <p>
                  اونیکولیز وضعیتی است که در آن ناخن از پوست زیر آن جدا می شود.
                  این می تواند در اثر عوامل مختلفی مانند ضربه، عفونت های قارچی،
                  پسوریازیس، آلرژی یا داروها ایجاد شود. جدا شدن ناخن از بستر
                  ناخن معمولاً بدون درد است و می تواند ناخن های دست و پا را تحت
                  تأثیر قرار دهد.
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
                    ناخن فرورفته شرایطی است که در آن بخشی از گوشه یا کنار ناخن
                    به بافت نرم یا پوست انگشت پا فشار می‌آورد. افراد می توانند
                    این مشکل را در هر یک از انگشتان پا تجربه کنند، اما این مشکل
                    بیشتر در انگشتان بزرگ پا رخ می دهد.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section_burningRootNail_left}>
            <div>
              <Image src={ContentImageOne} alt="اونیکولیز" loading="lazy" />
            </div>
          </div>
        </section>
        <section className={styles.section_strike}>
          <div className={styles.section_strike_right}>
            <Image src={ContentImageTwo} alt="اونیکولیز" loading="lazy" />
          </div>
          <div className={styles.section_strike_left}>
            <div className={styles.strike_left}>
              <div className={styles.strike_left_title}>
                <div className={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>تروما یا ضربه</h2>
                </div>
              </div>
              <div className={styles.strike_left_description}>
                <span>
                  ضربه های مکرر مانند ضربه زدن یا ضربه زدن به ناخن ها می تواند
                  باعث جدا شدن ناخن از بستر ناخن شود.
                </span>
              </div>
            </div>
            <div className={styles.strike_left}>
              <div className={styles.strike_left_title}>
                <div className={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>ناخن های بلند</h2>
                </div>
              </div>
              <div className={styles.strike_left_description}>
                <span>
                  ناخن های بلند مانند یک اهرم عمل می کنند و در لحظه اصابت،
                  مانند: ضربه زدن به میز، کیبورد و … بیشترین آسیب را می بینند و
                  ناخن تحت این شرایط کم کم خود را از بستر جدا میکند. برای
                  جلوگیری از این اتفاق ناخن ها را کوتاه نگه میداریم تا در لحظه
                  برخورد در ابتدا نوک انگشت به جای ناخن اصابت را احساس کند و
                  باعث سالم ماندن ناخن می شود.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section_Local_stimulation}>
          <div className={styles.section_Local_stimulation_right}>
            <div className={styles.strike_left}>
              <div className={styles.strike_left_title}>
                <div className={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>درمانهای خانگی</h2>
                </div>
              </div>
              <div className={styles.strike_left_description}>
                <p>
                  برخی از درمان‌های خانگی، مانند استفاده از روغن درخت چای
                  رقیق‌شده با روغن حامل، ممکن است به درمان عفونت‌های قارچی یا
                  مخمری که به اونیکولیز کمک می‌کنند کمک کند. با این حال، مهم است
                  که قبل از استفاده از هر گونه درمان خانگی با یک متخصص مراقبت
                  های بهداشتی مشورت کنید.
                </p>
              </div>
            </div>
            <div className={styles.strike_left}>
              <div className={styles.strike_left_title}>
                <div className={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>داروهای خاص</h2>
                </div>
              </div>
              <div className={styles.strike_left_description}>
                <span>
                  برخی داروها، از جمله داروهای شیمی درمانی یا آنتی بیوتیک هایی
                  مانند تتراسایکلین، ممکن است به عنوان یک عارضه جانبی باعث
                  اونیکولیز شوند.
                </span>
              </div>
            </div>
          </div>
          <div className={styles.section_Local_stimulation_left}>
            <Image src={ContentImageThree} alt="اونیکولیز" loading="lazy" />
            <DottedBackgroundIcon />
            <div className={styles.vector}>
              <svg
                width="116"
                height="116"
                viewBox="0 0 116 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M112.146 78.7618L78.7559 112.155C86.3423 109.226 93.2321 104.741 98.9825 98.9902C104.733 93.2393 109.217 86.3489 112.146 78.7618Z"
                  fill="#1A601A"
                  fill-opacity="0.3"
                />
                <path
                  d="M57.9966 116C61.2141 115.999 64.4259 115.732 67.5992 115.201L115.201 67.6064C115.732 64.4318 116 61.2187 116 58C116 57.7433 116 57.4866 116 57.2269L57.2236 115.991C57.4803 115.994 57.737 116 57.9966 116Z"
                  fill="#1A601A"
                  fill-opacity="0.3"
                />
                <path
                  d="M49.6951 115.405L115.391 49.7034C115.009 47.0413 114.441 44.4093 113.69 41.827L41.8135 113.701C44.3979 114.452 47.0315 115.021 49.6951 115.405Z"
                  fill="#1A601A"
                  fill-opacity="0.3"
                />
                <path
                  d="M35.8156 111.589L111.575 35.8204C110.659 33.6132 109.606 31.4649 108.424 29.3879L29.375 108.444C31.4549 109.625 33.6059 110.675 35.8156 111.589Z"
                  fill="#1A601A"
                  fill-opacity="0.3"
                />
                <path
                  d="M100.994 19.1223L19.1182 101.003C20.8051 102.529 22.5797 103.956 24.4329 105.276L105.265 24.4346C103.946 22.5817 102.52 20.8079 100.994 19.1223Z"
                  fill="#1A601A"
                  fill-opacity="0.3"
                />
                <path
                  d="M91.6313 10.782L10.7705 91.6442C12.0916 93.4954 13.5204 95.2673 15.0497 96.9506L96.9402 15.0615C95.2551 13.5332 93.4825 12.1042 91.6313 10.782Z"
                  fill="#1A601A"
                  fill-opacity="0.3"
                />
                <path
                  d="M80.2686 4.45172L4.45117 80.2759C5.37158 82.4784 6.42759 84.6218 7.61314 86.6938L86.6917 7.60815C84.6176 6.42484 82.4725 5.37069 80.2686 4.45172Z"
                  fill="#1A601A"
                  fill-opacity="0.3"
                />
                <path
                  d="M66.408 0.60675L0.613281 66.4162C0.999959 69.0788 1.57408 71.7108 2.33137 74.2926L74.278 2.33082C71.6977 1.57465 69.0681 0.998575 66.408 0.60675Z"
                  fill="#1A601A"
                  fill-opacity="0.3"
                />
                <path
                  d="M57.9948 0C54.8317 0.000886589 51.6739 0.259427 48.5527 0.77306L0.772982 48.557C0.259395 51.6785 0.00088651 54.8366 0 58C0 58.2917 0 58.6039 0 58.9044L58.902 0.0233338C58.6103 0.0233338 58.2953 0 57.9948 0Z"
                  fill="#1A601A"
                  fill-opacity="0.3"
                />
                <path
                  d="M3.77148 37.4541L37.4506 3.76318C29.7818 6.69149 22.8176 11.2063 17.0138 17.012C11.2101 22.8178 6.69754 29.7838 3.77148 37.4541Z"
                  fill="#1A601A"
                  fill-opacity="0.3"
                />
              </svg>
            </div>
          </div>
        </section>
        <section className={styles.section_Agents}>
          <div className={styles.section_Agents_top}>
            <div className={styles.section_Agents_top_right}>
              <div className={styles.Agents_top_right_title}>
                <div className={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>فعالیت بیش از حد </h2>
                </div>
              </div>
              <div className={styles.Agents_top_right_description}>
                <p>
                  بیماری های تیروئید مانند پرکاری تیروئید یا کم کاری تیروئید
                  ممکن است باعث شکنندگی ناخن ها یا شکافتن بستر ناخن از صفحه ناخن
                  (اونیکولیز) شوند. بیماری یا جراحی شدید ممکن است باعث فرورفتگی
                  های افقی در ناخن ها شود.
                </p>
              </div>
            </div>
            <div className={styles.section_Agents_top_left}>
              <div className={styles.Agents_top_left_title}>
                <div className={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>عفونت قارچ</h2>
                </div>
              </div>
              <div className={styles.Agents_top_left_description}>
                <span>
                  عفونت های مخمری یا قارچی می توانند منجر به اونیکولیز شوند. این
                  عفونت ها ممکن است باعث تغییر رنگ ناخن ها شوند. پسوریازیس
                  پسوریازیس ناخن می تواند باعث اونیکولیز شود و اغلب با علائم
                  دیگری مانند پوسته پوسته شدن و سوراخ شدن ناخن ها همراه است.
                </span>
              </div>
            </div>
          </div>

          <div className={styles.section_Agents_top}>
            <div className={styles.section_Agents_top_right}>
              <div className={styles.Agents_top_right_title}>
                <div className={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>عکس العمل های آلرژیتیک</h2>
                </div>
              </div>
              <div className={styles.Agents_top_right_description}>
                <p>
                  برخی از افراد ممکن است در نتیجه یک واکنش آلرژیک به محصولاتی که
                  روی ناخن استفاده می‌شوند، مانند لاک ناخن یا نوک ناخن مصنوعی،
                  دچار اونیکولیز شوند.
                </p>
              </div>
            </div>
            <div className={styles.section_Agents_top_left}>
              <div className={styles.Agents_top_left_title}>
                <div className={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>بیماری های سیستمیک</h2>
                </div>
              </div>
              <div className={styles.Agents_top_left_description}>
                <span>
                  شرایطی مانند کمبود آهن یا فعالیت بیش از حد تیروئید نیز می
                  تواند منجر به اونیکولیز شود.
                </span>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default Onycholysis;
