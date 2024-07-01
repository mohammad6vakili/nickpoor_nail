import styles from "./hamburger_menu.module.css";
import { Modal, Menu } from "antd";
import Logo from "@/assets/images/logo.svg";
import Image from "next/image";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { PiBooksLight } from "react-icons/pi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import WhatsappIcon from "@/assets/icons/whatsapp";
import InstagramIcon from "@/assets/icons/instagram";
import TelegramIcon from "@/assets/icons/telegram";
import { useRouter } from "next/router";
import { CONFIG } from "@/constant/config";

const HamburgerMenu = ({ open, setOpen }) => {
  const router = useRouter();

  const getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      children,
      label,
    };
  };

  const items = [
    getItem("خانه", "1", <AiOutlineHome style={{ fontSize: 20 }} />),
    getItem(
      "کلینیک درمان ناخن",
      "sub1",
      <RxDashboard style={{ fontSize: 20 }} />,
      [
        getItem("اونیکولیز (جدا شدن ناخن از بستر)", "2"),
        getItem("ارتونیل (ارتودنسی ناخن)", "3"),
        getItem("درمان فرو رفتن ناخن در گوشت", "4"),
        getItem("درمان قارچ ناخن", "5"),
        getItem("پدیکور درمانی", "6"),
        getItem("درمان ترک پا", "7"),
      ]
    ),
    getItem("وبلاگ", "8", <PiBooksLight style={{ fontSize: 20 }} />),
    getItem(
      "درباره ما",
      "9",
      <IoIosInformationCircleOutline style={{ fontSize: 20 }} />
    ),
    getItem("تماس با ما", "10", <BsTelephone style={{ fontSize: 20 }} />),
  ];

  const handleSelectMenuItem = (e) => {
    switch (e.key) {
      case "1":
        router.push("/");
        break;
      case "2":
        router.push("/categories/onycholysis");
        break;
      case "3":
        router.push("/categories/ortonixia");
        break;
      case "4":
        router.push("/categories/nail_digging_into_the_flesh");
        break;
      case "5":
        router.push("/categories/nail_fungus");
        break;
      case "6":
        router.push("/categories/pedicure_treatment");
        break;
      case "7":
        router.push("/categories/treatment_of_cracked_feet");
        break;
      case "8":
        router.push("/blog");
        break;
      case "9":
        router.push("/about");
        break;
      case "10":
        router.push("/contact");
        break;
      default:
        break;
    }
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      closable={false}
      onCancel={() => setOpen(false)}
      destroyOnClose={true}
      footer={null}
      style={{ position: "absolute", padding: 0, top: 0 }}
    >
      <div className={styles.hamburger_menu}>
        <div className={styles.hamburger_menu_header}>
          <Link onClick={() => setOpen(false)} href={"/"}>
            <Image src={Logo} alt="بهار پودولوژی" loading="lazy" />
          </Link>
          <button type="button" onClick={() => setOpen(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <div className={styles.hamburger_menu_menu}>
          <Menu
            style={{
              width: "100%",
            }}
            mode={"inline"}
            items={items}
            onClick={(e) => handleSelectMenuItem(e)}
          />
        </div>
        <div className={styles.hamburger_menu_footer}>
          <Link href={CONFIG.WHATSAPP_NUMBER} target="_blank">
            <WhatsappIcon />
          </Link>
          <Link href={CONFIG.INSTAGRAM_ID} target="_blank">
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </Modal>
  );
};
export default HamburgerMenu;
