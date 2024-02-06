import { useState } from "react";
import axios from "axios";

const Makepost = () => {
  // use state section

  const [error, setError] = useState(false);

  // send client
  const sendClient = async (id, email, phone, location, tell) => {
    const data = await axios.post(
      "http://localhost:7000/api/insertclient",
      {
        id,
        email,
        phone,
        location,
        tell,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    setError(data.data.error);
  };

  // send ppe
  const sendPpe = async (item, qunt, type) => {
    const data = await axios.post(
      "http://localhost:7000/api/insertppe",
      {
        item,
        qunt,
        type,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (data.data.error) {
      throw new Error("qunty field should not be empty");
    }
  };

  // send safety

  const sendSafety = async (item, qunt, install, type) => {
    const data = await axios.post(
      "http://localhost:7000/api/insertsafety",
      {
        item,
        qunt,
        install,
        type,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    console.log(data.data);
    if (data.data.error) {
      throw new Error("qunty field cannot be empty");
    }
  };

  // get whole client
  const getWholeclient = async () => {
    try {
      const data = await axios.get("http://localhost:7000/api/getwholeclient", {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      return data.data.message;
    } catch (err) {
      console.log(err);
    }
  };

  // delete client

  const deleteClient = async (id) => {
    const data = await axios.delete(
      `http://localhost:7000/api/deleteclient/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return data.data.error;
  };

  // get related ppe

  const getRelatedppe = async (id) => {
    const data = await axios.get(
      `http://localhost:7000/api/getrelatedppe/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return data.data.message;
  };

  // get related safety
  const getRelatedsafety = async (id) => {
    const data = await axios.get(
      `http://localhost:7000/api/getrelatedsafety/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return data.data.message;
  };

  return {
    sendClient,
    getWholeclient,
    sendPpe,
    sendSafety,
    getRelatedppe,
    getRelatedsafety,
    deleteClient,
  };
};

export default Makepost;

// http://localhost/martinsApi/process.php
