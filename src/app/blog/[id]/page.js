import Image from 'next/image';
import styles from './page.module.css'
import async from './../page';


async function getData(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  export default async function post ({params}) {

    const data = await getData(params.id)
    console.log(params)
    console.log(data.title)


    return (
   <div className={styles.container}>

        <header className={styles.header} >

            <div className={styles.info} >
                <div className={styles.title} >{data.title}</div>
                <div className={styles.desc} >
                {data.description}
                 </div>
            </div>
            <div className={styles.imageContaner} >
                <Image 
                className={styles.postImage}
            //    width={350}
            //    height={250}
                src={data.thumbnail}
                alt='sssss'
                fill={true}
                />
            </div>

        </header>

        <div className={styles.content} >
        
            <div className={styles.gallery} >
            {
                data.images.map(image=>( 
                 <Image 
                 key={data.id}
                src={image}
                alt='sssss'
                width={180}
                height={180}
                />))
            }

            </div>

             <p className={styles.text}>Nextjs grid system uses a series of containers, rows, and columns to layout and aligns content. It's built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.
            Nextjs grid system uses a series of containers, rows, and columns to layout and aligns content. It's built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.
            Nextjs grid system uses a series of containers, rows, and columns to layout and aligns content. It's built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.
            Nextjs grid system uses a series of containers, rows, and columns to layout and aligns content. It's built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.
            Nextjs grid system uses a series of containers, rows, and columns to layout and aligns content. It's built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.
           
            
            </p>
        </div>



        </div>

    )
}


 