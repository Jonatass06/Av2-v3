import { useEffect, useState } from "react"
import Disciplina from "./Disciplina"
import GetAllData, { DeleteData, PostData } from "@/pages/api/hello"

export default ({ disciplinas }) => {
    const [materias, setMaterias] = useState([])

    useEffect(() => {
        if (disciplinas == undefined) return
        setMaterias(disciplinas)
    }, [disciplinas])

    async function post() {
        await PostData({}, "disciplina");
        setMaterias(await GetAllData("disciplina"))
    }
    async function deletar(disciplina) {
        await DeleteData(disciplina.id, "disciplina")
        setMaterias(await GetAllData("disciplina"))
    }

    return (
        <div>
            <div>
                Disciplinas
                <button onClick={() => post()}>+</button>
            </div>
            <div>
                {materias.map(disciplina => {
                    return <div>
                        <Disciplina disciplina={disciplina} />
                        <button className="text-red-800" onClick={() => deletar(disciplina)}>X</button>
                    </div>
                })}
            </div>
        </div>
    )
}