import { useEffect, useState } from 'react';
import jsonData from '../components/blog_posts.json';
import { itemShop } from '../utilities/ApiFunction';
import { useLoaderData } from 'react-router-dom';
import ItemImage from '../components/ItemImage'

export async function loader() {
  const items = await itemShop();
  return { items };
}

const ItemShop = () => {
  const { items } = useLoaderData()
  const [itemNumber, setItemNumber] = useState()

  return (
    <div className='itemshop-bg'>
    <div className='item-section'>
    
    {items.data.featured.entries.slice(length).map((item, index) => (
      <div className='full-item-img' key={index}>
       
        <ItemImage 
          img={items.data.vbuckIcon}
          items={item}
          index={index}
        />
      </div>
    ))}
      </div>
      </div>
    );
}
 
export default ItemShop;