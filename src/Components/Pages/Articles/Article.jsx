import './article.css'
import CardArticulo from '../../ui/CardArticle/CardArticle'
function Articulos() {
    return ( 
    <>
        <section className='container-articulo'>
            <div className='container-articulos'>
                <h2 className='sin-margin'>Artículos recientes</h2>
                <p>Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.</p>
                <CardArticulo title1={'Margarita Olivera'} text={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'}/>
                <CardArticulo title1={'Jesus Alberto'} text={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'}/>
            </div>
        </section>
    </>
    );
}

export default Articulos;