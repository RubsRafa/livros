import { useEffect, useState } from "react";
import ControleEditora from "./controle/ControleEditora";
import ControleLivro from "./controle/ControleLivros";
import style from './LivroLista.module.css'

const LinhaLivro = ({ livro, excluir, index }) => {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora)
  return (
    <>
        <tr>
            <td>
              <h6>{livro.titulo}</h6>
              <button class="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>

            </td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
              <ul>
                {livro.autores.map((autor) => <li>{autor}</li>)}
              </ul>
            </td>
            
        </tr>
    </>
  )
}

const LivroLista = () => {
  const [livros, setLivros] = useState([])
  const [carregado, setCarregado] = useState(false)
  const controleLivro = new ControleLivro();

  useEffect(() => {
    setLivros(controleLivro.obterLivros())
    setCarregado(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[carregado])

  const excluir = (codigo) => {
    controleLivro.excluir(codigo)
    setCarregado(false)
  }

  return (
    <>
    <main>
      <h1>Catálogo de Livros</h1>
      <table class={style.tabela} className="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th style={{ width: '16%' }}>Título</th>
            <th style={{ width: '50%' }}>Resumo</th>
            <th style={{ width: '16%' }}>Editora</th>
            <th style={{ width: '16%' }}>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => 
            <LinhaLivro key={livro.titulo} livro={livro} excluir={excluir} index={index} />
          )}
        </tbody>
      </table>
    </main>
    </>
  )
}

export default LivroLista;