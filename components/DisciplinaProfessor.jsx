import { PutData } from "@/pages/api/hello";
import { useEffect, useState } from "react";

export default function DisciplinaProfessor ({professor, disciplinas}) {
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
        <div  className="flex">
            <div className="linha">{professor.nome}</div>
            <select className="linha" onChange={e => put(professor, e.target.value)} value={disciplina}>
                {disciplinas.map(disciplina => {
                    return <option key={disciplina.id} value={disciplina.id}>{disciplina.nome}</option>
                })}
            </select>
        </div>
    )
}