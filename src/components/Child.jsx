import PropTypes from "prop-types"

export const Child = (props) => {

  const handleSetName = () => {
    const newName = prompt("Escriba el nuevo nombre");
    props.nameState(newName);
  }
  return (
    <>
        <div>Child</div>
        <p>{ props.name }</p>
        <button className="btn btn-info" onClick={ handleSetName }>Cambiar nombre</button>
    </>
  )
}

Child.propTypes = {
    name: PropTypes.string,
    nameState: PropTypes.func
}