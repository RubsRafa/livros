import ControleEditora from "../classes/controle/ControleEditora";
import { Livro } from "../classes/modelo/Livro";

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }: LinhaLivroProps) => {
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora)
  return (
    <>
      <tr>
        <td>
          <h6>{livro.titulo}</h6>
          <button className="btn btn-danger" onClick={() => excluir(Number(livro.codigo))}>Excluir</button>

        </td>
        <td>{livro.resumo}</td>
        <td>{nomeEditora}</td>
        <td>
          <ul>
            {livro.autores.map((autor) => <li key={autor}>{autor}</li>)}
          </ul>
        </td>

      </tr>
    </>
  )
}