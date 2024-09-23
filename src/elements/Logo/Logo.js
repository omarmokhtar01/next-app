import Link from "next/link";
import { Montserrat } from 'next/font/google'
import styles from "./logo.module.css"

const logoFont = Montserrat({ 
    subsets: ['latin'] ,
    weight : ['400']})

export default function Logo() {
    return (
        <Link href="/" className={ `${styles.logo}  ${logoFont.className} ` } >HEXASHOP</Link>
    );
}
