import { FaCheck, FaImage, FaCalendarAlt, FaPen } from 'react-icons/fa'; // Importa los iconos necesarios
import Input from '../../ui/Input/Input';
import Post from '../../ui/Post/Post';
import './createPost.css';
import Face from '../../../../public/img/faces.jpeg';
import Perfil from '../../../../public/img/perfilH.jpeg';
import PostImage from '../../../../public/img/post.jpeg';

function CrearPublicacion() {
    return (
        <>
            <section className="container-post">
                <div className='container-crear'>
                    <img className='img-crear' src={Face} alt="Face" /> {/* Mantenemos la imagen de Face */}
                    <Input tipo="text" placeholder="Crear publicacion" altura={50} ancho={75} />
                    <button className='button-check'><FaCheck className='img-check' /></button>
                </div>
                <div className='container-botones'>
                    <button className='button1'><FaImage className='img-create-post' />Contenido multimedia</button>
                    <button className='button2'><FaCalendarAlt className='img-create-post2' />Evento</button>
                    <button className='button3'><FaPen className='img-create-post' />Escribir Articulo</button>
                </div>
                <Post image1={Perfil} text={'Didier Mendoza'} text2={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'} image2={PostImage} number={10} number2={0} number3={2} />
                <Post image1={Perfil} text={'Didier Mendoza'} text2={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'} image2={PostImage} number={10} number2={0} number3={2} />
                <Post image1={Perfil} text={'Didier Mendoza '} text2={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'} image2={PostImage} number={10} number2={0} number3={2} />
            </section>
        </>
    );
}
export default CrearPublicacion;