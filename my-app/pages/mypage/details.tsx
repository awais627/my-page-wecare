import styles from "../../styles/mypage/details.module.scss";
import location from "../../public/mypage/location.svg";
import bag from "../../public/mypage/office-bag.svg";
import Image from "next/image";
import UserData from "./userinput";

const Details = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.main}>
          <div className={styles.img}>N</div>
          <div className={styles.details}>
            <span>Velit autem nostrum 26 years old</span>
            <div>
              <Image src={location} alt="location" width={20} />
              Hirosaki City,Aomori Prefecture
            </div>
            <div>
              <Image src={bag} alt="Profession" width={20} />
              Nurse
            </div>
            <span>
              Experience occupation: Dietitian/Rehabilition (PT,OT,ST,ORT)
              /Public health nurse /Dental hygienist /Technical /Long-term care
              office /Operation manager /Medical officer
            </span>
          </div>
        </div>
        <UserData heading="Self-introduction" />
        <UserData heading="Work history" />
        <UserData heading="Qualification of ownership" />
      </section>
    </>
  );
};
export default Details;
