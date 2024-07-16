import "./equipo.css"
import Colaborador from "../colaboradores"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, cambiarColor, darLike } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo = { borderColor: colorPrimario }

    return <>   {
        colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
            <input
                type='color'
                className="elegir-color"
                value={hexToRgba(colorPrimario, 0.6)}
                onChange={(evento) => {
                    cambiarColor(evento.target.value, id);
                }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) =>
                        <Colaborador datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            darLike={darLike} />)
                }
            </div>
        </section>} </>
}

export default Equipo