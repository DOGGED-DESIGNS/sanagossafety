import { useEffect, useState } from "react";
import Blognav from "../../comps/blognav";
import Statichook from "@/hooks/statichook";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../../comps/footer";
import Eachcomment from "../../comps/Eachcomment/Eachcomment";
import Makepost from "@/hooks/makepost";
import { useRouter } from "next/router";
export const getStaticPaths = async () => {
  const { displayposts, ultdrawpost } = Statichook();

  const data = await ultdrawpost();

  console.log(data);

  const paths = data.map((da) => {
    return {
      params: { id: da.uuid.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { singlePost, categoryEach, nextTwopost, tag, getComment } =
    Statichook();
  const id = context.params.id;
  const single = await singlePost(id);
  const categoryeach = await categoryEach();
  const getcomment = await getComment(id);
  const tags = await tag();

  const nexttwopost = await nextTwopost(id);

  return {
    props: { nexttwopost, single, tags, categoryeach, getcomment },
    revalidate: 30,
  };
};

const index = ({ single, categoryeach, tags, nexttwopost, getcomment }) => {
  const [tagz, setTagz] = useState([]);

  const [error, setError] = useState(false);

  const router = useRouter();

  const { addComment } = Makepost();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      e.target.elements.reply.value == "" ||
      e.target.elements.email.value == "" ||
      e.target.elements.name.value == ""
    ) {
      setError(true);
    } else {
      const form = new FormData();

      form.append("message", "addcomment");
      form.append("id", single.uuid);
      form.append("reply", e.target.elements.reply.value);
      form.append("email", e.target.elements.email.value);
      form.append("name", e.target.elements.name.value);
      form.append("website", e.target.elements.website.value);

      await addComment(form);

      router.reload();
    }
  };

  useEffect(() => {
    console.log(getcomment);

    let arr = [];

    tags.map((ta) => {
      ta.tag.map((taa) => {
        arr.push(taa);
      });
    });
    const arrz = [...new Set(arr)];
    setTagz(arrz);

    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        dots: false,
        nav: false, // Disable default navigation
        responsive: {
          0: {
            items: 2,
          },
          768: {
            items: 2,
          },
        },
      });

      // Custom Navigation
      $(".custom-next").click(function () {
        $(".owl-carousel").trigger("next.owl.carousel");
      });

      $(".custom-prev").click(function () {
        $(".owl-carousel").trigger("prev.owl.carousel");
      });
    });
  }, []);

  return (
    <>
      <main className="admin">
        <Blognav />

        <div className="singlelinks">
          <a href="">sanagos</a>
          <a href={`/allpost/1`}>posts</a>
          <a href={`/result/1/?cat=${single.id}`}> {single.id} </a>
          <p> {single.title} </p>
        </div>
        <section className="single">
          <div className="single__grid">
            <div>
              <div className="post__recent--tag">
                <a
                  href={`/result/1/?cat=${single.id}`}
                  className="post__recent--cat"
                >
                  {single.id}
                </a>
                <br />
                <h4 className="single__h4">{single.title}</h4>
                <span className="single__span">
                  <img src="/asset/icons/Profile.svg" alt="" />

                  {`By ${single.author}`}
                </span>
              </div>
            </div>
            <div>
              <div className="single__img">
                <img
                  src={`https://jeffmatthewpatten.com/api2/${single.img1}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end of single head --> */}
        <section className="advert">
          <div className="advert__grid advert__grid--modify">
            <div>
              <div className="singlesocial">
                <span>
                  <a href="">
                    {" "}
                    <i className="fab fa-twitter"></i>{" "}
                  </a>
                </span>
                <span>
                  <a href="">
                    {" "}
                    <i className="fab fa-instagram"></i>{" "}
                  </a>
                </span>
                <span>
                  <a href="">
                    {" "}
                    <i className="fab fa-facebook"></i>{" "}
                  </a>
                </span>
                <span>
                  <a href="">
                    {" "}
                    <i className="fab fa-linkedin"></i>{" "}
                  </a>
                </span>
              </div>
              {/* <!-- this is the description and image section --> */}

              <div className="my-2">
                {single.des1 && (
                  <div
                    className="pb-3 pt-5 "
                    dangerouslySetInnerHTML={{ __html: single.des1 }}
                  ></div>
                )}

                {single.img2 && (
                  <div className="imagepreset  ">
                    <img
                      src={`https://jeffmatthewpatten.com/api2/${single.img2}`}
                      alt=""
                    />
                  </div>
                )}

                {single.des2 && (
                  <div
                    className="pb-3 pt-5 "
                    dangerouslySetInnerHTML={{ __html: single.des2 }}
                  ></div>
                )}
              </div>
              <div className="my-2">
                {single.img3 && (
                  <div className=" imagepreset">
                    <img
                      className=" "
                      src={`https://jeffmatthewpatten.com/api2/${single.img3}`}
                      alt=""
                    />
                  </div>
                )}

                {single.des3 && (
                  <div
                    className="pb-3 pt-5 "
                    dangerouslySetInnerHTML={{ __html: single.des3 }}
                  ></div>
                )}
              </div>
              <div className="my-2">
                {single.img4 && (
                  <div className="imagepreset">
                    <img
                      src={`https://jeffmatthewpatten.com/api2/${single.img4}`}
                      alt=""
                    />
                  </div>
                )}

                {single.des4 && (
                  <div
                    className=" mb-3 mt-5"
                    dangerouslySetInnerHTML={{ __html: single.des4 }}
                  ></div>
                )}
              </div>
              <div className="my-2">
                {single.img4 && (
                  <div className="imagepreset">
                    <img
                      className=" mt-5 mb-3"
                      src={`https://jeffmatthewpatten.com/api2/${single.img5}`}
                      alt=""
                    />
                  </div>
                )}
                {single.des5 && (
                  <div
                    className=" mb-3 mt-5"
                    dangerouslySetInnerHTML={{ __html: single.des5 }}
                  ></div>
                )}
              </div>

              {/* people who commented */}

              <div className="answer__comment">
                <h2 className="answer__comment--h2">comments</h2>

                {getcomment.map((com) => {
                  return <Eachcomment {...com} />;
                })}
              </div>
              {/* end of people who commented */}

              {/* <!-- comment section
             --> */}
              <div className="mt-5 single__comment">
                <h5 className="headtext">Leave a reply</h5>
                <p className="p">
                  your email address will not be published the required fields
                  are marked
                  <span className="text-primary specialspan"> *</span>
                </p>

                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: "-20px",
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          stiffness: 500,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        y: "-30px",
                        transition: {
                          type: "spring",
                          // stiffness: 500,
                        },
                      }}
                      className={`alert show  alert-dismissible alert-danger fade`}
                    >
                      <strong> kindly fill the neccessary form fields </strong>

                      <button
                        onClick={() => {
                          setError(false);
                        }}
                        className="close"
                      >
                        {" "}
                        &times;{" "}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
                <form onSubmit={handleSubmit} action="">
                  <textarea
                    placeholder="comment *"
                    name="reply"
                    id=""
                    cols="30"
                    maxLength={200}
                    rows="10"
                  ></textarea>

                  <div className="single__comment--flex">
                    <input
                      placeholder="name *"
                      maxLength={20}
                      name="name"
                      type="text"
                    />
                    <input
                      placeholder="email *"
                      maxLength={20}
                      name="email"
                      type="email"
                    />
                    <input
                      placeholder="website"
                      maxLength={20}
                      name="website"
                      type="text"
                    />
                  </div>

                  {/* <small className="text-secondary">
                    <input className="mr-2" type="checkbox" /> save my name,
                    email and pasword on this browser for the next time i
                    comment
                  </small> */}

                  <motion.button
                    whileHover={{
                      origins: 0,
                      scale: 0.8,
                      boxShadow: "0px 0px 7px white",
                    }}
                    type="submit"
                    whileTap={{
                      originx: 0,
                      scale: 1.1,
                    }}
                    className="submit"
                  >
                    Post Comments
                  </motion.button>
                </form>
              </div>

              <div className="nextz__grid">
                <div className="nextz__img1">
                  {}
                  <img
                    src={`https://jeffmatthewpatten.com/api2/${nexttwopost[0].img1}`}
                    alt=""
                  />
                  <div>
                    <p className="p">
                      <span>
                        {" "}
                        <i className="fas fa-chevron-left"></i>{" "}
                      </span>{" "}
                      Previous Post
                    </p>
                    <a href={`/single/${nexttwopost[0].uuid}`}>
                      {" "}
                      {`${nexttwopost[0].title.substring(0, 50)}...`}
                    </a>
                  </div>
                </div>
                <div className="nextz__img2">
                  <img
                    src={`https://jeffmatthewpatten.com/api2/${nexttwopost[1].img1}`}
                    alt=""
                  />
                  <div>
                    <p className="p text-right">
                      Next Post
                      <span>
                        <i className="fas fa-chevron-right"></i>
                      </span>
                    </p>

                    <a href={`/single/${nexttwopost[1].uuid}`}>
                      {`${nexttwopost[1].title.substring(0, 50)}...`}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                {/* <!-- start of advert__img2 --> */}
                <a href="" className="advert__img2">
                  <img src="./asset/img/ard1.png" alt="" />
                </a>
                {/* <!-- advert__img2 --> */}
                <div className="mb-5 border-bottom post__allpost">
                  <span>
                    <h5>Category</h5>
                  </span>
                </div>
                <div className="owl-cover">
                  <div className="owl-carousel owl-theme">
                    {categoryeach.length < 1 ? (
                      <h4>No Post Availabe</h4>
                    ) : (
                      categoryeach.map((cat) => {
                        return (
                          <div className="item">
                            <a
                              href={`/result/1/?cat=${cat.id}`}
                              className="advert__cat text-decoration-none"
                              style={{ background: cat.color }}
                            >
                              <h5 className="advert__cat--h5"> {cat.total} </h5>
                              <p className="advert__cat--p"> {cat.id} </p>
                            </a>
                          </div>
                        );
                      })
                    )}

                    {/* <!-- Add more items as needed --> */}
                  </div>

                  <div className="custom-navigation">
                    <button className="custom-prev">
                      <i className="fa fa-chevron-left"></i>
                    </button>
                    <button className="custom-next">
                      <i className="fa fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
                {/* <!-- tags this are the tags section
              
              --> */}
                <div className="mb-5 border-bottom post__allpost">
                  <span>
                    <h5>Tags</h5>
                  </span>
                </div>

                <div className="advert__tags">
                  {tagz.length < 1 ? (
                    <h4>No Post</h4>
                  ) : (
                    tagz.map((ta) => {
                      return <a href={`/tagsearch/1/?tagz=${ta}`}>{ta}</a>;
                    })
                  )}
                </div>
              </div>

              {/* <!-- this is the category section --> */}
            </div>
          </div>
        </section>

        {/* <!-- footer --> */}
      </main>
      <Footer />
    </>
  );
};

export default index;
