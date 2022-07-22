

import { v4 as uuidv4 } from 'uuid';
import './ill.css'
import Lol from './main';


const Check = (prop) => {

    const { dat } = prop



    return (
        <>
            <div className="list">
                {dat.map((m) => {
                    return <Lol {...m} key={uuidv4()} />

                })}
                

          

            </div>
        </>
    )

}

export default Check
