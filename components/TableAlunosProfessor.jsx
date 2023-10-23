import { useEffect, useState } from "react"
import alunosDoProfessor from "@/data/alunosDoProfessor"
import AlunoDaTurma from "./AlunoDaTurma"

export default ({ professor, atualizar }) => {
    const [alunos, setAlunos] = useState([])
    useEffect(() => {
        if (professor == undefined) return
        async function alunos() {
            let alunosData = await alunosDoProfessor(professor.disciplina)
            setAlunos(alunosData)
            console.log(alunosData)
        }
        alunos()
    }, [professor])


    return (
        <div>
            <div className="titulo">Alunos</div>
            <div className="flex flex-col">
                {alunos.map(aluno => {
                    return <AlunoDaTurma atualizar={() => atualizar()} aluno={aluno} professor={professor} />
                })}
            </div>
        </div>
    )
}