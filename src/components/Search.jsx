import React ,{useState} from 'react';


function Search ({getQuery}){
const[set , isset] = useState('')

const handelchange = (qry)=>{
    isset(qry)
    getQuery(qry)

}
console.log(getQuery)


return(
<section className="search">
<form>
<input type='text'className='form-control'placeholder='search charcter'
value={set}onChange={(event)=>handelchange(event.target.value)}autoFocus>

</input>

</form>

</section>

)

}

export default Search