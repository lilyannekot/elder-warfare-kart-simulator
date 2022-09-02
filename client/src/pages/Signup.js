import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    characterName: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex-row justify-center">
      <div>
        <div className="card">
          <h4 className="text-light">Signup</h4>
          <div className="card-body">
            {data ? (
              <p>
                <Link to="/instructions">Head to Instructions Page</Link>
              </p>
            ) : (
              <form onSubmit={formChanges}>
                <input
                  placeholder="Username"
                  name="username"
                  type="username"
                  value={formState.username}
                  onChange={formChanges}
                />
                <input
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onchange={formChanges}
                />
                <input
                  placeholder="Character Name"
                  name="characterName"
                  value={formState.characterName}
                  onChange={formChanges}
                />
                <button
                  className="btn btn-danger"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Signup
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

export default Signup;
