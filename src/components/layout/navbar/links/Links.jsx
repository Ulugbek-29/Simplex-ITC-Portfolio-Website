import Link from "next/link";
import styles from "../navbar.module.css";

const Links = () => {
  const links = [
    { title: "About", path: "/about" },
    { title: "Service", path: "/services" },
    { title: "Blogs", path: "/blogs" },
    { title: "FAQ", path: "/faq" },
  ];

  return (
    <div className="linksContainer">
      {links.map((link) => (
        <Link className={styles.navLinks} href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
