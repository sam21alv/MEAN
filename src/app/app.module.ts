import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import  {  BrowserAnimationsModule  }  from  '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//componenetes
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './componts/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './componts/listar-productos/listar-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListarProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
