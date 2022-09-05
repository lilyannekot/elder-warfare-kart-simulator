import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Header from '../components/Header'
import Footer from '../components/Footer'

const Battle = (props) => {
 

    return (
        <div className="flex-row justify-center mb-4">
            <div className="flex-column justify-flex-start">
                <Header />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Battle;

