import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { MUTATION_ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";

var validator = require("validator");

const Signup = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [addUser] = useMutation(MUTATION_ADD_USER);

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
    if (validator.isEmail(formState.email)) {
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } else {
      alert('You need to enter a valid email address!')
    }
  };

  const navigate = useNavigate();

  function moveInstructions() {
    navigate("/instructions");
  }

  return (
    <main className="flex-row justify-center">
      <div>
        <div className="card">
          <h2>Signup</h2>
          <div className="card-body">
            <form className="form-styling" onSubmit={submitForm}>
              <label for="email">Email</label>
              <br />
              <input
                placeholder="Email"
                name="email"
                type="email"
                value={formState.email}
                onChange={formChanges}
              />
              <br />
              <label for="password">Password</label>
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
                onClick={moveInstructions}
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
