export const getStaticPaths = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(listing => {
        return{
            params:{ id: listing.id.toString()}
        }
    })
    return {
        paths,
        fallback:false
    }
    
}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data =await res.json();

    return{
        props:{listing:data}
    }
}


const Details = ({listing}) => {
    return ( 
        <>
            <h2>Details page</h2>
            <h3>{listing.name}</h3>
            <p>{listing.email}</p>
            <p>{listing.website}</p>
            <p>{listing.address.city}</p> 
        </>

     );
}
 
export default Details;