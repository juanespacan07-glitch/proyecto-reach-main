import './Sidebar.css';

function Sidebar (){
    const nombreAdmin = "Admin Cesde"

    return(
        <aside className='sidebar'>
            <div className='sidebar-logo'>
                <h2>{nombreAdmin}</h2>
            </div>
            <ul className='sidebar-menu'>
                <li className='activo'>panel general</li>
                <li>Usuarios</li>
                <li>productos</li>
                <li>configuracion</li>
            </ul>
            <div className='sidebar-footer'></div>
            <button className='btn-logout'>cerrar Sesion</button>

        </aside>
    )
}