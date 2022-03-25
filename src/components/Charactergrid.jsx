import React from 'react'
import Characteritem from './Charcteritem';

function Charactergrid({items , islodding}){
return(
islodding ? <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
    <h1> I am centered </h1>
</div>  : <section className='cards'>
{items.map(item=>(
 <Characteritem key={item.char_id} item={item}></Characteritem>
  
))}


</section>

)
} 

export default Charactergrid;
