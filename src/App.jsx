import {getDatabase,ref,set} from "firebase/database"
import { app } from "./firebase"
import './App.css'

function App() {
  const db= getDatabase(app)

  const putData = ()=>{
    set(ref(db,"users/atin"),{
      id:1,
      name:"atin Mondal",
      age:34
    });
  };

  return (
    <>
      <div className='flex justify-center items-center text-2xl font-bold'>firebase react app</div>
      <button  className="bg-slate-500 mx-auto text-blue-400" onClick={putData}>Put data</button>
    </>
  )
}

export default App
