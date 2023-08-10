import './CampoTexto.css'

const CampoTexto = (props) => {
    
    const placeholderModificada = `${props.placeholver}...`
    
    let valor = ''

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

    return (
        <div className="campo-texto">
        <label>
            {props.label}
        </label>
        <input onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto