import styles from "./personal.module.scss";
import user from "../../public/assets/images/person.svg";
import edit from "../../public/assets/images/edit.svg";
import email from "../../public/assets/images/email.svg";
import home from "../../public/assets/images/home.svg";
import phone from "../../public/assets/images/phone.svg";
import account from "../../public/assets/images/bank.svg";
import Image from "next/image";
import { FC } from "react";
const PersonalInfo: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <p>
          Personal Information <span>(Private)</span>
        </p>
        <div>
          <Image src={edit} alt="edit" width={15} height={15} />
          <span>Edit</span>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.wrapper}>
          <div>
            <Image src={user} alt="User" width={25} height={25} />
          </div>
          <div>
            <p>Quas numquam omnis e Unde labore autem pr</p>
            <p>Dat of Birth : May 24,1996</p>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div>
            <Image src={email} alt="Email" width={15} height={15} />
          </div>
          <p>nify@mailnator.com</p>
        </div>
        <div className={styles.wrapper}>
          <div>
            <Image src={phone} alt="Phone" width={17} height={17} />
          </div>
          <p>Accusamus ullamco es</p>
        </div>
        <div className={styles.wrapper}>
          <div>
            <Image src={home} alt="Home" width={17} height={17} />
          </div>
          <div>
            <p>2345678</p>
            <p>
              Ex temporibus est iu <br />
              incidunt dolores vo
            </p>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div>
            <Image src={account} alt="Account" width={15} height={15} />
          </div>
          <p>Account set up</p>
        </div>
      </div>
    </div>
  );
};
export default PersonalInfo;
