import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonList, IonItem, IonLabel, IonButtons, IonButton, IonIcon, IonModal, IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { airplane, camera, trash } from 'ionicons/icons';
import { destinosResultadoWS, resultadoBusquedaWS } from 'src/app/data/mapeo';
import { Camera, CameraResultType, Photo } from '@capacitor/camera';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.page.html',
  styleUrls: ['./destinos.page.scss'],
  standalone: true,
  imports: [IonInput, IonModal, IonIcon, IonButton, IonButtons, IonLabel, IonItem, IonList, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DestinosPage implements OnInit {

  favoritos: resultadoBusquedaWS[] = []
  modalCambioValor: boolean = false;
  agregados: string[] = [];
  precioAproxStr: string = "";
  vueloSeleccionado: resultadoBusquedaWS|undefined = undefined
  modalEliminar: any;

  //camara
  foto: Photo|null = null

  constructor() {
    addIcons({
      trash, airplane, camera
    })
   }

  ngOnInit() {
  }
  //abrir modal para ingresar valor
  abrirModalPrecio(vueloSeleccionado: resultadoBusquedaWS) {
    this.setOpen(true)
    this.vueloSeleccionado = vueloSeleccionado
  }

  setOpen(isOpen: boolean) {
    this.modalCambioValor = isOpen;
  }
  
  guardarDestino(viaje:any) {
    throw new Error('Method not implemented.');
  }

  //cambiar precio
  guardarPrecio() {
    if (this.vueloSeleccionado != undefined) {
     this.vueloSeleccionado.precioAprox = parseInt(this.precioAproxStr)
    }
    this.setOpen(false)
  }

  //abrir modal para eliminar el destino
  abrirModalEliminarDestino(seleccionDelete: resultadoBusquedaWS) {
    this.setOpen(true)
    this.vueloSeleccionado = seleccionDelete
  }

  // eliminar el destino
   eliminarDestino(vuelo: resultadoBusquedaWS) {
  }

  //tomar foto
  async tomarFoto(){
    this.foto = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
      saveToGallery: true,
      correctOrientation: true
    })
  }
}
