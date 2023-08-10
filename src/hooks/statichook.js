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
      "https://jeffmatthewpatten.com/api2/php/process.php",
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
      "https://jeffmatthewpatten.com/api2/php/process.php",
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
  const getQuote = async (num) => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "getquote",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
    console.log(data.data);
  };
  const singlePost = async (id) => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
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
  const ultdrawpost = async (id) => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
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

    return data.data;
  };
  const top = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
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
  const topPage = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "topstorypage",
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
  const topPaginate = async (num) => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "toppaginate",
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
  const trendPage = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "trendpage",
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
  const trendPaginate = async (num) => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "trendpaginate",
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
  const trending = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
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
      "https://jeffmatthewpatten.com/api2/php/process.php",
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
      "https://jeffmatthewpatten.com/api2/php/process.php",
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
  const getIndustry = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "getindustry",
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
      "https://jeffmatthewpatten.com/api2/php/process.php",
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
      "https://jeffmatthewpatten.com/api2/php/process.php",
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
        "https://jeffmatthewpatten.com/api2/php/process.php",
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
        "https://jeffmatthewpatten.com/api2/php/process.php",
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
        "https://jeffmatthewpatten.com/api2/php/process.php",
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
        "https://jeffmatthewpatten.com/api2/php/process.php",
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
        "https://jeffmatthewpatten.com/api2/php/process.php",
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
        "https://jeffmatthewpatten.com/api2/php/process.php",
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

  const nextTwopost = async (uuid) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
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
        "https://jeffmatthewpatten.com/api2/php/process.php",
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
  const contactView = async (uuid) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "viewcontact",
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
  const quoteView = async (uuid) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "viewquote",
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
  const quoteNumview = async (uuid) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "quotenumview",
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
  const contactNumview = async () => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "contactnumview",
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
        "https://jeffmatthewpatten.com/api2/php/process.php",
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
        "https://jeffmatthewpatten.com/api2/php/process.php",
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
  const quoteNum = async () => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
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
  const commentNum = async () => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "commentnum",
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
  const industryNum = async () => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "industrynum",
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
  const serviceNum = async () => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "servicenum",
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
  const hitNum = async () => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "hitnum",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data?.data.hits;
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const getService = async (uuid) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "getservice",
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
  const getComment = async (id) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "getcomment",
          id: id,
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
  const getContact = async (uuid) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
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
      return data?.data;
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const joinComment = async () => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "joincomment",
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
  const deleteComment = async (uuid) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "deletecomment",
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
  const deletePost = async (uuid) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "deletepost",
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
  const deleteContact = async (uuid) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "deletecontact",
          id: uuid,
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
  const deleteQuote = async (uuid) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "deletequote",
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
  const deleteIndustry = async (id) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "deleteindustry",
          id: id,
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
  const deleteService = async (id) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "deleteservice",
          id: id,
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
  const singleService = async (id) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "singleservice",
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
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  const singleIndustry = async (id) => {
    try {
      const data = await axios.post(
        "https://jeffmatthewpatten.com/api2/php/process.php",
        {
          message: "singleindustry",
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
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
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
    category,
    deleteContact,
    deleteQuote,
    topPage,
    topPaginate,
    trendPage,
    trendPaginate,
    contactNum,
    categoryNum,
    commentNum,
    industryNum,
    hitNum,
    deletePost,
    serviceNum,
    postNum,
    quoteNum,
    allpostnumber,
    pagenumberSearch,
    deleteIndustry,
    tagSearch,
    ultdrawpost,
    getQuote,
    search,
    nextTwopost,
    pagenumberTag,
    joinComment,
    displayposts,
    deleteComment,
    displayrecent,
    getService,
    getContact,
    quoteNumview,
    contactNumview,
    quoteView,
    contactView,
    categoryEach,
    trending,
    singleService,
    top,
    deleteService,
    tag,
    singleIndustry,
    getComment,
    getIndustry,
    singlePost,
    pagenumber,
    paginatez,
  };
};

export default Statichook;

// https://jeffmatthewpatten.com/api2
// https://jeffmatthewpatten.com/api2
