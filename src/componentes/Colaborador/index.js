import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo }) => {
    return (<div className="colaborador">
            <div className='cabecalho'>
            <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h3>{nome}</h3>
                <h5>{cargo}</h5>
            </div>
        </div>)
}

export default Colaborador