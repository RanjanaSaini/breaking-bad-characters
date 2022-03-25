import React from 'react'
import Characteritem from './Charcteritem';

function Charactergrid({items , islodding}){
return(
islodding ? <h1>Is-Lodding ... </h1> : <section className='cards'>
{items.map(item=>(
 <Characteritem key={item.char_id} item={item}></Characteritem>
  
))}


</section>

)
} 

export default Charactergrid;
