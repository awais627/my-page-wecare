import styles from "./desired.module.scss";
import edit from "../../public/assets/images/edit.svg";
import Image from "next/image";
const Index = () => {
  return (
    <>
      <div className={styles.main}>
        <div>
          <span>Desired Condition</span>
          <div>
            <Image src={edit} alt="Edit" width={20} height={20} />
            <span>Edit</span>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div>Occupation</div>
          <div className={styles.occupation}>
            <div className={styles.not}>Clinical laboratory technician</div>
            <div>Dental hygienist / dental technician</div>
            <div>Dispensing pharmacy office</div>
            <div>Childminder</div>
            <div>Operation manager </div>
            <div>others</div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div>Work Location</div>
          <div>Chuo-ku, Hokkaido</div>
        </div>
        <div className={styles.wrapper}>
          <div>Work Style</div>
          <div>Full-time employee</div>
        </div>
        <div className={styles.wrapper}>
          <div>Facility form</div>
          <div>General hospital</div>
        </div>
        <div className={styles.wrapper}>
          <div>Annual income</div>
          <div>Eos sed ut laboris 10,000 yen</div>
        </div>
      </div>
    </>
  );
};

export default Index;
