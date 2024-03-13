import { FaCog } from 'react-icons/fa'; // Importar el icono de tuerca desde react-icons
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import './header.css';

function Header() {
    return ( 
        <>
            <section className='Header'>
                <div className='container-left'>
                    <h2 className='text-title'>Campus<b>Link</b></h2>
                    <Input tipo="text" placeholder="Buscar" altura={35} ancho={40} />
                    <Button className="menu-button" size="10" size2="38" borderRadius="3px" color="#C5C5C5" colorText="#000000">Inicio</Button>
                    <Button className="menu-button" size="10" size2="38" borderRadius="3px" color="#C5C5C5" colorText="#000000">Grupos</Button>
                    <Button className="menu-button" size="10" size2="38" borderRadius="3px" color="#C5C5C5" colorText="#000000">Articulos</Button>
                    <Button className="menu-button" size="14" size2="38" borderRadius="3px" color="#C5C5C5" colorText="#000000">Comunicados</Button>
                </div>
                <div className='container-right'>
                    <Button size="70" size2="38" borderRadius="3px" color="#C5C5C5" colorText="#000000">Mi Perfil</Button>
                    <Button size="20" size2="38" borderRadius="3px" color="#C5C5C5" colorText="#000000">
                        <FaCog className='engranaje' /> {/* Reemplazar la etiqueta <img> con el icono de tuerca */}
                    </Button>
                </div>
            </section>
        </>
     );
}
export default Header;
