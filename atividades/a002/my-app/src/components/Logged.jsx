import LoginForm from "./LoginForm"

function Logged(props) {
    const isLoggedIn = props.isLoggedIn

    return (
        <div>
            <div>
                {
                    isLoggedIn ? (
                        <p>Bem-vindo, você está conectado!</p>
                    ) : (
                        <div>
                            <p>Por favor, faça login.   </p>
                            <LoginForm />
                        </div>
                    )
                }
            </div>

            <div>
                {isLoggedIn && <button>Logout</button>}
            </div>
        </div>
    )
}

export default Logged