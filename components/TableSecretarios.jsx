import ModalCadastro from "./ModalCadastro"

export default  function TableSecretarios({ secretarios }) {

    const [mostrarCadastro, setMostrarCadastro] = useState(false);
    function post(obj) {
        PostData(obj, "secretario")
    }

    return (
        <div>
            <div className="titulo">
                Secretarios
                <button className="botao" onClick={() => setMostrarCadastro(true)}>+</button>
            </div>
            <div  className="flex flex-col">
                {secretarios.map(secretario => {
                    return <div key={secretario.id}  className="flex">
                        <div className="linha">{secretario.nome}</div>
                        <div className="linha">{secretario.qtdBoletins}</div>
                    </div>
                })}
            </div>
            {mostrarCadastro &&
                <ModalCadastro post={obj => post(obj)}></ModalCadastro>}

        </div>
    )
}