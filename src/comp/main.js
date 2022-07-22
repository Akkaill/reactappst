
import './ill.css'
import PropTypes from 'prop-types';




const Lol = (pp) => {
    const { name, mon } = pp 
    const checknum = (mon < 0) ? "nah don't waste money" : "get it more"
    const plus = (mon < 0) ? "-" : "+"
   

    return (
        <>
            <ul className={checknum}>
                <li>{name}<span>{checknum}</span><span>{plus}{Math.abs(mon)}</span></li>
            </ul>
        </>
    )
}
Lol.propTypes = {
    name: PropTypes.string.isRequired,
    mon: PropTypes.number.isRequired
}

export default Lol