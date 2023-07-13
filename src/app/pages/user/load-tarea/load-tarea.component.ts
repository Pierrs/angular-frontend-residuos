import { TareaService } from './../../../services/tarea.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-tarea',
  templateUrl: './load-tarea.component.html',
  styleUrls: ['./load-tarea.component.css']
})
export class LoadTareaComponent implements OnInit {

  catId:any;
  tareas:any;

  constructor(
    private route:ActivatedRoute,
    private tareaService:TareaService
  ) { }

  ngOnInit(): void {
      this.route.params.subscribe((params) => {
        this.catId = params['catId'];

        if(this.catId == 0){
          console.log("Cargando todos las Tareas");
          this.tareaService.obtenerTareasActivos().subscribe(
            (data) => {
              this.tareas = data;
              console.log(this.tareas);
            },
            (error) => {
              console.log(error);
            }
          )
        }
        else{
          console.log("Cargando una tarea en específico");
          this.tareaService.obtenerTareasActivosDeUnaCategoria(this.catId).subscribe(
            (data:any) => {
              this.tareas = data;
              console.log(this.tareas);
            },
            (error) => {
              console.log(error);
            }
          )
        }
      })
  }

}
