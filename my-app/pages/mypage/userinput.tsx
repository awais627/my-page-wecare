import Image from "next/image";
import styles from "../../styles/mypage/userinput.module.scss";
import edit from "../../public/mypage/edit.svg";
import { FC } from "react";
interface UserProps {
  heading: string;
}
const UserData: FC<UserProps> = ({ heading }) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div>{heading}</div>
          <div>
            <Image src={edit} alt="edit" width={20} height={20} />
            <span>Edit</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserData;
