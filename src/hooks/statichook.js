// import { useState } from "react";
import { constant } from "@/constant";

import axios from "axios";
import { Generalget } from "@/context/General";

// #F80000,#4500F8,#000000
// red, blue,black

// <p><span style="background-color: rgb(247, 247, 248); color: rgb(55, 65, 81);">A fire is a devastating event that can occur unexpectedly, posing a significant threat to life, property, and peace of mind. While we hope never to experience a house fire, it is essential to be prepared for such emergencies. One crucial safety measure every household should implement is the presence of a fire extinguisher. In this blog post, we will explore the reasons why having a fire extinguisher at home is of utmost i</span>mportance.</p>

const Statichook = () => {
  const displayrecent = async () => {
    const data = await axios.post(
      "http://localhost/martinsApi/process.php",
      {
        message: "getcontact",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
  };
  // this is count contact
  const countContact = async () => {
    const data = await axios.post(
      "http://localhost/martinsApi/process.php",
      {
        message: "count",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
  };
  const deleteContact = async (id) => {
    const data = await axios.post(
      "http://localhost/martinsApi/process.php",
      {
        message: "deletecontact",
        id: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
  };

  // const singleContact = async (id) => {
  //   setLoading2(true);
  //   try {
  //     const data = await axios.post(
  //       "https://jeffmatthewpatten.com/api2/php/process.php",
  //       {
  //         message: "singlecontact",
  //         id: id,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     setSinglecontact(data.data);
  //     setLoading2(false);
  //   } catch (err) {
  //     console.log(err?.response?.data);
  //     console.log(err);
  //   }
  //   //
  // };

  return {
    displayrecent,
    deleteContact,
    countContact,
  };
};

export default Statichook;

// https://jeffmatthewpatten.com/api2
// https://jeffmatthewpatten.com/api2
