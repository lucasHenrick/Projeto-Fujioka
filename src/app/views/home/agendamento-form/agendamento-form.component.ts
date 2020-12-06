import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { AgendamentoService } from 'src/app/shared/service/agendamento.service';

@Component({
  selector: 'app-agendamento-form',
  templateUrl: './agendamento-form.component.html',
  styleUrls: ['./agendamento-form.component.css']
})
export class AgendamentoFormComponent implements OnInit{

  public agendamentoForm: FormGroup
 
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AgendamentoFormComponent>,
    private agendamentoService: AgendamentoService) { }
    
  ngOnInit(): void {
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
  creatAgendamento(){
    
    this.agendamentoService.create(this.agendamentoForm.value).subscribe(result => {
      this.getAgendamentos();
      this.dialogRef.close();
      this.agendamentoForm.reset();
    });
    
  }
  cancel(){
    this.dialogRef.close();
    this.agendamentoForm.reset();
  }
  
}
