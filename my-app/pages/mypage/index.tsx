import styles from "../../styles/mypage/details.module.scss";
import location from "../../public/mypage/location.svg";
import bag from "../../public/mypage/office-bag.svg";
import add from "../../public/mypage/add.svg";
import edit from "../../public/mypage/edit.svg";
import Image from "next/image";
import UserData from "./userinput";

const Index = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.main}>
          <div className={styles.img}>N</div>
          <div className={styles.details}>
            <div>
              <span>Velit autem nostrum 26 years old</span>
              <div>
                <Image src={edit} alt="edit" width={20} height={20} />
                <span>Edit</span>
              </div>
            </div>
            <div>
              <Image src={location} alt="location" width={20} />
              <span>Hirosaki City,Aomori Prefecture</span>
            </div>
            <div>
              <Image src={bag} alt="Profession" width={20} />
              <span>Nurse</span>
            </div>
            <span>
              Experience occupation: Dietitian/Rehabilition (PT,OT,ST,ORT)
              /Public health nurse /Dental hygienist /Technical /Long-term care
              office /Operation manager /Medical officer
            </span>
          </div>
        </div>
        <UserData heading="Self-introduction" img={edit} imgText={"Edit"} />
        <UserData heading="Work history" img={add} imgText={"Addition"} />
        <UserData
          heading="Qualification of ownership"
          img={add}
          imgText={"Addition"}
        />
      </section>
    </>
  );
};
export default Index;
