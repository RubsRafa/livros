import { NextPage } from "next";
import React, { useState } from "react";
import style from './styles/Home.module.css'
import ControleEditora from "../classes/controle/ControleEditora";
import Head from "next/head";
import { Menu } from "../componentes/Menu";
import { useRouter } from "next/router";

const controleEditora = new ControleEditora();
const baseURL = 'http://localhost:3000/api/livros'

const LivrosDados: NextPage = () => {
  const [titulo, setTitulo] = useState<string>('');
  const [resumo, setResumo] = useState<string>('');
  const [autores, setAutores] = useState<string>('');
  const [codEditora, setCodEditora] = useState<number>(1);
  const opcoes = controleEditora.getEditoras().map(editora => ({ value: editora.codEditora, text: editora.nome }));
  const navigate = useRouter();

  const incluirLivro = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const livro = {
        codigo: 0,
        titulo,
        resumo,
        autores: autores.split('\n'),
        codEditora,
      }
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(livro)
      })

      if (response.ok) {
        navigate.push('/LivroLista')
      } else {
        console.log('Erro ao incluir livro: ', response.statusText)
      }
    } catch (error) {
      console.log('Erro ao incluir livro: ', error)
    }
  }

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };

  return (
    <div className={style.container}>
      <Head>
        <title>Incluir Livro</title>
      </Head>
      <Menu />
      <main>
        <h1>Dados do Livro</h1>
        <form onSubmit={incluirLivro}>

          <div className="mb-3 d-flex flex-column">
            <label>Título</label>
            <input id="valor" type="text" className="form-control" required value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          </div>

          <div className="mb-3 d-flex flex-column">
            <label>Resumo</label>
            <textarea id="valor" className="form-control" required value={resumo} onChange={(e) => setResumo(e.target.value)} />
          </div>

          <div className="mb-3 d-flex flex-column">
            <label>Editora</label>
            <select className="form-select" id="codEditora" value={codEditora} onChange={tratarCombo}>
              {opcoes.map((editora) => <option key={editora.value} value={editora.value}>{editora.text}</option>)}
            </select>
          </div>

          <div className="mb-3 d-flex flex-column">
            <label>Autores (1 por linha)</label>
            <textarea id="valor" className="form-control" required value={autores} onChange={(e) => setAutores(e.target.value)} />
          </div>

          <button type="submit" className="btn btn-primary">Salvar Dados</button>
        </form>
      </main>
    </div>
  )
}

export default LivrosDados;