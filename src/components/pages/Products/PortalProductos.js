import {useState, useEffect,Fragment,useContext} from 'react';
import {useParams} from 'react-router-dom';
import { obtenerProductosPorId } from './ProductoService';
import {CarritoContext} from '../context/carritoContext';
import Swal from 'sweetalert2';
import {useHistory} from "react-router-dom"

function ListaProducto ({productos, categoria}) {
    const [producto,setProducto] = useState({});
    const [cargando,setCargando] = useState(true);

    let { id } = useParams(); //me da unobjeto con todos los parámetros
    let {anadirProducto} = useContext(CarritoContext);//indica que voy a obtener del context
    let history = useHistory();

    const anadirProductoACarrito = () => {
        anadirProducto({...producto})
        Swal.fire({
          icon:'success',
          title:'Producto Añadido!',
          showConfirmButton:true,
          showDenyButton:true,
          confirmButtonText:'Seguir Comprando',
          denyButtonText:'Ir a carrito'
        }).then((resultado)=>{
          if(resultado.isConfirmed){
            history.push('/')
          }else if(resultado.isDenied){
            history.push('/carrito')
          }
        })
      }
    
    const getProducto = async () =>{
        try{
            let productoObtenido = await obtenerProductosPorId(id);
            //para cuando acabemos de tener nuestro producto, indiquemos ok ya no estamos
            //cargando
            setProducto({...productoObtenido});
            setCargando(false);
        }catch(error){
            console.log(error)
        }
    };

    useEffect(()=>{
        getProducto();
    },[]);
    
    return (
        <div className="container">
            <div id="seccion">
            <h2 id="titulo">Lista de Productos</h2> 
            </div>
                            <div className="row"> 
                                    {productos.map((prod,i)=>(
                                    <div className="col-6 col-lg-3" key={i}>
                                        <div className="card mb-4">
                                        <div className="card-img-caption">    
                                        <img className="card-img-top" src={prod.fotos[0]}/>
                                        <div className="card-body">
                                            <h6 className="card-title"> {prod.nombre}</h6>
                                            <span>{prod.descripcion}</span><br/>
                                            <span className="fw-bold">S/ {prod.precio}</span><br/>
                                            <button className="btn btn-dark btn-lg" onClick={anadirProductoACarrito}>
                                                Añadir a Carrito
                                            </button>
                                        </div>
                                        </div> 
                                    </div>
                                    </div>

                        ))}
        
                             </div>
        </div>
    )
}

export default ListaProducto