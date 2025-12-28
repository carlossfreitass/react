function LoginForm() {
    return (
        <form>
            <label htmlFor="txtNome">E-mail: </label>
            <input type="text" name="txtNome" id="txtNome" /> <br /> <br />

            <label htmlFor="psw">Senha</label>
            <input type="password" name="psw" id="psw" /> <br /> <br />

            <input type="submit" value="Logar" />
        </form>
    )
}

export default LoginForm