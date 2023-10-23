import { useEffect, useState } from "react"
import disciplinasNaoTurma from "@/data/disciplinasNaoTurma"

export default ({turma, postDisciplina}) => {

    const[disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        if (turma == undefined) return
        async function getTurma() {
            setDisciplinas(await disciplinasNaoTurma(turma))
        }
        getTurma()
    }, [turma])

    async function escolheDisciplina (e) {
        postDisciplina(e.target.value)
        setDisciplinas(await disciplinasNaoTurma(turma))  
    }

    return(
        <select onBlur={e => {escolheDisciplina(e)}}>
            {disciplinas.map(disciplina => {
                return <option value={disciplina.id}>{disciplina.nome}</option>
            })}
        </select>
    )
}