const ItemImage = ( { items, index, img} ) => {


    return ( 
      <>
        {/* some items might not show in browser because of "items.newDisplayAsset" has nothing in it */}
        {items.newDisplayAsset ? (<>
          <img className='main-item-img' src={items.newDisplayAsset.materialInstances[0].images.Background}></img>
          <div className='item-details'>
            <div className='item-name'>{items.items[0].name}</div>
            <div className='price-line'>
              <div className='price'>{items.finalPrice}</div>
              <img className='vbucksImg' src={img}></img>
            </div>
          </div></>) : null}
      </>
     );
}
 
export default ItemImage;