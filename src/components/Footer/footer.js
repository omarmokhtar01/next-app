import Image from "next/image";
import styles from './footer.module.css'
import { social_media } from "./data";

export default function Footer  ()  {

   return <div className={styles.container}>
   <div>©2023 HexaShop. All rights reseverd</div>

   <div className={styles.social}>
    
       {
         social_media.map((media => 
            <Image key={media.id}
            src={`/images/${media.name}.png`}
            width={30}
            height={30}
            className={styles.icon}
            alt="hexashop link"
             />
                ))
            }

   </div>

   </div>;
}