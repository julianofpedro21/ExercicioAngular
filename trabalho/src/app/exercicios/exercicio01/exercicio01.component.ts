import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Imc } from 'src/app/models/imc';

@Component({
  selector: 'app-exercicio01',
  templateUrl: './exercicio01.component.html',
  styleUrls: ['./exercicio01.component.css']
})
export class Exercicio01Component {

  IMCForm: FormGroup = this.formBuilder.group({
    peso: 0,
    altura: 0
  });


  constructor(private formBuilder: FormBuilder) {
  }



  result: string = '';
  resultado: string = '';

  onSubmit() {
    const imc: Imc = this.IMCForm.value;

    let valor: number = (imc.peso / ((imc.altura * imc.altura)/100)) * 100;

    switch (true) {
      case valor < 16:
        this.result = 'MG';
        this.resultado = 'Magreza grave';
        break;

      case valor >= 16 && valor < 17:
        this.result = 'MM';
        this.resultado = 'Magreza moderada';
        break;

      case valor >= 17 && valor < 18.5:
        this.result = 'ML';
        this.resultado = 'Magreza leve';
        break;

      case valor >= 18.5 && valor < 25:
        this.result = 'S';
        this.resultado = 'Saudável';
        break;


      case valor >= 25 && valor < 30:
        this.result = 'SP';
        this.resultado = 'Sobrepeso';
        break;


      case valor >= 30 && valor < 35:
        this.result = 'OG1';
        this.resultado = 'Obesidade Grau I';
        break;


      case valor >= 35 && valor < 40:
        this.result = 'OG2';
        this.resultado = 'Obesidade Grau II';
        break;


      case valor >= 40:
        this.result = 'OG3';
        this.resultado = 'Obesidade Grau III';
        break;
    }   

  }

}

