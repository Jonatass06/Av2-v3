import ModalCadastro from "./ModalCadastro"

export default ({ secretarios }) => {

    const [mostrarCadastro, setMostrarCadastro] = useState(false);
    function post(obj) {
        PostData(obj, "secretario")
    }

    return (
        <div>
            <div>Secretarios
                <button onClick={() => setMostrarCadastro(true)}>+</button>
            </div>
            <div>
                {secretarios.map(secretario => {
                    return <div>
                        <div>{secretario.nome}</div>
                        <div>{secretario.qtdBoletins}</div>
                    </div>
                })}
            </div>
            {mostrarCadastro &&
                <ModalCadastro post={obj => post(obj)}></ModalCadastro>}

        </div>
    )
}