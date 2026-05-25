import { useState }
  from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import Navbar
  from "../components/Navbar";

import "../css/Auth.css";

import {
  loginUser,
} from "../services/authService";

function Login() {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  /* SUBMIT */

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        setError("");

        const data =
          await loginUser({

            email,

            password,

          });

        /* SAVE USER */

        localStorage.setItem(
          "userInfo",
          JSON.stringify(data)
        );

        /* REDIRECT */

        navigate("/");

        window.location.reload();

      } catch (error) {

        setError(
          error.response?.data?.message ||
          "Login Failed"
        );

      } finally {

        setLoading(false);

      }

  };

  return (
    <>
      <Navbar />

      <section className="section">

        <div className="container auth-container">

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            <h2>
              Welcome Back
            </h2>

            {/* ERROR */}
            {error && (

              <p className="auth-error">
                {error}
              </p>

            )}

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"

              value={email}

              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password"

              value={password}

              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            {/* BUTTON */}
            <button
              className="btn"
              type="submit"
            >

              {loading
                ? "Logging In..."
                : "Login"}

            </button>

            {/* REGISTER */}
            <p className="auth-switch">

              Don't have an account?

              <Link to="/register">
                Register
              </Link>

            </p>

          </form>

        </div>

      </section>
    </>
  );
}

export default Login;