import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Agendamento } from 'src/app/shared/model/agendamento.model';
import { AgendamentoService } from 'src/app/shared/service/agendamento.service';

@Component({
  selector: 'app-agendamento-edit',
  templateUrl: './agendamento-edit.component.html',
  styleUrls: ['./agendamento-edit.component.css']
})
export class AgendamentoEditComponent implements OnInit {
  agendamentoForm: FormGroup
  agendamento : Agendamento = {
    assunto: '',
    curso:'',
    data:'',
    finalizada:'',
    matricula:null,
    nome:''
  }
  constructor(private agendamentoService: AgendamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    const id =  +this.route.snapshot.paramMap.get('id')
    this.agendamentoService.readById(id).subscribe(agendamento =>{
      this.agendamento = agendamento
    })
    this.agendamentoForm = this.fb.group({
      nome: ['',[Validators.required]],
      curso:['',[Validators.required]],
      matricula:[null,[Validators.required]],
      assunto:['',[Validators.required]],
      data: ['',[Validators.required]],
    })
  }
  getAgendamentos(){
    this.agendamentoService.getAgendamento().subscribe(data => {}
    );
  }
  editAgendamento(id:number){
    this.agendamentoService.update(this.agendamentoForm.value, id).subscribe(result => {
      this.router.navigate(['/']);  
    }) 
  }
  cancel(){
    this.router.navigate(['/']);
  }

}
