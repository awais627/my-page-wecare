import logo from "../../public/assets/images/wecare_logo.svg";
import styles from "./navbar.module.scss";
import Image from "next/image";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <>
      <nav className={styles.main}>
        <div>
          <Image src={logo} alt="Wecare" width={150} height={100} />
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>Job search</li>
            <li>be on one&apos;s mind!</li>
            <li>message</li>
            <li>My page</li>
            <li>N</li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
