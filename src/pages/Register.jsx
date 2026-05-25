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
  registerUser,
} from "../services/authservice";

function Register() {

  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

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
          await registerUser({

            name,

            email,

            password,

          });

        /* AUTO LOGIN */

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
          "Registration Failed"
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
              Create Account
            </h2>

            {/* ERROR */}

            {error && (

              <p className="auth-error">
                {error}
              </p>

            )}

            {/* NAME */}

            <input
              type="text"
              placeholder="Name"

              value={name}

              onChange={(e) =>
                setName(e.target.value)
              }
            />

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
                ? "Creating..."
                : "Register"}

            </button>

            {/* LOGIN */}

            <p className="auth-switch">

              Already have an account?

              <Link to="/login">
                Login
              </Link>

            </p>

          </form>

        </div>

      </section>
    </>
  );
}

export default Register;