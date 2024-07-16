import { useState } from "react";
import "./form.css"
import Campo from '../campo';
import ListaOpciones from "../lista-opciones";
import BotonEnviar from "../boton";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props


    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })

    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingrese el nombre del individuo"
                required
                valor={nombre}
                actualizarValor={actualizarNombre} />
            <Campo
                titulo="Puesto"
                placeholder="Ingrese el puesto del individuo"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto} />
            <Campo
                titulo="Foto"
                placeholder="Ingrese URL de la foto a usar"
                required
                valor={foto}
                actualizarValor={actualizarFoto} />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos} />
            <BotonEnviar texto="Crear" />
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                titulo="Título"
                placeholder="Ingrese el nombre del equipo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo} />
            <Campo
                titulo="Color"
                placeholder="Ingrese el color del equipo (en hex)"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color" />
            <BotonEnviar texto="Registrar Equipo" />
        </form>
    </section>

}

export default Formulario