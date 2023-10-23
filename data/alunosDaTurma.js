import GetAllData from "@/pages/api/hello";

export default async function get(turma) {
    const alunos = await GetAllData("aluno")
    const alunosDaTurma = alunos.filter(aluno => aluno.turma.id == turma.id)
    return alunosDaTurma;
}
