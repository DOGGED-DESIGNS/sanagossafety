// import { useState } from "react";
import { constant } from "@/constant";

import axios from "axios";

// #F80000,#4500F8,#000000
// red, blue,black

// <p><span style="background-color: rgb(247, 247, 248); color: rgb(55, 65, 81);">A fire is a devastating event that can occur unexpectedly, posing a significant threat to life, property, and peace of mind. While we hope never to experience a house fire, it is essential to be prepared for such emergencies. One crucial safety measure every household should implement is the presence of a fire extinguisher. In this blog post, we will explore the reasons why having a fire extinguisher at home is of utmost i</span>mportance.</p>

const Statichook = () => {
  const displayrecent = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api/php/process.php",
      {
        message: "recent",
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

  const displayposts = async (num) => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api/php/process.php",
      {
        message: "drawpost",
        num: num,
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
  const singlePost = async (id) => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api/php/process.php",
      {
        message: "singlepost",
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
  const top = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api/php/process.php",
      {
        message: "top",
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
  const trending = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api/php/process.php",
      {
        message: "trending",
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
  const tag = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api/php/process.php",
      {
        message: "tag",
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

  //
  const categoryEach = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api/php/process.php",
      {
        message: "categoryeach",
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
  const paginatez = async (cat, number) => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api/php/process.php",
      {
        message: "paginate",
        cat: cat,
        num: number,
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
  const pagenumber = async (cat) => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api/php/process.php",
      {
        message: "pagenumber",
        cat: cat,
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

  const category = async () => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api/php/process.php",
        {
          message: "drawcategory",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data?.data;
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const search = async (num, cat) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api/php/process.php",
        {
          message: "search",
          num: num,
          search: cat,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data?.data;
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const pagenumberSearch = async (search) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api/php/process.php",
        {
          message: "pagenumbersearch",
          search: search,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data?.data;
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const tagSearch = async (num, tag) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api/php/process.php",
        {
          message: "tagsearch",
          num: num,
          search: tag,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data?.data;
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const pagenumberTag = async (cat) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api/php/process.php",
        {
          message: "pagenumbertag",
          search: cat,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data?.data;
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const allpostnumber = async () => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api/php/process.php",
        {
          message: "allpostnumber",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data?.data;
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const ultdrawpost = async () => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api/php/process.php",
        {
          message: "ultdrawpost",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data?.data;
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const nextTwopost = async (uuid) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api/php/process.php",
        {
          message: "nexttwopost",
          uuid: uuid,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data?.data;
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const contactNum = async (uuid) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api/php/process.php",
        {
          message: "contactnum",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data?.data;
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const postNum = async (uuid) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api/php/process.php",
        {
          message: "postnum",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data?.data;
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const categoryNum = async (uuid) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api/php/process.php",
        {
          message: "categorynum",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data?.data;
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const quoteNum = async (uuid) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api/php/process.php",
        {
          message: "quotenum",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data?.data;
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const selectSingle = async (uuid) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api/php/process.php",
        {
          message: "selectsingle",
          uuid: uuid,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data?.data;
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  return {
    category,
    contactNum,
    categoryNum,
    postNum,
    quoteNum,
    allpostnumber,
    pagenumberSearch,
    tagSearch,
    ultdrawpost,
    search,
    selectSingle,
    nextTwopost,
    pagenumberTag,
    displayposts,
    displayrecent,
    categoryEach,
    trending,
    top,
    tag,
    singlePost,
    pagenumber,
    paginatez,
  };
};

export default Statichook;
