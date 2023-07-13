import  Swal  from 'sweetalert2';
import { CategoriaService } from './../../../services/categoria.service';
import { TareaService } from './../../../services/tarea.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-tarea',
  templateUrl: './actualizar-tarea.component.html',
  styleUrls: ['./actualizar-tarea.component.css']
})
export class ActualizarTareaComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private tareaService:TareaService,
    private categoriaService:CategoriaService,
    private router:Router) { }

  tareaId = 0;
  tarea:any;
  categorias:any;

  ngOnInit(): void {
    this.tareaId = this.route.snapshot.params['tareaId'];
    this.tareaService.obtenerTarea(this.tareaId).subscribe(
      (data) => {
        this.tarea = data;
        console.log(this.tarea);
      },
      (error) => {
        console.log(error);
      }
    )

    this.categoriaService.listarCategorias().subscribe(
      (data:any) => {
        this.categorias = data;
      },
      (error) => {
        alert('Error al cargar las categorías');
      }
    )
  }

  public actualizarDatos(){
    this.tareaService.actualizarTarea(this.tarea).subscribe(
      (data) => {
        Swal.fire('Tarea actualizada','La tarea ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/tareas']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar la tarea','error');
        console.log(error);
      }
    )
  }
}
