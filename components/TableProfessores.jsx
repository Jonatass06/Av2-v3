import { PostData } from "@/pages/api/hello"
import ModalCadastro from "./ModalCadastro"
import DisciplinaProfessor from "./DisciplinaProfessor"

export default ({ professores, disciplinas }) => {

    const [mostrarCadastro, setMostrarCadastro] = useState(false);

    function post(obj) {
        PostData(obj, "professor")
    }
    return (
        <div>
            <div className="titulo">Professores
                <button className="botao" onClick={() => setMostrarCadastro(true)}>+</button>
            </div>
            <div  className="flex flex-col">
                {professores.map(professor => {
                    return <DisciplinaProfessor professor={professor} disciplinas={disciplinas} />
                })}
            </div>
            {mostrarCadastro &&
                <ModalCadastro post={obj => post(obj)}></ModalCadastro>}
        </div>
    )
}