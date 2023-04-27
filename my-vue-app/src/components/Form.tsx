export default function Form() {
    return (
        <div className="main">
            <p className="sign">Jovem programador</p>

            <form className="form">
                <input type="text" className="userName" placeholder="Usuário" />
                <input type="password" className="password" placeholder="Senha" />

                <a href="#" className="submit">Entrar</a>
                <p className="forgot">
                  <a href="#" className="">Esqueceu a senha?</a>
                </p>
            </form>

        </div>
    )
}