import PerfilFace from '../../../../public/img/faces.jpeg';
import PerfilFondo from '../../../../public/img/perfil.jpeg';
import InfoPerfil from '../../ui/InfoPerfil/InfoPerfil'
import Intereses from '../../ui/Intereses/Intereses'
import Redes from '../../ui/Redes/Redes'
import './imagePerfil.css';

function ImagePerfil() {
    return ( 
        <>
            <div className="container-image">
                <img src={PerfilFondo} className="background-image" alt="background" />
                <img src={PerfilFace} className="overlay-image" alt="overlay" />
                <div className='text-perfil'>
                    <div className='info-perfil'>
                        <InfoPerfil/>
                    </div>
                    <div className='intereces'>
                        <Intereses/>
                    </div>
                    <div className='redes'>
                        <Redes/>
                    </div>
                </div>
            </div>
        </>
     );
}
export default ImagePerfil;