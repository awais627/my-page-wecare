import Image from "next/image";
import styles from "./userinput.module.scss";
import { FC } from "react";
import edit from "../../public/assets/images/edit.svg";
interface UserProps {
  heading: string;
  img: string;
  imgText: string;
  qualification?: string;
}
const UserData: FC<UserProps> = ({ heading, img, imgText, qualification }) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div>{heading}</div>
          <div>
            <Image src={img} alt="edit" width={17} height={17} />
            <span>{imgText}</span>
          </div>
        </div>
        <div>
          {qualification ? (
            <>
              <div className={styles.headerData}>
                <span>Speech therapist(ST) 54321</span>
                <div>
                  <Image src={edit} alt="edit" width={17} height={17} />
                  <span>Edit</span>
                </div>
              </div>
              <div className={styles.headerData}>
                <span>Speech therapist(ST) 123456</span>
                <div>
                  <Image src={edit} alt="edit" width={17} height={17} />
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
