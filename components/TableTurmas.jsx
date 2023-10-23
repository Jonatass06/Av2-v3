import { useEffect, useState } from "react"
import GetAllData, { DeleteData, PostData } from "@/pages/api/hello";
import Turma from "./Turma";

export default (props) => {
    const professor = props.professor;
    const [turmas, setTurmas] = useState([]);

    useEffect(() => {
        if (props.turmas == undefined) return
        async function getTurmas() {
            setTurmas(props.turmas)
        }
        getTurmas()
    }, [props.turmas])

    async function post() {
        await PostData({}, "turma");
        setTurmas(await GetAllData("turma"))
    }
    async function deletar(turma) {
        await DeleteData(turma.id, "turma");
        setTurmas(await GetAllData("turma"));
    }

    return (
        <div>
            <div>Turmas
                {!professor &&
                    <button onClick={() => post()}>+</button>}
            </div>
            <div>
                {turmas.map(turma => {
                        return <div>
                            <Turma turmaData={turma} professor={professor} />
                            {!professor && <button className="text-red-800" onClick={() => deletar(turma)}>x</button>}
                        </div>
                    })}
            </div>
        </div>
    )
}