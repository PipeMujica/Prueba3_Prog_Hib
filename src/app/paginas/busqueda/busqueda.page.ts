import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonSearchbar, IonImg, IonItem, IonButtons, IonIcon, IonButton, IonLabel, SearchbarInputEventDetail } from '@ionic/angular/standalone';
import { IonSearchbarCustomEvent } from '@ionic/core';
import { BusquedaService } from 'src/app/servicios/busqueda.service';
import { addIcons } from 'ionicons';
import { addCircle} from 'ionicons/icons'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
  standalone: true,
  imports: [RouterModule, IonLabel, IonButton, IonIcon, IonButtons, IonItem, IonImg, IonSearchbar, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BusquedaPage implements OnInit {

  destinos: string[] = []
  buscar: string[] = []
  guardado: string[] =[]
  
  constructor(
    private servicio: BusquedaService
  ) { 
    addIcons({
      addCircle
    })
  }

  async ngOnInit() {
  }

  async handleInput($event: IonSearchbarCustomEvent<SearchbarInputEventDetail>) {
    const termino = ""+$event.detail.value
    const resultado = await this.servicio.buscarDestino(termino)
    this.destinos = []
    resultado.features.forEach(d => this.destinos.push(d.properties.name));
    }

    // NO PUDE REALIZAR LA FUNCION DE BUSCAR CON LAS IMAGENES, NOMBRE Y PAIS/CIUDAD
  //async buscarInput($event: IonSearchbarCustomEvent<SearchbarInputEventDetail>) {
    //const terminoBuscado = $event.detail.value ?? ''
    //const res = await this.servicio.buscarDatos(terminoBuscado)
    //this.buscar = []
    //resultado.Destinos.forEach(d => this.buscar.push(d.resultadoBusquedaWS.name))
  //}
  
  guardarDestino(){
  this.guardado.push()
}
  
}
