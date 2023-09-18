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
      <Layout>
        <section className={styles.background_image}>
          <Image src={BannerImage} alt="اونیکولیز" />
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
                  به جدا شدن ناخن از بستر اصطلاحا اونیکولیز گفته می شود.این جدا
                  شدگی از شیار دیستال یا زیر صفحه ناخن شروع می شود و ممکن است
                  چند ناخن را درگیر کند. ناخن جدا شده زرد رنگ به نظر می رسد و
                  اغلب با عفونت قارچی اشتباه می شود. این حالت در خانم هایی که
                  ناخن های بلند دارند و در کسانی که با نوک انگشتان بیشتر کار می
                  کنند، شایع است. فشارهای اندک و مکرر بر روی صفحه ناخن سبب
                  برآمدن و کنده شدن ناخن می گردد.
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
                    یک بیماری شایع است که می تواند بسیار دردناک باشد و باعث
                    تورم، التهاب و عفونت شود. در این حالت معمولا شست پا از یک
                    طرف یا هر دو طرف درگیر می شود. فردی که دچار این عارضه می شود
                    باید به محض مشاهده علائم به خصوص اگر مبتلا به دیابت، آسیب
                    عصبی در پا یا گردش خون ضعیف باشد سریعاً اقدام به درمان
                    نماید. گاهی اوقات با رعایت کردن بعضی موارد مانند پوشیدن کفش
                    های آزاد یا صندل ها می توان بیماری را کنترل کرد اما در موارد
                    حادتر باید با یک متخصص پا یا پودولوژیست مشورت کرد به جای
                    استفاده از داروهای بدون نسخه که ممکن است درد را پنهان کند
                    اما مشکل اساسی را برطرف نمی کند.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section_burningRootNail_left}>
            <div>
              <Image src={ContentImageOne} alt="اونیکولیز" />
            </div>
          </div>
        </section>
        <section className={styles.section_strike}>
          <div className={styles.section_strike_right}>
            <Image src={ContentImageTwo} alt="اونیکولیز" />
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
                <span>اونیکولیز می تواند با اصابت ناخن به یک شی رخ دهد.</span>
                <span>
                  ناخن های بلند و تحریک موضعی می توانند احتمال این آسیب را
                  افزایش دهند.
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
                  مانند: ضربه زدن به میز، کیبورد، پیانو و … بیشترین آسیب را می
                  بینند و ناخن تحت این شرایط کم کم خود را از بستر جدا میکند.
                </span>
                <span>
                  برای جلوگیری از این اتفاق ناخن ها را کوتاه نگه میداریم تا در
                  لحظه برخورد در ابتدا نوک انگشت به جای ناخن اصابت را احساس کند
                  و باعث سالم ماندن ناخن می شود.
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
                  <h2>تحریک موضعی</h2>
                </div>
              </div>
              <div className={styles.strike_left_description}>
                <p>
                  زمانی اتفاق می افتد که ناخن ها بیش از حد سوهان کشی شوند و یا
                  به صورت مکرر در معرض مواد شیمیایی قرار بگیرند مانند:
                </p>
                <span>شوینده های شیمیایی</span>
                <span>مواد کاشت ناخن</span>
                <span>چسب ناخن مصنوعی</span>
                <span>لاک</span>
                <span>غوطه ور بودن دست و پا در آب به مدت طولانی و مکرر</span>
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
                  گاهی اوقات بعضی از داروها مانند داروهای شیمی درمانی باعث جدا
                  شدن ناخن از بستر می شوند.
                </span>
                <span>
                  همینطور اشخاصی که از آنتی بیوتیک های موضعی بر روی ناخن استفاده
                  می کنند اگرآن ناحیه را در معرض نور خورشید قرار دهند زمینه را
                  برای بیماری فوتونیکولیز فراهم می کنند، که این بیماری در اثر
                  ترکیب اشعه ماورابنفش و آنتی بیوتیک به وجود می آید.
                </span>
                <span>
                  در این حالت ناخن از بستر جدا شده و باعث اونیکولیز می گردد.
                </span>
              </div>
            </div>
          </div>
          <div className={styles.section_Local_stimulation_left}>
            <Image src={ContentImageThree} />
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
                  <h2>کمبود آهن یا فعالیت بیش از حد تیروئید</h2>
                </div>
              </div>
              <div className={styles.Agents_top_right_description}>
                <p>
                  در بعضی موارد همه ی ناخن ها به یکباره از بستر جدا می شوند که
                  این اتفاق نشانه ای از کمبود آهن و پرکاری تیروئید است.بالا بردن
                  سطح آهن و درمان تیروئید می تواند به رشد طبیعی ناخن ها کمک کند.
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
                  در فضای خالی که بین ناخن و بستر ایجاد شده است اگردر اثر تجمع
                  مواد زائد یا مخمرها آن ناحیه آلوده شود باعث زرد شدن یا تغییر
                  رنگ ناخن می گردد و به مرور زمان قارچ شروع به رشد می کند.
                </span>
                <span>
                  درمان قارچ نیاز به متخصص مربوطه دارد که اگر دیر اقدام شود منجر
                  به اونیکولیز دائمی می شود.
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
                  <h2>اونیکولیز طولانی مدت</h2>
                </div>
              </div>
              <div className={styles.Agents_top_right_description}>
                <p>
                  گاهی اوقات زگیل در زیر ناخن بوجود می آید و در هنگام برداشتن آن
                  جراحتی ایجاد می شود که به بستر ناخن آسیب می رساند و اسکار
                  دائمی و اونیکولیز همیشگی خواهد بود. در این حالت ناخن دیگر به
                  بستر نخواهد چسبید.
                </p>
              </div>
            </div>
            <div className={styles.section_Agents_top_left}>
              <div className={styles.Agents_top_left_title}>
                <div className={styles.dot}>
                  <div className={styles.dot1}></div>
                </div>
                <div>
                  <h2>پسوریازیس ناخن</h2>
                </div>
              </div>
              <div className={styles.Agents_top_left_description}>
                <span>
                  پسوریازیس ناخن می تواند بسیار شبیه به قارچ ناخن باشد و تشخیص
                  این دو بیماری از هم توسط متخصص ساده نیست مگر اینکه بیوپسی یا
                  بافت برداری جهت آزمایش انجام شود.
                </span>
                <span>
                  موثرترین درمان برای اونیکولیزناشی از پسوریازیس استفاده از
                  داروهای بیولوژیکی می باشد که معمولا به صورت تزریقی توسط متخصص
                  مربوطه تجویز می گردد.
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
