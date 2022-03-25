import React , {useState , useEffect} from 'react';
import Header from './components/Header';
import Charactergrid from './components/Charactergrid';
import './App.css';
import Search from './components/Search';
import {Routes , Route } from 'react-router-dom';


function App() {
const [items,setitems]=useState([])
const [islodding , setisloded] = useState(true)
const [query , setquery] = useState('')

const q = function (qry){
return(setquery(qry))
}

useEffect(()=>{

  async function data(){
    return (await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)).json();
    }
    data().then((respone)=>{
      
      // console.log(respone)
      setitems(respone);
      setisloded(false);
    
    
    }).catch((error)=>{
      console.log(error)
    })
    },[query]

)
return(
<>
<Header />

<Routes>

<Route path='/' element={ <> <Search getQuery = {q}/> <Charactergrid  items={items}  islodding={islodding} /> </>} >
</Route>
<Route path='/name/:char_id' element={<Profile />}></Route>
{/* <Redirect to ={'/'} /> */}

</Routes>

</>
 )
};

export default App;
