
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
            <div className="titulo">
                <div>
                    Alunos
                </div>
                <button className="w-1/4 border-l-branco " 
                onClick={() => setRelatorio(true)}>
                    Gerar Relatório
                </button>
                {relatorio &&
                    <div className="fixed flex justify-center items-center top-0 right-0 left-0 bottom-0">
                        <BoletimAluno aluno={aluno}></BoletimAluno>
                    </div>
                }
            </div>
            <div  className="flex flex-col">
                {disciplinas.map(disciplina => {
                    return <div className="flex">
                        <div className="linha">{disciplina.nome}</div>
                        <div className="linha">
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
                        <div className="linha">{disciplina.cargaHoraria}</div>
                        <div className="linha">{disciplina.professor}</div>
                    </div>
                })}
            </div>
        </div>
    )
}