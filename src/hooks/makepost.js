import { useState } from "react";
import { constant } from "@/constant";
import axios from "axios";
import { Generalget } from "@/context/General";

const Makepost = () => {
  const [postmessage, setPostmessage] = useState({});

  // const {
  //   singlecontact,
  //   singlequote,
  //   setSinglequote,
  //   loading2,
  //   setLoading2,
  //   setSinglecontact,
  //   singlecomment,
  //   setSinglecomment,
  //   singleservice,
  //   setSingleservice,
  //   singlepost,
  //   setSinglepost,
  //   singlecategory,
  //   cattest,
  //   setCattest,
  //   catprev,
  //   setCatprev,
  //   setSinglecategory,
  //   singleindustry,
  //   setSingleindustry,
  // } = Generalget();

  const [updatemessage, setUpdatemessage] = useState({});

  const makePost = async (form) => {
    // setLoading(true);

    try {
      const data = await axios.post(
        "http://localhost/martinsApi/process.php",
        form,
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setPostmessage(data.data);
      console.log(data.data);

      // setLoading(false);
    } catch (err) {
      // console.log(err.response?.data);
      // console.log(err);
      setPostmessage({
        message: "something went wrong",
        type: "error",
        error: true,
      });
    }
  };
  const deleteContact = async (form) => {
    // setLoading(true);

    try {
      const data = await axios.post(
        "http://localhost/martinsApi/process.php",
        form,
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setPostmessage(data.data);
      console.log(data.data);

      // setLoading(false);
    } catch (err) {
      // console.log(err.response?.data);
      // console.log(err);
      setPostmessage({
        message: "something went wrong",
        type: "error",
        error: true,
      });
    }
  };

  return {
    makePost,
    postmessage,
    setPostmessage,
  };
};

export default Makepost;
