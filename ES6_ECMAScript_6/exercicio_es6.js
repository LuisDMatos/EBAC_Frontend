const alunos = [
    {nome: 'Marcelo', nota: 7},
    {nome: 'Tadeu', nota: 5},
    {nome: 'Julia', nota: 9},
    {nome: 'Rosa', nota: 4}
]

function filtrarAlunosAprovados(alunos) {
    return alunos.filter(alunos => alunos.nota >= 6);
}

const alunosAprovados = filtrarAlunosAprovados(alunos);
alunosAprovados.forEach(aluno => {
    console.log(`Nome: ${aluno.nome}, foi aprovado com nota: ${aluno.nota}`);
})
