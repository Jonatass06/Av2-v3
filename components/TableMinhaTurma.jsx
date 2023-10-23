
import { useEffect, useState } from "react"
import alunosDaTurma from "@/data/alunosDaTurma"

export default ({ turma }) => {
    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        async function getAlunos() {
            const alunos = await alunosDaTurma(turma);
            console.log(alunos)
            setAlunos(alunos)
        }
        getAlunos()
    }, [turma])
    return (
        <div>
            <div>Minha Turma</div>
            <div>
                {
                    turma != undefined &&
                    <div>
                        <div>{turma.id}</div>
                        <div>
                            {alunos.map(aluno => {
                                return <div>
                                    <div>{aluno.nome}</div>
                                </div>
                            })}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}