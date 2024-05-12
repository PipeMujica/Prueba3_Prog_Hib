import { Injectable } from '@angular/core';
import { BusquedaService } from './busqueda.service';
import { destinosResultadoWS, resultadoBusquedaWS } from '../data/mapeo';
import { Destinos } from '../data/destinos';

@Injectable({
  providedIn: 'root'
})
export class ViajesRepositoryService {

  constructor(
    private busquedaData: BusquedaService,
    private clase: Destinos
  ) { }

  // no entiendo porque no me reconoce direccion ni imagen
  private _buildDatos(d:resultadoBusquedaWS):Destinos {
    return {
      id: d.xid,
      nombre: d.name,
      direccion: d.address,
      imagen: d.preview
    }
  }

  
}


