import './Login.css';

function Login (){
    return(
        <>
           <div className="login-container">
            <form action="/Login" method="POST" className="login-form">

                <h2>Welcome Back!</h2>
                <p className="login-subtitle">
                    Login to manage your events
                </p>

                <label htmlFor="email">Email Address:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="login-input"
                    placeholder="Enter your email"
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="login-input"
                    placeholder="Enter your password"
                    required
                    minLength="4"
                />

                <div className="login-options">
                    <label className="remember-label">
                        <input type="checkbox" name="remember" />
                        Remember me
                    </label>

                    <a href="/ForgotPassword">
                        Forgot Password?
                    </a>
                </div>

                <button type="submit" className="login-button">
                    Login
                </button>

                <p className="register-link">
                    Don't have an account?{' '}
                    <a href="/Register">Sign Up</a>
                </p>

            </form>
        </div>
        
        </>
    )
}

export default Login;