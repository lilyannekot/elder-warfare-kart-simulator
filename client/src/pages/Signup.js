import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
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
};
