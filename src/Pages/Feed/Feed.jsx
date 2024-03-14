import '../Feed/feed.css'
import Header from '../../Components/Pages/Header/Header'
import CardPerfil from '../../Components/Pages/FeedProfile/FeedProfile'
import CrearPublicacion from '../../Components/Pages/CreatePost/CreatePost'
import Articulos from '../../Components/Pages/Articles/Article'

function Feed() {
    return ( 
        <>
            <Header/>
            <section className='container-feed'>
                <CardPerfil/>
                <CrearPublicacion/>
                <div className='container-article'>
                    <Articulos/>
                </div>
            </section>
        </>
     );
}

export default Feed;