import check from '../../../../public/img/comprobado.png'
import Face from '../../../../public/img/faces.jpeg'
import Perfil from '../../../../public/img/perfilH.jpeg'
import PostImage from '../../../../public/img/post.jpeg'
import Multimedia from '../../../../public/img/multimedia.png'
import Evento from '../../../../public/img/evento.png'
import Articulo from '../../../../public/img/articulo.png'
import Input from '../../ui/Input/Input'
import Post from '../../ui/Post/Post'
import './createPost.css'

function CrearPublicacion() {
    return ( 
        <>
            <section className="container-post">
                <div className='container-crear'>
                    <img className='img-crear' src={Face}/>
                    <Input tipo="text" placeholder="Crear publicacion" altura={50} ancho={75} />
                    <button className='button-check'><img className='img-check' src={check}/></button>
                </div>
                <div className='container-botones'>
                    <button className='button1'><img className='img-create-post' src={Multimedia}/>Contenido multimedia</button>
                    <button className='button2'><img className='img-create-post2' src={Evento}/>Evento</button>
                    <button className='button3'><img className='img-create-post' src={Articulo}/>Escribir Articulo</button>
                </div>
                <Post image1={Perfil} text={'Didier Mendoza'} text2={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'} image2={PostImage} number={10} number2={0} number3={2} />
                <Post image1={Perfil} text={'Didier Mendoza'} text2={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'} image2={PostImage} number={10} number2={0} number3={2} />
                <Post image1={Perfil} text={'Didier Mendoza '} text2={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'} image2={PostImage} number={10} number2={0} number3={2} />
            </section>
        </>
     );
}
export default CrearPublicacion;