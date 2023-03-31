import Link from 'next/link';
import styles from '../../styles/Listings.module.css'

export const getStaticProps = async () => {
    // try {
        const res =  await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        
      
        return {
            props:{listings:data}
            
        }
        
      
    // } catch (error) {
        // console.log(error)
        
    // }
 





    

}

const Listings = ({listings}) => {
    return ( 
        <div className="content">
            <h2>All Listings</h2>
            {listings.map(list => (
                <Link  href={'/listings/' + list.id}  key={list.id} className={styles.single}>
               <h3>{list.name}</h3>
                </Link>
            ))}
        </div>
     );
}
 
export default Listings;