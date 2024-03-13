import './infoPersonal.css'
import Icon1 from '../../../../public/img/imgperfil.1.jpeg'
import Icon2 from '../../../../public/img/imgperfil2.jpeg'

function InfoPersonal() {
    return ( 
        <>
            <section className="container-mi-info">
                <div className="acerca-de-mi">
                    <h3 className='sinMargen'>Acerca de mí</h3>
                    <p>Figma ipsum component variant main layer. Reesizing undo figjam align inspect. Ipsum layer stroke slice frame italic background. Bold boolean duplicate layout overflow. Scale draft ipsum main background figma selection. Star ellipse comment figma content draft. Figma main main arrange strikethrough. List slice pixel ellipse figjam text. Arrow line variant boolean device star hand comment layer. Device shadow pixel comment scale figjam bold library font group. Arrow style slice reesizing underline prototype. Comment move underline arrange style slice move reesizing pixel.</p>
                </div>
                <div className="amigos">
                    <h3 className='sinMargen'>Amigos</h3>
                    <div className='text-container'>
                        <h5>123 amigos</h5> <a className='enlace' href='#'>buscar amigos</a>
                    </div>
                    <div className='container-perfiles'>
                        <div className='container-perfiles-icons'>
                            <img className='perfil-icon' src={Icon1}/>
                            <div className='container-info-perfiles'>
                                <h4 className='sinMargen'>Margarita Hernandez</h4>
                                <h5 className='sinMargen'>Ing. software</h5>
                            </div>
                        </div>
                        <div className='container-perfiles-icons'>
                            <img className='perfil-icon' src={Icon2}/>
                            <div className='container-info-perfiles'>
                                <h4 className='sinMargen'>Margarita olivera</h4>
                                <h5 className='sinMargen'>Ing. Sistemas </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
export default InfoPersonal;