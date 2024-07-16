import "./colaboradores.css"
import { IoIosCloseCircle, IoIosHeartEmpty, IoIosHeart } from "react-icons/io";


const Colaborador = (props) =>{

    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, darLike} = props

    return <div className="colaborador">
        <IoIosCloseCircle className="eliminar" color={colorPrimario} onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={ {backgroundColor: colorPrimario} }>
            <img src={foto} alt={nombre} />
        </div>
        <div className="informacion">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <IoIosHeart color="red" onClick={() => darLike(id)}/> : <IoIosHeartEmpty onClick={() => darLike(id)}/>}  
        </div>
    </div>
}

export default Colaborador