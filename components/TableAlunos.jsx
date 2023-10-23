import contem from "@/functions/contem"
import { PostData, PutData } from "@/pages/api/hello"
import ModalCadastro from "./ModalCadastro"
import { useState } from "react";

export default ({ alunos, turmas }) => {

    const [mostrarCadastro, setMostrarCadastro] = useState(false);
    function post(obj) {
        PostData(obj, "aluno")
    }
    function put(aluno, value) {
        aluno.turma = { "id": parseInt(value) };
        PutData(aluno, "aluno")
    }
    return (
        <div>
            <div>
                Alunos
                <button onClick={() => setMostrarCadastro(true)}>+</button>
                </div>
            <div>
                {alunos.map(aluno => {
                    return <div>
                        <div>{aluno.nome}</div>
                        <select onChange={e => put(aluno, e.target.value)}>
                            {turmas.map(turma => {
                                if (contem(aluno, turma.alunos)) {
                                    return <option value={turma.id} selected>{turma.id}</option>
                                }
                                return <option value={turma.id}>{turma.id}</option>
                            })}
                        </select>
                    </div>
                })}
            </div>
            {mostrarCadastro &&
                <ModalCadastro post={obj => post(obj)} />
            }
        </div>
    )
}