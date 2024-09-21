
export const SecondComponent = () => {

    const books = [
        "El gato que amaba los libros",
        "Bajo la Rueda",
        "La increible y triste historia de la candida Erendira y su abuela desalmada",
        "Los funerales de la mamá grande",
        "La Iliada"
    ]

  return (
    <>
        <h1>Libros 2024</h1>
        <div>
            <ul>
                {
                    books.length >= 1 ?
                        (
                            books.map((book,index) =>{
                                return <li key={ index }>{ book }</li>
                            })
                        ) :
                        (
                            <p>No existen libros</p>
                        )
                }
            </ul>
        </div>
    </>
    )
}
