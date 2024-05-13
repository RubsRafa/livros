import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    try {
      const codigo = req.query;
      controleLivro.excluir(Number(codigo))
      res.status(200).json({ message: "Book deleted successfully" })
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error"})
    }
  } else {
    res.setHeader('Allow', ['DELETE'])
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}