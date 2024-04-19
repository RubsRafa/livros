import React from "react";
import { Livro } from "../modelo/Livro";

const livros: Array<Livro> = [
  new Livro({ 
    codigo: 1001, 
    codEditora: 1, 
    titulo: "Use a Cabeça: Java", 
    resumo: "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.", 
    autores: ["Bert Bates", "Kathy Sierra"]}),
  new Livro({ 
    codigo: 1002, 
    codEditora: 2, 
    titulo: "Java, como Programar", 
    resumo: "Milhoes de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel", 
    autores: ["Paul Deitel", "Harvey Deitel"]}),
  new Livro({ 
    codigo: 1003, 
    codEditora: 3, 
    titulo: "Core Java for the Impatient", 
    resumo: "Readers familiar with Horstmann's original, two-volume 'Core Java' books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how there new features impact the language and core libraries.", 
    autores: ["Cay Horstmann"]}),
]

class ControleLivro extends React.Component {

  obterLivros () {
    return livros;
  }
  
  incluir (livro: Livro) {
    const codigos: number[] = livros.map((liv) => liv.codigo)
    const novoCodigo = (codigos.length > 0 ? Math.max(...codigos) : 0) + 1
    livro.codigo = novoCodigo;
    livros.push(livro)
  }

  excluir (codigo: number) {
    const index = livros.map((livro) => livro.codigo).indexOf(codigo)
    livros.splice((typeof index !== 'number' ? 0 : index), 1)
  }
}

export default ControleLivro