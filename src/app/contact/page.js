import Image from 'next/image';
import styles from './page.module.css'
import contct from '/public/images/contact.svg'

export default function contact () {
    return (
         <div className={styles.container}>
     <div  className={styles.col} >
        <Image src={contct} className={styles.img} alt='contact image' />
      </div>
      <div className={styles.col}>
        <h4 className={styles.title}>Contact Us</h4>
    
       

        <input className={styles.inputt}  type='name' placeholder='Name'/>
        <input className={styles.inputt}   type='email' placeholder='Email'/>
        <input className={styles.inputt}   type='phone' placeholder='Phone'/>

        <button className={styles.button}  >Submit</button>
      </div>
    </div>);
}
