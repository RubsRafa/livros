import { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { codEditora } = req.query;
      const nomeEditora = controleEditora.getNomeEditora(Number(codEditora))
      res.status(200).json({ nome: nomeEditora })
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" })
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

