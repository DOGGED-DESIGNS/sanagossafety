import { useState } from "react";
import { constant } from "@/constant";
import axios from "axios";
import { Generalget } from "@/context/General";

const Makepost = () => {
  const [postmessage, setPostmessage] = useState({});
  const [loading, setLoading] = useState(false);
  const [servicemessage, setServicemessage] = useState({});
  const [catmessage, setCatmessage] = useState({});
  const [catupdate, setCatupdate] = useState({});
  const [indusmessage, setIndusmessage] = useState({});
  const [contact, setContact] = useState({});
  const [uup, setUup] = useState({});
  const [quote, setQuote] = useState({});

  const {
    singlecontact,
    singlequote,
    setSinglequote,
    loading2,
    setLoading2,
    setSinglecontact,
    singlecomment,
    setSinglecomment,
    singleservice,
    setSingleservice,
    singlepost,
    setSinglepost,
    singlecategory,
    cattest,
    setCattest,
    catprev,
    setCatprev,
    setSinglecategory,
    singleindustry,
    setSingleindustry,
  } = Generalget();

  const [updatemessage, setUpdatemessage] = useState({});

  const makePost = async (form) => {
    setLoading(true);

    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
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

      setLoading(false);
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
    }
  };
  const addIndustry = async (form) => {
    setLoading2(true);

    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        form,
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setIndusmessage(data.data);
      setLoading2(false);
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
    }
  };
  const addContact = async (form) => {
    setLoading2(true);

    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        form,
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setContact(data.data);
      setLoading2(false);
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
    }
  };
  const addQuote = async (form) => {
    setLoading2(true);

    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        form,
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setQuote(data.data);
      setLoading2(false);
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
    }
  };

  const updateService = async (form) => {
    setLoading2(true);

    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        form,
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data.data);
      setUup(data.data);
      setLoading2(false);
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
    }
  };
  const addService = async (form) => {
    setLoading2(true);

    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        form,
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setServicemessage(data.data);
      setLoading2(false);
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
    }
  };
  const addComment = async (form) => {
    setLoading2(true);

    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        form,
        {
          headers: {
            // "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // setServicemessage(data.data);
      setLoading2(false);
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
    }
  };
  const updatePost = async (form) => {
    setLoading(true);

    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        form,
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUpdatemessage(data.data);
      console.log(data.data);

      setLoading(false);
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
    }
  };
  const singleComment = async (uuid) => {
    setLoading(true);
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "singlecomment",
          uuid: uuid,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSinglecomment(data.data);

      setLoading(false);
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };

  const singleService = async (uuid) => {
    setLoading(true);
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "singleservice",
          id: uuid,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSingleservice(data.data);

      setLoading(false);
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const postCategory = async (title) => {
    setLoading(true);
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "postcategory",
          title: title,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setCatmessage(data.data);

      setLoading(false);
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };

  const singleCategory = async (title) => {
    setLoading(true);
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "singlecategory",
          title: title,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setCattest(data.data.title);

      setCatprev(data.data.title);

      setLoading(false);
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const updateCategory = async (title, prev) => {
    setLoading(true);
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "updatecategory",
          title: title,
          prev: prev,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setCatupdate(data.data);

      setLoading(false);
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };

  const singleQuote = async (id) => {
    setLoading2(true);
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "singlequote",
          uuid: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSinglequote(data.data);
      setLoading2(false);
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const singlePost2 = async (uuid) => {
    setLoading2(true);
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "singlepost2",
          uuid: uuid,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSinglepost(data.data[0]);
      console.log(data.data[0]);
      setLoading2(false);
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };

  const singleContact = async (id) => {
    setLoading2(true);
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "singlecontact",
          id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSinglecontact(data.data);
      setLoading2(false);
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };

  return {
    makePost,
    updatemessage,
    updatePost,
    singleService,
    addService,
    updateService,
    servicemessage,
    setServicemessage,
    setUup,
    uup,
    postmessage,
    setPostmessage,
    postCategory,
    addContact,
    indusmessage,
    setIndusmessage,
    quote,
    setQuote,
    singlePost2,
    setUpdatemessage,
    addComment,
    catmessage,
    singleQuote,
    setCatmessage,
    loading,
    addIndustry,
    singleCategory,
    singleContact,
    updateCategory,
    singleComment,
    setCatupdate,
    contact,
    addQuote,
    setContact,
    catupdate,
  };
};

export default Makepost;
