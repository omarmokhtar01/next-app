import Image from 'next/image'
import styles from '../page.module.css'
import home from '/public/images/home.svg'

export default function About  ()  {

    return <div className={styles.container}>

      <div className={styles.imageContaner} >
                <Image 
                style={{borderRadius :'10px'}}
                className={styles.postImage}
               width={500}
               height={400}
                src={'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                alt='sssss'
                // fill={true}
                />
       </div>

    <div >
    <h1 style={{marginBottom : "18px"}}>WHY CHOOSE US</h1>
    <p >Our consulting agency provides consulting, ideas, and resources for people working to create social change. We bring the right people together to challenge established thinking and drive transformation. We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage.
    . Online shopping has become increasingly popular due to the convenience and ease it offers. </p>
    </div>
   

  </div>
}
