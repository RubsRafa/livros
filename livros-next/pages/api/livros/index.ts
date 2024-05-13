import { NextApiRequest, NextApiResponse } from "next";
import ControleLivro from "../../../classes/controle/ControleLivros";

export const controleLivro = new ControleLivro();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const livros = controleLivro.obterLivros();
      res.status(200).json({ livros })
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error "})
    }
  } else if (req.method === "POST") {
    try {
      const livro = req.body;
      controleLivro.incluir(livro)
      res.status(200).json({ message: "Book created successfully" })
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error "})
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);

  }
}

