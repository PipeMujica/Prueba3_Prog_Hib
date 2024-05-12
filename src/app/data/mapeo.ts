export interface infoPropietiesWS{
    xid: string
    name: string
}

export interface featureWS{
    type: string
    id: string
    properties: infoPropietiesWS
}

export interface ResultadoWebSer{
    type: string
    features: featureWS[]
}

//HICE UN NUEVO INTERFACE PARA DEJARLO COMO ARRAY PERO NO ME FUNCIONÓ
export interface destinosResultadoWS{
    Destinos: resultadoBusquedaWS[]
}

export interface resultadoBusquedaWS{
    xid: string
    name: string
    address: direccionWS
    preview: imagenWS
    precioAprox?: number 
}
export interface direccionWS{
    city: string
    country: string
}

export interface imagenWS{
    source: string
}


