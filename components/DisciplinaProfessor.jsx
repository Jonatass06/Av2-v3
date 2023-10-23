import { PutData } from "@/pages/api/hello";
import { useEffect, useState } from "react";

export default ({professor, disciplinas}) => {
    const [disciplina, setDisciplina] = useState(0);
    useEffect(() => {
        if (professor == undefined) return
        setDisciplina(professor.disciplina.id)
    }, [professor]);

    async function put(professor, value){
        setDisciplina(value);
        professor.disciplina = {"id":parseInt(value)};
        await PutData(professor, "professor")
    }

    return (
        <div>
            <div>{professor.nome}</div>
            <select onChange={e => put(professor, e.target.value)} value={disciplina}>
                {disciplinas.map(disciplina => {
                    return <option value={disciplina.id}>{disciplina.nome}</option>
                })}
            </select>
        </div>
    )
}