import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //AGREGADO
//import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; //AGREGADO
import { AppComponent } from './app.component';
import { FotoComponent } from './foto/foto.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    ComentarioComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //AGREGADO
    //AppRoutingModule
    RouterModule.forRoot([]) // AGREGADO
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
