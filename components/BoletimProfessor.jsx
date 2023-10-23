import alunosDaTurma from "@/data/alunosDaTurma";
import { useEffect, useState } from "react"
import ProvasDoAluno from "./ProvasDoAluno";

export default ({ professor, turma }) => {

    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        if (professor == undefined) return
        async function alunos() {
            console.log(professor)
            let alunosData = await alunosDaTurma(turma);
            setAlunos(alunosData)
        }
        alunos()
    }, [professor]);

    return (
        <div className="fixed flex justify-center items-center top-0 right-0 left-0 bottom-0">
            <div>
                <div>Boletim</div>
                <div>Professor: {professor.nome}</div>
                <div>
                    {
                        alunos.map(aluno => {
                            return <div className={`flex gap-6 ${alunos.indexOf(aluno) % 2 == 0 ? "bg-branco" : "bg-[#D9F0E5]"}`}>
                                <div>
                                    Aluno: {aluno.nome}
                                </div>
                                <ProvasDoAluno aluno={aluno} disciplina={professor.disciplina}></ProvasDoAluno>
                            </div>
                        })
                    }
                </div>
            </div>

        </div >

    )
}