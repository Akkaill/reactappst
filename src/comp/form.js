import { useState, useEffect } from 'react'
import './ill.css'

const Formcomp = (Newitem) => {
    const [Name, setName] = useState('')
    const [Num, setNum] = useState('')
    const [Valid, setValid] = useState(false)

    const ee = (e) => {
        setName(e.target.value)
    }
    const abc = (e) => {
        setNum(e.target.value)
    }
    const save = (e) => {
        e.preventDefault()
        const saveDat = {
            name: Name,
            mon: Number(Num)
        }
        Newitem.Onadd(saveDat)
        setName('')
        setNum('')
    }

    useEffect(() => {
        const CheckNN = Name.trim().length > 0 && Num !== 0
        setValid(CheckNN)

    }, [Name, Num])
    return (
        <div className="form">
            <form onSubmit={save} >
                <div >
                    <label >รายการ</label>
                    <input type="text" placeholder="input list pls" onChange={ee} value={Name} />
                </div>
                <div >
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="input amount pls" onChange={abc} value={Num} />
                </div>
                <button className='button' type="submit" disabled={!Valid}>ADD </button>
            </form>
        </div>

    )
}
export default Formcomp