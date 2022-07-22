import { useEffect, useState, useReducer } from 'react';
import './App.css'
import CheckValue from './comp/checkValue';
import Formcomp from './comp/form';
import Check from './comp/key';
import DATA1 from './Data/DB';



function App() {
  const Design = { color: "black", textAlign: "center" }
  /*const Checkmon =[
    {name:"เงินเดือน",mon:10000},
    {name:"เหล้า",mon:-100},
    {name:"เบียร์",mon:-300},
    {name:"น้ำมัน",mon:-1000}
   
    
  ]*/
  
  const [Items, SetIt] = useState([])
  const [Income, setIn] = useState(0)
  const [Outcome, setOut] = useState(0)
  const Addnew = (item) => {
    SetIt((prev) => {
      return [item, ...prev]

    })
  }
  useEffect(() => {
    const GetDATA = Items.map(e => e.mon)
    const Checkplus = GetDATA.filter(e => e > 0).reduce((all, e) => all += e, 0)
    const Checkminus = (GetDATA.filter(e => e < 0).reduce((all, e) => all += e, 0)) * -1
    setIn(Checkplus)
    setOut(Checkminus)

  }, [Items, Income, Outcome])
  const [Show, setshow] = useState(false)
  const reduce = (state, act) => {
    switch (act.type) {
      case "Show":
        return setshow(true)
      case "Hide":
        return setshow(false)
      
    }

  }
  const [result,dispatch]= useReducer(reduce,Show)
  return(
  <>
  <DATA1.Provider value={
    {
      host:Income,
      pass:Outcome
    }
  }>
    <div className="container">
      
      <h1 style={Design}>NOTE STATEMENT</h1>
      
      {Show&&<CheckValue/>}
      <div className="btn">
    <button onClick={()=>dispatch({type:"Show" })}>Check Statement</button>
    <button onClick={()=>dispatch({type:"Hide"})}>Close</button>
    </div>
    
      <Formcomp Onadd={Addnew} />
      <Check dat={Items} />
      
   
    

    
 
    </div>
    </DATA1.Provider>
  </>
 
  
  
  )
}

export default App;