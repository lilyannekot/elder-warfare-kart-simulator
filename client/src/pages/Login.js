import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  function moveInstructions() {
    navigate("/instructions");
  }

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12">
        <div className="card">
          <h2>Login</h2>
          <div className="card-body">
            {data ? (
              <div>
                <p>You have been successfully logged in!</p>
                <button
                  onClick={moveInstructions}
                  className="btn continue-button btn-danger"
                >
                  Go to Instructions
                </button>
              </div>
            ) : (
              <form className="form-styling" onSubmit={submitForm}>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={formChanges}
                />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={formChanges}
                />
                <br />
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
