
import { useContext } from "react"
import DATA1 from "../Data/DB"
import './checkdat.css'



const CheckValue = () => {
    const { host, pass } = useContext(DATA1)
    const Design = { color: "black", textAlign: "center" ,margin :"20px 20px"}
    const formatnum = (n)=>{
        return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
    }
    return (
        <div >

            <p style={Design}> <h3>เงินคงเหลือ  : {formatnum(host - pass)}ฺB </h3></p>
            <div className="con">
                <div>
                    <p className="plus"><h4>ยอดรายรับ : {formatnum(host)}ฺB</h4></p>

                </div>
                <div>
                    <p className="minus"><h4>ยอดรายจ่าย : {formatnum(pass)}B</h4></p>

                </div>
            </div>

        </div>

    )

}

export default CheckValue

