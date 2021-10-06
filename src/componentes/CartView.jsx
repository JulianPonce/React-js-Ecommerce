import { useContext } from "react";
import { contexto } from "../contexto/CartContext";

const CartView = () => {
  const { precioTotal, carrito, eliminarProducto,clear } = useContext(contexto);

  return (
    <>
     <div className = "carrito">
        <h1>carrito</h1>
        
        {carrito.map((element) => {
          return (
            <>
            <h3>{element.titulo}</h3>

            <button onClick={() => eliminarProducto(element.id)}>Borrar item</button>
            
           </>
           )
        
      })}
   
    </div>
    <button onClick={() => clear()}>vaciar Carrito</button> <h3>Total:{precioTotal()}</h3>   
    </>
  );
};

export default CartView;