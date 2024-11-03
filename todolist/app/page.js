"use client"

import React, { useState } from 'react';

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
//   const [color, setcolor] = useState("olive");
// 
//   const colorHandler = (i) => {
//     let r1 = Math.floor(Math.random()*256);
//     let r2 = Math.floor(Math.random()*256);
//     let r3 = Math.floor(Math.random()*256);
//    
//     setcolor(`rgb(${r1}, ${r2}, ${r3})`)
//   }

  // // Yeh Use krre hai jisse ki Aap submit kardo jab Title or description toh vo usko submit krne ke bad data erase na krde save rkhe 
  const submitHandler = (e) => {
    e.preventDefault() // iski help se aap ka data delete nahi hoga or save hojayega

    // console.log(title); // chaho toh console me dekh lo kahi ni ja raha data
    // console.log(desc);

    setmainTask([...mainTask, { title, desc }]); // Yaha par 3 bar dot isliye lgaya hai taki jab aap Task ko add kro or uske bad next task ko add kro toh previous wala task naa hate Screen se ya fir Data me se

    // lekin ab naye task ke liye purane wale ko hatana toh pdega na input tag me se input tag me se bhi erase ni hora hai preventdefault ki vjh se toh uske liye kutch ni bas title or description ko wapis empty bana do :

    setTitle("")
    setDesc("")


  }
  // Yaha par kya hua : ki i mtlb index hai har task ko apnne map ke through banaya h toh jitne task add hote jayege har task ki koi index hogi hai ki ni jaise 1st task index-1 2nd task index-2 iss tarike se , toh ab ussi index ko target kra h ki jis bhi task wale delete buttong ko aap press kroge ussi ke index pr rkhi huyi chizien delete hojayegi 
  // kaise? : splice ki help se , splice kya krta h ki kisi bhi array ke andr jitne bhi elements h usme se aap bas index bta do toh vo usko array me se dlt mar dega hata dega mtlb ki
  // toh apnne pura jo array tha maintask nam ka usko ek copytask ke andr liya or uspe splice chala diya or i pass krdiya ki jab bhi delete jis bhi i(index) ka delete button press ho usko splice krdena or fir baki ka bacha array setmainTask ke andr daldena khtm kaam simple...

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>


  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className='flex items-center justify-between mb-3'>
          <div className='flex  items-center justify-between ml-10 mr-10 w-1/2' >
            <h5 className='font-semibold text-2xl'>{t.title}</h5>
            <h6 className='font-semibold text-xl'>{t.desc}</h6>
          </div>
          <button
            //onclick ke andr delethandler ko directly call nahi kra hai vrna vo automatically chalta or koi bhi task show hi ni hota dlt hojata apne aap isliye function ke andr likha h
            onClick={() => {
              deleteHandler(i);
            }}

            className='bg-red-400 text-white rounded font-bold py-3 px-4'>Delete</button>
        </li>
      )
    })
  }

  return (
    <>
    <div >
      
      <h1 className='bg-black text-white p-5 text-5xl text-center font-bold'>TODO LIST</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 ml-60 py-2 px-10 rounded-2xl"
          placeholder='Enter Task Here'
          value={title} // Yaha value ke andr aapne title dal diya ab jo bhi UseState ke andr likha tha vohi permanently is input me dikhega lkn kyuki abhi useState khali h empty h toh vaha na toh kutch dikhega placeholder ke alava or na hi aap kutch likh skte ho 
          // Toh ab agr aapko likhna h uske andr kutch toh setTitle ka use krna pdega :
          // Abhi toh default Empty h Title toh apn OnChange lgayege: ki jab change kru ya kutch usme likhu tab kya kro vo krre h ab:
          onChange={(e) => {
            //console.log(e.target) jab aap e.target krte ho toh console me aapko btata h ki aap input tag ke andr kutch changes kr rhe ho 
            //ab agar input tag ke andr kutch likh kr show krna h toh uske liye e.target.value lgana pdega 
            //console.log(e.target.value) yeh pura show krega aapka har ek letter lkn Console me Toh ab isko hi apne ko input tag ke andr show krna h toh apn isko console me na likh kr setTitle me likh denge:
            setTitle(e.target.value)
          }}

        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 py-2 px-10  rounded-2xl"
          placeholder='Enter Description Here'
          // Same kaam idhr bhi kra hai on Change pr:
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value)
          }}
        />

        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded-3xl m-5 '>Add Task</button>


      </form>
      <hr />
      <div className='p-8 bg-black text-white m-7 rounded-3xl ' >
        <ul >
          {renderTask}
         
        </ul>
      </div>
      </div>
    </>
  )
}

export default page;