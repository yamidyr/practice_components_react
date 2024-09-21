

export const FourthComponent = () => {

    const handleClicked =  (e,name) => {
        alert("Has hecho click en el botón " + name);
    }

    const handleDoubleClick =  () => {
        alert("Has hecho doble click en el botón " + name);
    }

    const handleMouseEnter = () => {
        alert("Has ENTRADO a la caja");
    }

    const handleMouseLeave = () => {
        alert("Has salido de la caja");
    }

    const handleMouse = (e, action) => {
        alert( `Has ${action} la caja`);
    }

    const handleInsideInput = () => {
        console.log("Estás dentro del input, escribe tu nombre");
    }

    const handleOutsideInput = () => {
        console.log("Estás fuera del input, ")
    }

  return (
    <div>
        <h1>Fourth Component</h1>
        { /*Evento Click */}
        <div>
            <button
                className="btn btn-danger"
                onClick = { () => {
                    alert( "Hola, soy un evento click ");
                }}
                >
                    ¡¡Haz Click!!
            </button>
        </div>
        <div>
            <button
            className="btn btn-success" onClick={e => handleClicked(e,"Yamid") }>
                ¡Aquí también haz click!
            </button>
        </div>
        <div>
            <button
            className="btn btn-info" onDoubleClick={ handleDoubleClick }>
                ¡Only Double click!
            </button>
        </div>
        <div id = "box1" className="mt-4"
            onMouseEnter = { () => handleMouseEnter()}
            onMouseLeave = { () => handleMouseLeave()}
        >
            <p>Pasa el mouse por encima</p>
        </div>
        <div id = "box2" className="mt-4"
            onMouseEnter = {e => handleMouse(e,"entrado a")}
            onMouseLeave = {e => handleMouse(e,"salido de")}
        >
        </div>
        <div className="mt-100">
            <input type="text"
                onFocus={handleInsideInput}
                onBlur={handleOutsideInput}
            />
        </div>

    </div>
  )
}
