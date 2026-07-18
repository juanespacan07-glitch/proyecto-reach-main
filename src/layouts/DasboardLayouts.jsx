import './DashboardLayouts.css';
import Sidebar from '../components/siderbar';
import TopNav from ' ../components/TopNav';

function DashboardLayouts(){
    return(
    <div className='dashboard-contenedor'>
        <sidebar />
        <div className='dashboard-derecha'>
            <TopNav />
            <main className='dashboard-contenido'>
                <h1>Resumen General</h1>
                <p>Bienvenido al sistema, mas cosas pronto...</p>
                <div className='tarjeta-prueba'>
                    <h3>Ventas del dia</h3>
                    <h2>$ 1,250 USD</h2>
                </div>
            </main>
        </div>
    </div>
    );
}
export default DashboardLayouts;