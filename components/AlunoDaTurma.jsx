import provasDoAluno from "@/data/provasDoAluno";
import { DeleteData, PostData } from "@/pages/api/hello";
import { useEffect, useState } from "react";
import Notas from "./Notas";

export default ({aluno, professor, atualizar}) => {

    const [mostrarNotas, setMostrarN] = useState(false)
    const [provas, setProvas] = useState([])

    useEffect(() => {
        if (aluno == undefined) return
        async function getProvas() {
            let provasData = await provasDoAluno(aluno)
            setProvas(provasData)
        }
        getProvas()
    }, [aluno])

    async function postNota(aluno) {
        await PostData(
            {
                "nota": 0,
                "disciplina": { "id": professor.disciplina.id },
                "aluno": { "id": aluno.id }
            }
            , "prova")
            setProvas(await provasDoAluno(aluno))
            atualizar()
    }

    async function deletarNota(prova) {
        await DeleteData(prova.id, "prova");
        setProvas(await provasDoAluno(aluno))
    }

    return (
        <div>
            <div>{aluno.nome}</div>
            <div>{aluno.turma.id}</div>
            <div>
                <div>
                    <div onClick={() => setMostrarN(!mostrarNotas)}>
                        Notas
                        <button onClick={() => { postNota(aluno) }}>+</button>
                    </div>

                    {mostrarNotas &&
                        <div>
                            {provas.map(prova => {
                                return <div>
                                    <Notas prova={prova} professor={professor} />
                                    <button className="text-red-800" onClick={() => deletarNota(prova)}>x</button>
                                </div>
                            })}
                        </div>
                    }
                </div>
            </div>
        </div>
        )
}