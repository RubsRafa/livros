import React from "react";
import { Editora } from "../modelo/Editora";

const editoras: Array<Editora> = [
  new Editora({ codEditora: 1, nome: "Alta Books" }),
  new Editora({ codEditora: 2, nome: "Pearson" }),
  new Editora({ codEditora: 3, nome: "Addison Wesley" }),
];

class ControleEditora extends React.Component {

  public getNomeEditora(codEditora: number){
    const editora = editoras.filter((editora) => editora.codEditora === codEditora)
    return editora.length > 0 ? editora[0].nome : undefined;
  }

  public getEditoras(): Array<Editora> {
    return editoras;
  }

}

export default ControleEditora