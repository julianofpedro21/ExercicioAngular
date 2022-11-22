import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tarefa } from 'src/app/models/tarefa';

@Component({
  selector: 'app-exercicio02',
  templateUrl: './exercicio02.component.html',
  styleUrls: ['./exercicio02.component.css']
})
export class Exercicio02Component {
  ListaForm: FormGroup = this.formBuilder.group({
    texto: '',
    status: 'P'
  });

  tarefa: Tarefa []=[];
  texto:string = '';

  constructor(private formBuilder: FormBuilder) {
  }

  onSubmit() {
    const tar :Tarefa = this.ListaForm.value;
    this.tarefa[this.tarefa.length] = tar;
    this.texto = '';
  };

  remover(texto:Tarefa){  
    this.tarefa.splice(this.tarefa.indexOf(texto),1);
  };

  realizado(texto:Tarefa){
    this.tarefa[this.tarefa.indexOf(texto)].status = 'C';    
  }
}
