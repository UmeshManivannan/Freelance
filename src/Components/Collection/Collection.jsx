import React from 'react'
import './Collection.css'
import dropdown from '../Assets/dropdown_icon.png'


const Collection = () => {
  return (
    <>
    <div className="shop-category-indexsort">
         <p>
          <span>Showing 1-12</span> out of 36 products
         </p>
         <div className="shop-category-sort">
          Sort by <img src={dropdown} alt="" />
         </div>
      </div>
    <div className='grid-gallery'>
        <div className="items">
          <img src="https://images.unsplash.com/photo-1676145584402-b01927a143fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D" alt="" /> 
        </div>
        <div className="items">
          <img src="https://images.unsplash.com/photo-1616847220575-31b062a4cd05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww" alt="" /> 
        </div>
        <div className="items">
          <img src="https://images.unsplash.com/photo-1615240945501-58d2563db9e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" /> 
        </div>
        <div className="items">
          <img src="https://images.unsplash.com/photo-1712652516708-27c49434e802?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D" alt="" /> 
        </div>
        <div className="items">
          <img src="https://plus.unsplash.com/premium_photo-1689371952452-c88c72464115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" /> 
        </div>
        <div className="items">
          <img src="https://plus.unsplash.com/premium_photo-1690347839113-b5db143123b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" /> 
        </div>
        <div className="items">
          <img src="https://images.unsplash.com/photo-1702550490406-d37bf959a999?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" /> 
        </div>
        <div className="items">
          <img src="https://plus.unsplash.com/premium_photo-1689536143095-eaa89c407aa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D" alt="" /> 
        </div>
        <div className="items">
          <img src="https://images.unsplash.com/photo-1678713616279-70dc854f387a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" /> 
        </div>
        <div className="items">
          <img src="https://images.unsplash.com/photo-1712652517887-4af64ccbab5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" /> 
        </div>
        <div className="items">
          <img src="https://images.unsplash.com/photo-1639497350985-cddf9f433a45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" /> 
        </div>
        <div className="items">
          <img src="https://images.unsplash.com/photo-1712652518165-496d815cbea5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" /> 
        </div>
        
      
    </div>
    </>
  )
}

export default Collection

/*
 {data.map((item,i)=>{
                return <Item image={item.image} />
            })}

<div className="items">
          <img src="https://images.unsplash.com/photo-1712652516708-27c49434e802?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D" alt="" /> 
        </div>
        <div className="items">
          <img src="https://plus.unsplash.com/premium_photo-1689536143095-eaa89c407aa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHx3b21lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D" alt="" /> 
        </div>
*/
