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
            <div>Professores
                <button onClick={() => setMostrarCadastro(true)}>+</button>
            </div>
            <div>
                {professores.map(professor => {
                    return <DisciplinaProfessor professor={professor} disciplinas={disciplinas} />
                })}
            </div>
            {mostrarCadastro &&
                <ModalCadastro post={obj => post(obj)}></ModalCadastro>}
        </div>
    )
}