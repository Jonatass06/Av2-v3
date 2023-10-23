import GetAllData,{GetDataId }from "@/pages/api/hello";
import Header from "@/components/Header";
import RotaPrivada from "@/components/RotaPrivada"
import TableAlunos from "@/components/TableAlunos";
import TableAlunosProfessor from "@/components/TableAlunosProfessor";
import TableDisciplinas from "@/components/TableDisciplinas";
import TableDisciplinasAluno from "@/components/TableDisciplinasAluno";
import TableMinhaTurma from "@/components/TableMinhaTurma";
import TableProfessores from "@/components/TableProfessores";
import TableTurmas from "@/components/TableTurmas";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import alunosData from "@/data/alunos";
import professoresData from "@/data/professores";
import secretariosData from "@/data/secretarios";
import contem from "@/functions/contem";
import disciplinasData from "@/data/disciplinas";
import turmasDoProfessor from "@/data/turmasDoProfessor";
import TableSecretarios from "@/components/TableSecretarios";

export default () =>{
    const id = useRouter().query.id;
    const [secretarios, setSecretarios] = useState([]);
    const [alunos, setAlunos] = useState([]);
    const [professores, setProfessores] = useState([]);
    const [turmas, setTurmas] = useState([]);
    const [disciplinas, setDisciplinas] = useState([]);
    const [usuario, setUsuario] = useState({});
    const[isProf, setIsProf] = useState(false);
    const[isAluno, setIsAluno] = useState(false);
    const[isSecretario, setIsSecretario] = useState(false);

    useEffect(() => {
        async function getUsuario() {
            if(id == undefined) return
            let usuario = await GetDataId(id, "usuario")
            console.log(usuario)
            setUsuario(usuario)

            let secretariosTemp = await secretariosData;
            let alunosTemp = await alunosData;
            let professoresTemp = await professoresData;


            setAlunos(alunosTemp);
            setProfessores(professoresTemp);
            setSecretarios(secretariosTemp);

            setDisciplinas(await disciplinasData);

            let professor = contem(usuario, professoresTemp)
            setIsAluno(contem(usuario, alunosTemp));
            setIsProf(professor);
            setIsSecretario(contem(usuario, secretariosTemp));

            professor ? setTurmas(await turmasDoProfessor(usuario.disciplina)) :
            setTurmas(await GetAllData("turma"))
        }
        getUsuario();
    }, [id])

    return(
        <RotaPrivada id={id}>
            <Header id={id}></Header>
            {
                isAluno &&
                <div>
                    <TableDisciplinasAluno aluno={usuario}></TableDisciplinasAluno>
                    <TableMinhaTurma turma={usuario.turma}></TableMinhaTurma>
                </div>
            }
            {
                 isProf &&
                <div>
                    <TableTurmas professor={usuario} turmas={turmas}></TableTurmas>
                    <TableAlunosProfessor professor={usuario} atualizar={() => setUsuario(usuario)}></TableAlunosProfessor>
                </div>
            }
            {
                isSecretario &&
                <div>
                    <TableAlunos alunos={alunos} turmas={turmas}></TableAlunos>
                    <TableTurmas turmas={turmas}></TableTurmas>
                    <TableProfessores professores={professores} disciplinas={disciplinas}></TableProfessores>
                    <TableDisciplinas disciplinas={disciplinas}></TableDisciplinas>
                    <TableSecretarios secretarios={secretarios}></TableSecretarios>
                </div>
            }
        </RotaPrivada>
    )

}