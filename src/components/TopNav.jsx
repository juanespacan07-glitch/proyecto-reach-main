import 'TopNav.css';

function TopNav() {
    const usuarioActual = "Marcus fenix";

    return(
        <header className='topnav'>
            <div className='buscador'>
                <input type="text" placeholder='Buscar...' className='input-buscar' />
            </div>
            <div className='perfil-usuario'>
                <span className='notificaciones'>🔔</span>
                <div className='avatar'>MP</div>
                <span className='nombre-usuario'>Hola, {usuarioActual}</span>
            </div>
        </header>
    );
}

export default TopNav