import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const [showBtn, setshowBtn] = useState(true);

  const persons=[
    {name:"Satyanshu",
      age:22,
      lover:"Chess"
    },
     {name:"Manish",
      age:22,
      lover:"Cricket"
    },
     {name:"Gurusharan",
      age:22,
      lover:"Pubg"
    },
    {name:"Muskaan",
      age:22,
      lover:"Mafia-42"
    },
  ]
 

  return (
   <section className='bg-gray-200 w-screen h-screen p-10'>
    <h1 className='text-8xl font-bold text-center '>Lovers</h1>
    <div className='bg-gray-200 w-full h-[80vh] flex gap-10 p-10 '>
      {persons.map((p)=>(
      
       <div className= ' bg-slate-800 text-white rounded-lg w-[400px] h-[200px]  p-10 hover:bg-cyan-700 hover:scale-110 hover:text-xl hover:rounded-4xl transition-all duration-300 ' >
       <div>
          <h2 className=' font-bold'> Name : {p.name}</h2>
          <h3 className=' font-bold'> Age : {p.age}</h3>
            <h4 className=' font-bold'> Love : <span className='text-pink-500'>{p.lover}</span></h4>
           
       </div>
       </div>
      ))}


    </div>


   </section>
  )
}

export default App
