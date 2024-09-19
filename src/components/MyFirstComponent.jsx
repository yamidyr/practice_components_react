export const MyFirstComponent = () => {

  const name = "Inés María Oliveros";

  const github_profile = "https://github.com/yamidyr";

  const student = {
    name: "Yamid",
    last_name: "Yela",
    mobile: "3264076857",
    linkedin_profile: "https://www.linkedin.com/in/yamid-yela-rosero-6b86b987/",
  };

  return (
    <>
        <div>MyFirstComponent</div>
        <div className="container bg-warning-subtle">
        <h1>Temas de React</h1>
        <ul>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados Hooks</li>
            <li>Props</li>
        </ul>
        </div>
        <div className="container bg-info-subtle py-100">
          <h1>Datos de la profesora</h1>
          <p>Nombre: <strong>{ name }</strong></p>
          <p>GitHub profile: { github_profile } </p>
        </div>
        <div className="container bg-secondary-subtle py-100">
          <h1>Datos del estudiante</h1>
          <p>Nombre: <strong>{ student.name }</strong></p>
          <p>Apellido: { student.last_name }</p>
          <p>Celular: { student.mobile }</p>
          <p>LinkedIn: <a href={ student.linkedin_profile }>{ student.linkedin_profile }</a></p>
        </div>
        <div>
          <h1>Objeto Renderizado</h1>
          <pre>{JSON.stringify(student)}</pre>
        </div>
    </>
  )
}

