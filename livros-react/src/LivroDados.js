import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LivroDados = () => {
  const controleEditora = new ControleEditora();
  const controleLivro = new ControleLivro();

  const opcoes = controleEditora.getEditoras().map((editora) => ({ value: editora.codEditora, text: editora.nome }))
  const [titulo, setTitulo] = useState('')
  const [resumo, setResumo] = useState('')
  const [autores, setAutores] = useState('')
  const [codEditora, setCodEditora] = useState(opcoes[0])
  const navigate = useNavigate();
  
  const tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value))
  }

  const incluir = (evento) => {
    evento.preventDefault();
    const livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora: codEditora.value
    }

    controleLivro.incluir(livro)
    navigate('/')
  }

  return (
    <main>
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>

        <div class="mb-3 d-flex flex-column">
          <label>Título</label>
          <input id="valor" type="text" class="form-control" required value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>

        <div class="mb-3 d-flex flex-column">
          <label>Resumo</label>
          <textarea id="valor" type="text" class="form-control" required value={resumo} onChange={(e) => setResumo(e.target.value)} />
        </div>

        <div class="mb-3 d-flex flex-column">
          <label>Editora</label>
          <select class="form-select" id="codEditora" value={codEditora} onChange={tratarCombo}>
            {opcoes.map((editora) => <option key={editora.value} value={editora.value}>{editora.text}</option>)}
          </select>
        </div>

        <div class="mb-3 d-flex flex-column">
          <label>Autores (1 por linha)</label>
          <textarea id="valor" type="text" class="form-control" required value={autores} onChange={(e) => setAutores(e.target.value)} />
        </div>

          <button type="submit" class="btn btn-primary">Salvar Dados</button>
      </form>
    </main>
  )
}

export default LivroDados;