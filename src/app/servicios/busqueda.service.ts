import { Injectable } from '@angular/core';
import { ResultadoWebSer, destinosResultadoWS, resultadoBusquedaWS } from '../data/mapeo';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  
  apiKey = " numero de apikey "
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
