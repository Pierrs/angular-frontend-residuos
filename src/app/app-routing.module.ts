import { NormalGuard } from './services/normal.guard';

import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './services/admin.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { ViewTareasComponent } from './pages/admin/view-tareas/view-tareas.component';
import { AddTareaComponent } from './pages/admin/add-tarea/add-tarea.component';
import { ActualizarTareaComponent } from './pages/admin/actualizar-tarea/actualizar-tarea.component';
import { ViewTareaPreguntasComponent } from './pages/admin/view-tarea-preguntas/view-tarea-preguntas.component';
import { AddPreguntaComponent } from './pages/admin/add-pregunta/add-pregunta.component';
import { ActualizarPreguntaComponent } from './pages/admin/actualizar-pregunta/actualizar-pregunta.component';
import { LoadTareaComponent } from './pages/user/load-tarea/load-tarea.component';
import { InstruccionesComponent } from './pages/user/instrucciones/instrucciones.component';
import { StartComponent } from './pages/user/start/start.component';



const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent

      },{
        path:'',
        component:WelcomeComponent
      },
      {
        path:'categorias', 
        component:ViewCategoriasComponent

      },
      {
        path:'add-categoria',
        component:AddCategoriaComponent
      },
      {
        path:'tareas',
        component: ViewTareasComponent
      },
      {
        path:'add-tarea',
        component:AddTareaComponent
      },
      {
        path:'tarea/:tareaId',
        component: ActualizarTareaComponent
      },
      {
        path:'ver-preguntas/:tareaId/:titulo',
        component:ViewTareaPreguntasComponent
      },
      {
      path:'add-pregunta/:tareaId/:titulo',
      component:AddPreguntaComponent
      },
      {
        path:'pregunta/:preguntaId',
        component: ActualizarPreguntaComponent
      },




 
    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[NormalGuard],
    children : [
      {
        path:':catId',
        component:LoadTareaComponent
      },
      {
        path:'instrucciones/:tareaId',
        component:InstruccionesComponent
      }
    ]
  },
    {
      path:"start/:tareaId",
      component:StartComponent,
      canActivate:[NormalGuard]
    }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
