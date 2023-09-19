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
        getItem("ارتونیل (ارتودنسی ناخن)", "2"),
        getItem("ناخن فرورفته در گوشت", "3"),
        getItem("درمان قارچ ناخن", "4"),
        getItem("پدیکور درمانی", "5"),
      ]
    ),
    getItem("وبلاگ", "6", <PiBooksLight style={{ fontSize: 20 }} />),
    getItem(
      "درباره ما",
      "7",
      <IoIosInformationCircleOutline style={{ fontSize: 20 }} />
    ),
    getItem("تماس با ما", "8", <BsTelephone style={{ fontSize: 20 }} />),
  ];

  const handleSelectMenuItem = (e) => {
    switch (e.key) {
      case "1":
        router.push("/");
        break;
      case "2":
        router.push("/categories/ortonixia");
        break;
      case "3":
        router.push("/categories/nail_digging_into_the_flesh");
        break;
      case "4":
        router.push("/categories/nail_fungus");
        break;
      case "5":
        router.push("/categories/pedicure_treatment");
        break;
      case "6":
        router.push("/blog");
        break;
      case "7":
        router.push("/about");
        break;
      case "8":
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
            <Image src={Logo} alt="بهار پودولوژی" />
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
          <Link href={"https://whatsapp.com"} target="_blank">
            <WhatsappIcon />
          </Link>
          <Link href={"https://instagram.com"} target="_blank">
            <InstagramIcon />
          </Link>
          <Link href={"https://telegram.org"} target="_blank">
            <TelegramIcon />
          </Link>
        </div>
      </div>
    </Modal>
  );
};
export default HamburgerMenu;
