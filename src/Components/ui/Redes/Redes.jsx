import './redes.css'
import Instagram from '../../../../public/img/instagram.png'
import Facebook from '../../../../public/img/facebook.png'
import X from '../../../../public/img/X.png'
function Redes() {
    return ( 
        <>
            <p><img className='image' src={Instagram} />@JoannaRose</p>
            <p><img className='image' src={Facebook}/>/JoannaRose</p>
            <p><img className='image'  src={X}/>@JoannaRose</p>
        </>
     );
}

export default Redes;