import React from "react";

export class Editora extends React.Component {
  codEditora: number;
  nome: string;

  constructor (props: { 
    codEditora: number,
    nome: string,
  }){
    super(props);
    this.codEditora = props.codEditora;
    this.nome = props.nome;
  }
}
