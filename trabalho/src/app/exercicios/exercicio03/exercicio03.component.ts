import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio03',
  templateUrl: './exercicio03.component.html',
  styleUrls: ['./exercicio03.component.css']
})
export class Exercicio03Component {

 
  num1: string = "";
  num2: string = "";
  operacao: string = "";
  
  valor: number = 0;
  resultado: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calcula(){
    switch (this.operacao) {
      
      case "+":
        this.valor = parseInt(this.num1) + parseInt(this.num2); break;
      case "-":
        this.valor = parseInt(this.num1) - parseInt(this.num2); break;
      case "*":
        this.valor = parseInt(this.num1) * parseInt(this.num2); break;
      case "/":
        this.valor = parseInt(this.num1) / parseInt(this.num2); break;
      default:
        alert('Operação inválida!'); return;
    }

    this.resultado = this.valor;
  }

  limpa(){
    this.resultado = 0;
    this.num1 = "";
    this.num2 = "";
  }
}
