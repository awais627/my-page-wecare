import Image from "next/image";
import styles from "../../styles/mypage/userinput.module.scss";
import { FC } from "react";
interface UserProps {
  heading: string;
  img: string;
  imgText: string;
}
const UserData: FC<UserProps> = ({ heading, img, imgText }) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div>{heading}</div>
          <div>
            <Image src={img} alt="edit" width={20} height={20} />
            <span>{imgText}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserData;
