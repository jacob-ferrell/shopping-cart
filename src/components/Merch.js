import '../styles/Merch.css'

const Merch = props => {
{/* const merch = [
    {
        name: ,
        price: ,
        image:
    },
    {
        name: ,
        price: ,
        image:
    },
    {
        name: ,
        price: ,
        image:
    },
    {
        name: ,
        price: ,
        image:
    },
    {
        name: ,
        price: ,
        image:
    },
    {
        name: ,
        price: ,
        image:
    },
    {
        name: ,
        price: ,
        image:
    },
    {
        name: ,
        price: ,
        image:
    },
    {
        name: ,
        price: ,
        image:
    },
    {
        name: ,
        price: ,
        image:
    },
]; */}
 
    
    return (
        <div className='merch'>
            <div className='merch-image-container'>
                <img className='merch-image' src={props.image}></img>
            </div>
            <div className='merch-name'>{props.name}</div>
            <div className='merch-price'>{'$' + props.price}</div>
            <button data-itemid={props.itemId} onClick={props.addToCart}
            className='add-to-cart'>Add To Cart</button>
        </div>
    );
}

export default Merch;