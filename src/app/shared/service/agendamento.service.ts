import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Agendamento } from '../model/agendamento.model';

@Injectable({
  providedIn: 'root'
})

export class AgendamentoService {
  
  apiUrl = 'https://apirestschedule2.herokuapp.com/api/agendamento';
  
  


  constructor(private http: HttpClient) { }
  
  public getAgendamento():Observable<Agendamento>{
    return this.http.get<Agendamento>(this.apiUrl);
  }
  
  public create(agendamento : Agendamento): Observable<Agendamento>{
    return this.http.post<Agendamento>(this.apiUrl, agendamento)
}

  public update(agendamento:  Agendamento, id : number): Observable<Agendamento>{
    const url = `${this.apiUrl}/${id}`
      return this.http.put<Agendamento>(url, agendamento)    
}
  public delete(id : number): Observable<Agendamento> {
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<Agendamento>(url)
}
  readById(id: number): Observable<Agendamento>{
    const url =  `${this.apiUrl}/${id}`
    return this.http.get<Agendamento>(url)

}


}
