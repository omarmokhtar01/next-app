import Image from 'next/image'
import styles from './page.module.css'
import home from '/public/images/home.svg'

export default function Home() {
  return ( 
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your Best Online Shop destnation</h1>
        <p className={styles.desc} >Online Shopping is defined as the act of buying products or services over the internet. It is a form of electronic commerce which allows consumers to directly buy goods or services from a seller without an intermediary service. </p>
        <button className={styles.button}  >Shop Now</button>
      </div>


      <div  className={styles.col} >
        <Image src={home} className={styles.img} alt='home image' />
      </div>

    </div>
  )
}
