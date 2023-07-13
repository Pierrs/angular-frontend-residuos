import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http:HttpClient) { }

  public listarTareas(){
    return this.http.get(`${baserUrl}/tarea/`);
  }

  public agregarTarea(tarea:any){
    return this.http.post(`${baserUrl}/tarea/`,tarea);
  }

  public eliminarTarea(tareaId:any){
    return this.http.delete(`${baserUrl}/tarea/${tareaId}`);
  }

  public obtenerTarea(tareaId:any){
    return this.http.get(`${baserUrl}/tarea/${tareaId}`);
  }

  public actualizarTarea(tarea:any){
    return this.http.put(`${baserUrl}/tarea/`,tarea);
  }

  public listarTareasDeUnaCategoria(categoriaId:any){
    return this.http.get(`${baserUrl}/tarea/categoria/${categoriaId}`);
  }

  public obtenerTareasActivos(){
    return this.http.get(`${baserUrl}/tarea/activo`);
  }

  public obtenerTareasActivosDeUnaCategoria(categoriaId:any){
    return this.http.get(`${baserUrl}/tarea/categoria/activo/${categoriaId}`);
  }

}
