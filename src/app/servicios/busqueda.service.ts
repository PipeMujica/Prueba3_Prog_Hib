import { Injectable } from '@angular/core';
import { ResultadoWebSer, destinosResultadoWS, resultadoBusquedaWS } from '../data/mapeo';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  
  apiKey = "5ae2e3f221c38a28845f05b6505d2850284c5ece8687a7cab2e77bf3"
  urlPrincipal = "https://api.opentripmap.com/0.1/en/places/"

  constructor() { }

  async buscarDestino(termino:string):Promise<ResultadoWebSer> {
    const url = `${this.urlPrincipal}autosuggest?name=${termino}&radius=124742000&lon=81.705584&lat=-68.067791&apikey=${this.apiKey}`
    const resultado = await fetch(url)
    const data = await resultado.json()
    return data
  }

  async buscarDatos(nombre:string):Promise<destinosResultadoWS> {
      const url = `${this.urlPrincipal}xid/${nombre}?&apikey=${this.apiKey}`
      const resultado = await fetch(url)
      const data = await resultado.json()
      return data
  }
  
}
