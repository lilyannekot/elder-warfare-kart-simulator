import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // Update state based on form input changes
  const formChanges = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Function to allow submitting of form
  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }

    // Clear form values once form is submitted
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12">
        <div className="card">
          <h4 className="text-light">Login</h4>
          <div>
            {data ? (
              <p>
                <Link to="/instructions">Head to Instructions Page</Link>
              </p>
            ) : (
              <form className="card-body" onSubmit={submitForm}>
                <input
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={formChanges}
                />
                <input
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={formChanges}
                />
                <button
                  className="btn btn-danger"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Login
                </button>
              </form>
            )}

            {error && (
              <div className="bg-danger text-white">{error.message}</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
