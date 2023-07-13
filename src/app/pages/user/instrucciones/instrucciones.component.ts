import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from './../../../services/tarea.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.css']
})
export class InstruccionesComponent implements OnInit {

  tareaId:any;
  tarea:any = new Object();

  constructor(
    private tareaService:TareaService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.tareaId = this.route.snapshot.params['tareaId'];
    this.tareaService.obtenerTarea(this.tareaId).subscribe(
      (data:any) => {
        console.log(data);
        this.tarea = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  empezarTarea(){
    Swal.fire({
      title:'¿Quieres comenzar la tarea?',
      showCancelButton:true,
      cancelButtonText:'Cancelar',
      confirmButtonText:'Empezar',
      icon:'info'
    }).then((result:any) => {
      if(result.isConfirmed){
        this.router.navigate(['/start/'+this.tareaId]);
      }
    })
  }

}
