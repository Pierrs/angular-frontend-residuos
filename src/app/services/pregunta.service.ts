import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private http:HttpClient) { }

  public listarPreguntasDelaTarea(tareaId:any){
    return this.http.get(`${baserUrl}/pregunta/tarea/todos/${tareaId}`);
  }

  public guardarPregunta(pregunta:any){
    return this.http.post(`${baserUrl}/pregunta/`,pregunta);
  }

  public eliminarPregunta(preguntaId:any){
    return this.http.delete(`${baserUrl}/pregunta/${preguntaId}`);
  }

  public actualizarPregunta(pregunta:any){
    return this.http.put(`${baserUrl}/pregunta/`,pregunta);
  }

  public obtenerPregunta(preguntaId:any){
    return this.http.get(`${baserUrl}/pregunta/${preguntaId}`);
  }

  public listarPreguntasDelaTareaParaLaPrueba(tareaId:any){
    return this.http.get(`${baserUrl}/pregunta/tarea/todos/${tareaId}`);
  }

  public evaluarTarea(preguntas:any){
    return this.http.post(`${baserUrl}/pregunta/evaluar-tarea`,preguntas);
  }
}
