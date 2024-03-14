import Articulos from '../../Components/Pages/Articulos/Article'
import InfoPersonal from '../../Components/Pages/InfoPersonal/InfoPersonal'
import Header from '../../Components/Pages/Header/Header'
import InfoPerfil from '../../Components/Pages/imagePerfil/ImagePerfil'
import Post from '../../Components/ui/Post/Post'
import Perfiles from '../../../public/img/perfilH.jpeg';
import PostImage from '../../../public/img/post.jpeg'
import './perfil.css'

function Perfil() {
    return ( 
        <>
            <Header/>
            <section className='container-perfil'>
                <div className='container-perfil-left'>
                    <InfoPerfil/>
                    <InfoPersonal/>
                    <Post image1={Perfiles} title={'Margarita Olivera'} info={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'} image2={PostImage} number={10} number2={0} number3={2} />
                    <Post image1={Perfiles} title={'Margarita Olivera'} info={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'} image2={PostImage} number={10} number2={0} number3={2} />
                    <Post image1={Perfiles} title={'Margarita Olivera'} info={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'} image2={PostImage} number={10} number2={0} number3={2} />
                </div>
                <div className='container-perfil-right'>
                    <Articulos/>
                </div>
            </section>
        </>
     );
}

export default Perfil;