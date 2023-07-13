import  Swal  from 'sweetalert2';
import { TareaService } from './../../../services/tarea.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-tareas',
  templateUrl: './view-tareas.component.html',
  styleUrls: ['./view-tareas.component.css']
})
export class ViewTareasComponent implements OnInit {

  tareas : any = [

  ]

  constructor(private tareaService:TareaService) { }

  ngOnInit(): void {
    this.tareaService.listarTareas().subscribe(
      (dato:any) => {
        this.tareas = dato;
        console.log(this.tareas);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los tareas','error');
      }
    )
  }

  eliminarTarea(tareaId:any){
    Swal.fire({
      title:'Eliminar Tarea?',
      text:'¿Estás seguro de eliminar la tarea?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.tareaService.eliminarTarea(tareaId).subscribe(
          (data) => {
            this.tareas = this.tareas.filter((tarea:any) => tarea.tareaId != tareaId);
            Swal.fire('Tarea eliminada','La tarea ha sido eliminado de la base de datos','success');
          },
          (error) => {
            Swal.fire('Error','Error al eliminar la tarea','error');
          }
        )
      }
    })
  }
}
