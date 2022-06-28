import Image from "next/image";
import styles from "../../styles/mypage/userinput.module.scss";
import { FC } from "react";
import edit from "../../public/mypage/edit.svg";
interface UserProps {
  heading: string;
  img: string;
  imgText: string;
  qualification?: any;
}
const UserData: FC<UserProps> = ({ heading, img, imgText, qualification }) => {
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
        <div>
          {qualification ? (
            <>
              <div className={styles.headerData}>
                <div>Speech therapist(ST) 54321</div>
                <div>
                  <Image src={edit} alt="edit" width={20} height={20} />
                  <span>Edit</span>
                </div>
              </div>
              <div className={styles.headerData}>
                <div>Speech therapist(ST) 123456</div>
                <div>
                  <Image src={edit} alt="edit" width={20} height={20} />
                  <span>Edit</span>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
export default UserData;
