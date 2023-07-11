function Componente1({name, img, description}) {
    return(
        <div>
            <h2>{name}</h2>
            <img src={img} alt="nombre" width="200px"/>
            <p>{description}</p>
        </div>
    )
}
export default Componente1;