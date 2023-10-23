import { PutData } from "@/pages/api/hello";
import { useEffect, useState } from "react";

export default ({ disciplina }) => {
    const [nome, setNome] = useState("");
    const [carga, setCarga] = useState("");

    useEffect(() => {
        if (disciplina == undefined) return
        setNome(disciplina.nome)
        setCarga(disciplina.cargaHoraria)
    }, [disciplina])

    async function put() {
        let obj = {
            "id": disciplina.id,
            "nome": nome,
            "cargaHoraria": parseFloat(carga)
        }
        await PutData(obj, "disciplina")
    }

    return (
        <div className="flex">
            <input type="text" placeholder="Nome" onChange={e => setNome(e.target.value)} onBlur={() => put()} value={nome} />
            <input type="number" onChange={e => setCarga(e.target.value)} onBlur={() => put()} placeholder="Carga Horária" value={carga} />
        </div>)
}  