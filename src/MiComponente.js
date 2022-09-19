import React, {useState} from "react";

const MiComponente = ({stock,inital}) => {

  //  const [estado, setEstado] = useState();
    const [contador, setContador] = useState(1);
    //const [users, setUsers] = useState();

    const handlerClickAdd= () => {
        setContador(contador + 1);
    }

    const handlerClickMinus= () => {
        setContador (contador -1);
    }
 
    const handlerClickReset= () => {
        console.log (contador)

    }


    return (
        <>
        <h1>{contador}</h1>
        <button onClick={handlerClickAdd} disabled={contador>=stock} >Sumar</button>
        <button onClick={handlerClickMinus} disabled={contador===0 || contador <=1 } >Restar</button>
        <button onClick={handlerClickReset}>Agregar a Carrito</button>
        </>
    )
}

export default MiComponente