import { Router } from '@angular/router';
import { TareaService } from './../../../services/tarea.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import  Swal  from 'sweetalert2';
import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-tarea.component.html',
  styleUrls: ['./add-tarea.component.css']
})
export class AddTareaComponent implements OnInit {

  categorias:any = [];

  tareaData = {
    titulo:'',
    descripcion:'',
    puntosMaximos:'',
    numeroDePreguntas:'',
    activo:true,
    categoria:{
      categoriaId:''
    }
  }

  constructor(
    private categoriaService:CategoriaService,
    private snack:MatSnackBar,
    private tareaService:TareaService,
    private router:Router) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (dato:any) => {
        this.categorias = dato;
        console.log(this.categorias);
      },(error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los datos','error');
      }
    )
  }

  guardarTarea(){
    console.log(this.tareaData);
    if(this.tareaData.titulo.trim() == '' || this.tareaData.titulo == null){
      this.snack.open('El título es requerido','',{
        duration:3000
      });
      return ;
    }

    this.tareaService.agregarTarea(this.tareaData).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Tarea guardado','La Tarea ha sido guardado con éxito','success');
        this.tareaData = {
          titulo : '',
          descripcion : '',
          puntosMaximos : '',
          numeroDePreguntas : '',
          activo:true,
          categoria:{
            categoriaId:''
          }
        }
        this.router.navigate(['/admin/tareas']);
      },
      (error) => {
        Swal.fire('Error','Error al guardar la tarea','error');
      }
    )
  }

}
