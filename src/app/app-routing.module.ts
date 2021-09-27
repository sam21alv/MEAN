import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './componts/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './componts/listar-productos/listar-productos.component';

//componentes
const routes: Routes = [
  {path: '', component: ListarProductosComponent  },
  {path: 'crear-producto', component: CrearProductoComponent},
  {path: 'editar-producto/:id', component: CrearProductoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
