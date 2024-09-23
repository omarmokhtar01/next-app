// "use client"
import Footer from '@/components/Footer/footer'
import './globals.css'
import { Inter , Lalezar , Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import { ThemeProvider } from '@/context/ThemeContext'

const bodyFont = Montserrat({ 
  subsets: ['latin'] ,
  weight : ['600']})

const inter = Inter({ subsets: ['latin'] })
const lalezar = Lalezar({ 
  subsets: ['arabic'] ,
  weight : ['400']})

export const metadata = {
  title: 'Hexa Shop',
  description: 'Online Shopping is defined as the act of buying products or services over the internet.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={bodyFont.className}>

      <ThemeProvider>

        <div className='container'>
          <Navbar /> 
          
          {children}
          <Footer />
        </div>
      </ThemeProvider>
      
      </body>
    
      
    </html>
  )
}


 {/* <h1 className={lalezar.className}>ساره ايهاب </h1> */} 
     {/* <div className='FullHeight'></div> */}
 {/* كل الصفحات الي موجوده اسمها chlidren */}

//  <ThemeProvider></ThemeProvider> عشان سواء دارك او لايت تسمع في الموقع كلو