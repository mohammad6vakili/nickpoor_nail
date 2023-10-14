import Layout from "@/layout";
import Image from "next/image";
import NotFoundVector from "@/assets/illustrations/404.svg";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <>
      {/* head */}
      <Head>
        <title>اولین کلینیک درمان ناخن در قزوین | صفحه مورد نظر پیدا نشد</title>
        <meta
          name="description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | صفحه مورد نظر پیدا نشد"
        />
        <meta
          property="og:title"
          content="اولین کلینیک درمان ناخن در قزوین | صفحه مورد نظر پیدا نشد"
        />
        <meta
          property="og:description"
          content="اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | صفحه مورد نظر پیدا نشد"
        />
        <meta property="og:url" content="https://baharpod.ir/" />
        <meta property="og:site_name" content="کلینیک درمان ناخن" />
        <meta
          name="twitter:title"
          content="اولین کلینیک درمان ناخن در قزوین | صفحه مورد نظر پیدا نشد"
        />
        <meta
          name="twitter:description"
          content="
          اولین کلینیک درمان ناخن در قزوین با جدیدترین و مدرن ترین شیوه های درمان روز دنیا | صفحه مورد نظر پیدا نشد"
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
        <div className="not_found_page">
          <div>
            <h1>مشکلی پیش آمده است!</h1>
            <p>متاسفانه صفحه مورد نظر یافت نشد.</p>
            <button type="button" onClick={() => router.push("/")}>
              <div>
                <span>بازگشت به صفحه اصلی</span>
              </div>
            </button>
          </div>
          <div>
            <Image src={NotFoundVector} alt="Page Not Found" loading="lazy" />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default NotFoundPage;
