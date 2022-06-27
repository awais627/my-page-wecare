import styles from "../../styles/personal_info/personal.module.scss";
import user from "../../public/personal_info/person.svg";
import edit from "../../public/personal_info/edit.svg";
import email from "../../public/personal_info/email.svg";
import home from "../../public/personal_info/home.svg";
import phone from "../../public/personal_info/phone.svg";
import account from "../../public/personal_info/bank.svg";
import Image from "next/image";
const PersonalInfo = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div>
          Personal Information <span>(Private)</span>
        </div>
        <div>
          <Image src={edit} alt="edit" width={20} height={20} />
          <span>Edit</span>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.wrapper}>
          <div>
            <Image src={user} alt="User" width={35} height={35} />
          </div>
          <div>
            <div>Quas numquam omnis e Unde labore autem pr</div>
            <div>Dat of Birth : May 24,1996</div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div>
            <Image src={email} alt="Email" width={20} height={20} />
          </div>
          <div>nify@mailnator.com</div>
        </div>
        <div className={styles.wrapper}>
          <div>
            <Image src={phone} alt="Phone" width={20} height={20} />
          </div>
          <div>Accusamus ullamco es</div>
        </div>
        <div className={styles.wrapper}>
          <div>
            <Image src={home} alt="Home" width={20} height={20} />
          </div>
          <div>
            <div>2345678</div>
            <div>
              Ex temporibus est iu <br />
              incidunt dolores vo
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div>
            <Image src={account} alt="Account" width={20} height={20} />
          </div>
          <div>Account set up</div>
        </div>
      </div>
    </div>
  );
};
export default PersonalInfo;
