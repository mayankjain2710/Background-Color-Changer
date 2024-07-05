import { useState } from "react"

function App() {
 const [color,setcolor] = useState("pink")
  return (
    <>
    <div className="w-full h-screen duration-100"
    style={{backgroundColor: color }}>
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 "
     >
         <div className="flex flex-wrap justify-center gap-3 bg-white rounded-3xl px-4 py-2
         ">
          <button
          className="px-3 bg-red-600 rounded-3xl text-white"
          onClick={() => {setcolor("red")}}>Red</button>
          <button
          className="px-3 bg-black rounded-3xl text-white"
          onClick={() => {setcolor("black")}}>Black</button>
          <button
          className="px-3 bg-blue-700 rounded-3xl text-white"
          onClick={() => {setcolor("blue")}}>Blue</button>
           <button
          className="px-3 bg-yellow-300 rounded-3xl text-white"
          onClick={() => {setcolor("yellow")}}>Yellow</button>
           <button
          className="px-3 bg-green-500 rounded-3xl text-white"
          onClick={() => {setcolor("green")}}>Green</button>
           <button
          className="px-3 bg-purple-400 rounded-3xl text-white"
          onClick={() => {setcolor("purple")}}>Purple</button>
         </div>
     </div>
    </div>
        
    </>
  )
}

export default App
