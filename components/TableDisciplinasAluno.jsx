
import { GetDataId } from "@/pages/api/hello";
import { useEffect, useState } from "react"
import BoletimAluno from "./BoletimAluno";

export default ({ aluno }) => {
    const [disciplinas, setDisciplinas] = useState([]);
    const [mostrarNotas, setMostrarN] = useState(false);
    const [relatorio, setRelatorio] = useState(false);
    useEffect(() => {
        getTurma()
    }, [10000])

    async function getTurma() {
        setDisciplinas((await GetDataId(aluno.turma.id, "turma")).disciplinas);
    }

    return (
        <div>
            <div>
                <div>
                    Alunos
                </div>
                <button onClick={() => setRelatorio(true)}>
                    Gerar Relatório
                </button>
                {relatorio &&
                    <div className="fixed flex justify-center items-center top-0 right-0 left-0 bottom-0">
                        <BoletimAluno aluno={aluno}></BoletimAluno>
                    </div>
                }
            </div>
            <div>
                {disciplinas.map(disciplina => {
                    return <div>
                        <div>{disciplina.nome}</div>
                        <div>
                            <div onClick={() => setMostrarN(true)}>
                                Notas
                            </div>
                            {mostrarNotas &&
                                <div>
                                    {aluno.provas.map(prova => {
                                        if (prova.disciplina == disciplina) {
                                            return <div>
                                                <div>{prova.nota}</div>
                                            </div>
                                        }
                                    })}
                                </div>
                            }
                        </div>
                        <div>{disciplina.cargaHoraria}</div>
                        <div>{disciplina.professor}</div>
                    </div>
                })}
            </div>
        </div>
    )
}