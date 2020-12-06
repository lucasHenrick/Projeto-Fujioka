import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/shared/model/agendamento.model';
import { AgendamentoService } from '../../../shared/service/agendamento.service';
@Component({
  selector: 'app-agedamento-list',
  templateUrl: './agedamento-list.component.html',
  styleUrls: ['./agedamento-list.component.css']
})
export class AgedamentoListComponent implements OnInit {
  
  agendamento: Agendamento;

  constructor(private agendamentoService : AgendamentoService) { }

  ngOnInit(): void {
    this.getAgendamentos()
  }
  
  getAgendamentos(){
    this.agendamentoService.getAgendamento().subscribe(data =>{
        this.agendamento = data;
        console.log(this.agendamento);
      }
    );
  }
  deleteAgendamentos(id : number){
    this.agendamentoService.delete(id).subscribe(result => {
      this.getAgendamentos();
    });
  }
  checkAgendamentos(id:number){
    this.agendamento.finalizada = "true"
    this.agendamentoService.update(this.agendamento, id).subscribe(result =>{
      this.getAgendamentos();
    })
  }
}
