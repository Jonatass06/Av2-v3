import { useEffect, useState } from "react"
import BoletimAluno from "./BoletimAluno";

export default ({ alunosData }) => {
    const [alunos, setAlunos] = useState([])
    useEffect(() => {
        if (alunosData == undefined) return
        setAlunos(alunosData)
    }, [alunosData]);

    return (
        <div className="fixed flex justify-center items-center top-0 right-0 left-0 bottom-0">
            {alunos.map(aluno => {
                return <BoletimAluno aluno={aluno}></BoletimAluno>
            })}
        </div >
    )
}