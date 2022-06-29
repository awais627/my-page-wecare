import styles from "./details.module.scss";
import location from "../../public/assets/images/location.svg";
import bag from "../../public/assets/images/office-bag.svg";
import add from "../../public/assets/images/add.svg";
import edit from "../../public/assets/images/edit.svg";
import Image from "next/image";
import UserData from "./userinput";
import { useState } from "react";

const User = () => {
  const [qualification, setQualification] = useState("Abc");
  return (
    <>
      <section className={styles.container}>
        <div className={styles.section}>
          <div className={styles.main}>
            <div className={styles.img}>N</div>
            <div className={styles.details}>
              <div>
                <span>Velit autem nostrum 26 years old</span>
                <div>
                  <Image src={edit} alt="edit" width={17} height={17} />
                  <span>Edit</span>
                </div>
              </div>
              <div>
                <Image src={location} alt="location" width={17} height={17} />
                <span>Hirosaki City,Aomori Prefecture</span>
              </div>
              <div>
                <Image src={bag} alt="Profession" width={17} height={17} />
                <span>Nurse</span>
              </div>
              <span>
                Experience occupation: Dietitian/Rehabilition (PT,OT,ST,ORT)
                /Public health nurse /Dental hygienist /Technical /Long-term
                care office /Operation manager /Medical officer
              </span>
            </div>
          </div>
          <UserData heading="Self-introduction" img={edit} imgText={"Edit"} />
          <UserData heading="Work history" img={add} imgText={"Addition"} />
          <UserData
            heading="Qualification of ownership"
            img={add}
            imgText={"Addition"}
            qualification={qualification}
          />
        </div>
        <div className={styles.aside}></div>
      </section>
    </>
  );
};
export default User;
