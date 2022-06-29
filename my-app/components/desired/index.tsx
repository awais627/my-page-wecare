import styles from "./desired.module.scss";
import edit from "../../public/assets/images/edit.svg";
import Image from "next/image";
import { FC } from "react";
const Desired: FC = () => {
  return (
    <>
      <div className={styles.main}>
        <div>
          <span>Desired Condition</span>
          <div>
            <Image src={edit} alt="Edit" width={17} height={17} />
            <span>Edit</span>
          </div>
        </div>
        <div className={styles.wrapper}>
          <span>Occupation</span>
          <div className={styles.occupation}>
            <div>Clinical laboratory technician</div>
            <div>Dental hygienist / dental technician</div>
            <div>Dispensing pharmacy office</div>
            <div>Childminder</div>
            <div>Operation manager </div>
            <div>others</div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <span>Work Location</span>
          <span>Chuo-ku, Hokkaido</span>
        </div>
        <div className={styles.wrapper}>
          <span>Work Style</span>
          <span>Full-time employee</span>
        </div>
        <div className={styles.wrapper}>
          <span>Facility form</span>
          <span>General hospital</span>
        </div>
        <div className={styles.wrapper}>
          <span>Annual income</span>
          <span>Eos sed ut laboris 10,000 yen</span>
        </div>
      </div>
    </>
  );
};

export default Desired;
