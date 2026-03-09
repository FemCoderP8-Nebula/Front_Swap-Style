import useAuth from "../../hooks/useAuth"; 



const RegArticle=()=>{
     const { user } = useAuth();
    return(
        <main role="main">
            <p>Página de Registro de articulos</p>
            <p>Nombre usuario: {user.userName}</p>
            <p>Id de usuario: {user.id}</p>
            <div>
                

            </div>
        </main>
    )
}

export default RegArticle;