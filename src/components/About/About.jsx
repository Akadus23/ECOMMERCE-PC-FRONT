import style from './About.module.css'
import Carlos from './Carlos/Carlos'
import Davinson from './Davinson/Davinson'
import Fauter from './Fauter/Fauter'
import Marcos from './Marcos/Marcos'

export default function About() {
    return(
        <div className={style.container}>
            <h1 className={style.titulo}>Equipo de Desarrollo</h1>
            <br />
            <br />
            <div className={style.containerInfo}>
                <h2 className={style.nombres}>Marcos</h2>
                <br />
                <Marcos/>
                <br />
            </div>
            <div className={style.containerInfo}>
                <h2 className={style.nombres}>Davinson Villamizar</h2>
                <br />
                <Davinson/>
                <br />
            </div>
            <div className={style.containerInfo}>
                <h2 className={style.nombres}>Fauter</h2>
                <br />
                <Fauter/>
                <br />                
            </div>
            <div className={style.containerInfo}>
                <h2 className={style.nombres}>Carlos Valencia</h2>
                <br />
                <Carlos />
                <br />
            </div>
        </div>
    )
}