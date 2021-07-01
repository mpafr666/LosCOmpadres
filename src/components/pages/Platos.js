

import {useEffect, useState } from "react";
import { obtenerProductos } from "./Products/ProductoService"
import ListaProducto from "./Products/PortalProductos"

function PortadaView () {

    const [productos, setProductos] = useState([])


    const getProductos = async () =>{
        let productosObtenidos = await obtenerProductos()
        setProductos(productosObtenidos)

    }


    useEffect(()=>{
        getProductos()

    },[])


    return (

    <div>
        <ListaProducto productos={productos} categoria= "nombre"/>
    </div>
    )
}

export default PortadaView