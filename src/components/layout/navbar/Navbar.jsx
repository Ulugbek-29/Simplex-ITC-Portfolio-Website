import { Button } from "@/components/ui/button";
import Links from "./links/Links";
import Link from "next/link";
import styles from "./navbar.module.css";
import Logo from "@/assets/icons/Logo";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Link href="/" className="logoLink">
        <Logo className={styles.logo} />
      </Link>
      <div>
        <Links />
        <Button>Contact Me</Button>
      </div>
    </div>
  );
};

export default Navbar;
