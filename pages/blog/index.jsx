import Navbar from "../../comps/Navbar";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
// import htmlReactParser from "react-html-parser";
// import htmlReactParser from "html-react-parser";
import { renderToString } from "react-dom/server";
import { motion, AnimatePresence } from "framer-motion";
import Animatez from "@/Animate";
import Editor from "../../comps/Editor";
import Blognav from "../../comps/blognav";
import { Contextprovider } from "@/context/General";
import Statichook from "@/hooks/statichook";
import Footer from "../../comps/footer";
import Head from "next/head";

export const getServerSideProps = async () => {
  const { displayposts, displayrecent, categoryEach, trending, tag, top } =
    Statichook();

  const post = await displayposts(1);
  const recent = await displayrecent();
  const trendpost = await trending();
  const toppost = await top();
  const tags = await tag();
  const categoryeach = await categoryEach();

  console.log(categoryeach);

  return {
    props: { post, recent, trendpost, toppost, tags, categoryeach },
  };
};

const Blog = ({ post, recent, trendpost, toppost, tags, categoryeach }) => {
  const [togglesearch, setTogglesearch] = useState(false);

  const {
    linkcont,
    tapanimate,
    animatenav,
    menu,
    menuchild,
    genchild,
    gencont,
  } = Animatez();

  const [navtoggle, setNavtoggle] = useState(false);

  const [tagz, setTagz] = useState([]);

  // const convertStringToHTML = (htmlString) => {
  //   const parsedHTML = htmlReactParser(htmlString);
  //   const htmlElement = <div>{parsedHTML}</div>;
  //   const htmlOutput = renderToString(htmlElement);
  //   return htmlOutput;
  // };

  useEffect(() => {
    // i am setting the tags
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

  //  converting html to text
  // const getText = (html) => {
  //   const doc = new DOMParser().parseFromString(html, "text/html");
  //   return doc.body.textContent;
  // };

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Discover the essential insights and practical tips you need to create a safer house hold and work environment with Sanagos Safety Blog. From understanding industry-specific and household hazards to implementing effective safety protocols, our blog covers a wide range of topics tailored to different workplaces. Stay up-to-date with the latest regulations, best practices, and innovative solutions to protect employees, family members, prevent accidents, and ensure compliance. Whether you're a business owner, housewife, father manager, or employee, our blog empowers you to prioritize safety and well-being in the workplace and household"
        />

        <meta
          name="keywords"
          content=" Sanagos Safety, Sanagos, fire extinguisher,nigeria, safety boot, safety helment, fire safety, fire"
        />
        <link rel="stylesheet" href="/final/fontawesome.min.css" />
        <link rel="stylesheet" href="/swiper/owl.carousel.min.css" />
        <link rel="stylesheet" href="/swiper/owl.theme.default.css" />
        <link rel="stylesheet" href="/swiper/css/swiper-bundle.min.css" />
        {/* <link rel="stylesheet" href="./final/index.min.css" /> */}
        {/* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> */}
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="16x16"
        ></link>
        <title>SANAGOS BLOG</title>

        <script src="/jquery.3.4.1.js?cd=123"></script>
        <script src="/swiper/owl.carousel.min.js"></script>
        <script src="/final/all.js"></script>
        <script src="/swiper/js/swiper-bundle.min.js"></script>
      </Head>
      <main className="admin">
        <Blognav />

        {/* <!-- end of blog nav --> */}
        <section className="post">
          {/* <Editor
            onChange={(value) => {
            }}
          /> */}

          <div className="post__grid">
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              {post.length < 1 ? (
                <h2> NO POST </h2>
              ) : (
                post.slice(0, 2).map((pa) => {
                  return (
                    <motion.div variants={genchild} className="post__post">
                      <div className="post__post--img">
                        <img
                          src={`https://jeffmatthewpatten.com/api2${pa.img1}`}
                          alt=""
                        />
                        <a href={`/result/1?cat=${pa.id}`}> {pa.id} </a>
                      </div>
                      <a href={`/single/${pa.uuid}`}>{pa.title} </a>
                      {/* <div dangerouslySetInnerHTML={{ __html: pa.des2 }}></div> */}
                      <span>
                        {`By ${pa.author} . ${pa.time}`}
                        {/* By sanagos . <span>12/10/23</span> */}
                      </span>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${pa.des1.substring(0, 200)}...`,
                        }}
                        className="post__post--p"
                      >
                        {/* {pa.des1} */}
                      </div>
                    </motion.div>
                  );
                })
              )}
            </motion.div>
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              <motion.div variants={genchild} className="post__allpost">
                <span>
                  <h5>Recent Post</h5>
                </span>
                {/* <span>
                  <a href="#">All Post recent post</a>
                </span> */}
              </motion.div>
              {recent.length < 1 ? (
                <h2>NO POST</h2>
              ) : (
                recent.map((re) => {
                  return (
                    <motion.div variants={genchild} className="post__recent">
                      <div>
                        <div className="post__recent--img">
                          <img
                            src={`https://jeffmatthewpatten.com/api2${re.img1}`}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="post__recent--tag">
                        <Link
                          href={`/result/1?cat=${re.id}`}
                          className="post__recent--cat"
                        >
                          {re.id}
                        </Link>

                        <br />
                        <a
                          className="post__recent--link"
                          href={`/single/${re.uuid}`}
                        >
                          {`${re.title}`}
                        </a>
                        <br />
                        <span className="post__recent--tagspan">
                          {`By ${re.author} . ${re.time}`}
                          {/* By Sanagos . <span>03/4/23</span> */}
                        </span>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </motion.div>
          </div>
        </section>

        {/* <!-- top post trending section --> */}

        <section className="top">
          <div className="mb-5 post__allpost">
            <span>
              <h5>Top Post</h5>
            </span>
            <span>
              <a href="/alltop/1">All Top post</a>
            </span>
          </div>
          <motion.div
            variants={gencont}
            initial="initial"
            whileInView="animate"
            className="top__grid"
          >
            {toppost.length < 1 ? (
              <h2>No Post</h2>
            ) : (
              <motion.div variants={genchild}>
                <div className="top__grid--img1">
                  <img
                    src={`https://jeffmatthewpatten.com/api2/${toppost[0].img1}`}
                    alt=""
                  />
                  {/* <!-- grid one absolite --> */}
                  <div className="top__grid--move1">
                    <a
                      href={`/result/1?cat=${toppost[0].id}`}
                      className="post__recent--cat"
                    >
                      {toppost[0].id}
                    </a>
                    <br />
                    <motion.a
                      initial={{
                        x: 0,
                      }}
                      whileHover={{
                        x: "-30px",
                      }}
                      transition={{
                        stiffness: 700,
                      }}
                      className="  post__recent--link top__grid--link"
                      href=""
                    >
                      {toppost[0].title}
                    </motion.a>
                    <span className="post__recent--tagspan">
                      {`By ${toppost[0].author} . ${toppost[0].time}`}
                      {/* By Sanagos . <span>03/4/23</span> */}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              {toppost.length < 2 ? (
                <h2>No Post</h2>
              ) : (
                <motion.div variants={genchild} className="top__grid--img2">
                  <img
                    src={`https://jeffmatthewpatten.com/api2/${toppost[1].img1}`}
                    alt=""
                  />
                  {/* <!-- grid one absolite --> */}
                  <div className="top__grid--move2">
                    <a
                      href={`/result/1?cat=${toppost[1].id}`}
                      className="post__recent--cat"
                    >
                      {toppost[1].id}
                    </a>
                    <br />
                    <a
                      className="post__recent--link top__grid--link2"
                      href={`/single/${toppost[1].uuid}`}
                    >
                      {toppost[1].title}
                    </a>
                    <span className="post__recent--tagspan">
                      {`By ${toppost[1].author} . ${toppost[1].time}`}
                      {/* By Sanagos . <span>03/4/23</span> */}
                    </span>
                  </div>
                </motion.div>
              )}
              {toppost.length < 3 ? (
                <h2>No Post</h2>
              ) : (
                <motion.div variants={genchild} className="top__grid--img2">
                  <img
                    src={`https://jeffmatthewpatten.com/api2/${toppost[2].img1}`}
                    alt=""
                  />
                  {/* <!-- grid one absolite --> */}
                  <div className="top__grid--move2">
                    <a
                      href={`/result/1?cat=${toppost[2].id}`}
                      className="post__recent--cat"
                    >
                      {toppost[2].id}
                    </a>
                    <br />
                    <a
                      className="post__recent--link top__grid--link2"
                      href={`/single/${toppost[2].uuid}`}
                    >
                      {toppost[2].title}
                    </a>
                    <span className="post__recent--tagspan">
                      {`By ${toppost[2].author} . ${toppost[2].time} `}
                      {/* By Sanagos . <span>03/4/23</span> */}
                    </span>
                  </div>
                </motion.div>
              )}

              {/* <!-- this is the second grid2 --> */}
            </motion.div>
          </motion.div>
        </section>

        {/* <!-- trending post --> */}
        <section className="top top__modify">
          <div className="mb-5 post__allpost">
            <span>
              <h5>Trending posts</h5>
            </span>
            <span>
              <a href="/alltrend/1">All Trending post</a>
            </span>
          </div>
          <div className="top__grid top__grid--modify">
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              {trendpost.length < 1 ? (
                <h2>NO POSTS</h2>
              ) : (
                trendpost.slice(0, 2).map((trend) => {
                  return (
                    <motion.div variants={genchild} className="post__recent">
                      <div>
                        <div className="post__recent--img">
                          <img
                            src={`https://jeffmatthewpatten.com/api2/${trend.img1}`}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="post__recent--tag">
                        <a
                          href={`/result/1?cat=${trend.id}`}
                          className="post__recent--cat"
                        >
                          {trend.id}
                        </a>
                        <br />
                        <a
                          className="post__recent--link"
                          href={`/single/${trend.uuid}`}
                        >
                          {`${trend.title}`}
                        </a>
                        <span className="post__recent--tagspan">
                          {`By ${trend.author} . ${trend.time}`}
                        </span>
                      </div>
                    </motion.div>
                  );
                })
              )}

              {/* <!-- this is the second grid2 --> */}
            </motion.div>
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              {trendpost.length < 3 ? (
                <h2>NO POST</h2>
              ) : (
                trendpost.slice(2, 4).map((trend) => {
                  return (
                    <motion.div variants={genchild} className="post__recent">
                      <div>
                        <div className="post__recent--img">
                          <img
                            src={`https://jeffmatthewpatten.com/api2/${trend.img1}`}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="post__recent--tag">
                        <a href="" className="post__recent--cat">
                          {trend.id}
                        </a>
                        <br />
                        <a
                          className="post__recent--link"
                          href={`/single/${trend.uuid}`}
                        >
                          {trend.title}
                        </a>
                        <span className="post__recent--tagspan">
                          By {`${trend.author}`} . <span> {trend.time} </span>
                        </span>
                      </div>
                    </motion.div>
                  );
                })
              )}

              {/* <!-- this is the second grid2 --> */}
            </motion.div>
          </div>
        </section>
        {/* <!-- section --> */}
        <section className="advert">
          <div className="advert__grid">
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              <a href="" className="advert__img">
                <img src="./asset/img/ard2.png" alt="" />
              </a>

              {post.length < 1 ? (
                <h2>NO POST AVAILABLE</h2>
              ) : (
                post.slice(0, 3).map((ma) => {
                  return (
                    <motion.div
                      variants={genchild}
                      className="post__recent post__recent--modify"
                    >
                      <div>
                        <div className="post__recent--img post__recent--img--modify">
                          <img
                            src={`https://jeffmatthewpatten.com/api2/${ma.img1}`}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="post__recent--tag">
                        {ma.tag.map((ta, index) => {
                          return (
                            <a
                              href=""
                              style={{ background: ma?.color[index] }}
                              className="post__recent--cat"
                            >
                              {ta}
                            </a>
                          );
                        })}

                        <br />
                        <a
                          className="post__recent--link post__recent--link--modify"
                          href={`/single/${ma.uuid}`}
                        >
                          {ma.title}
                        </a>
                        <span className="post__recent--tagspan">
                          {`By ${ma.author} . ${ma.time}`}

                          {/* By Sanagos . <span>03/4/23</span> */}
                        </span>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${ma.des1.substring(0, 200)}...`,
                          }}
                          className="post__post--p"
                        ></div>
                        {/* <p className="post__post--p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Corrupti, possimus neque quos ad hic maiores. Ratione porro,
                  </p> */}
                      </div>
                    </motion.div>
                  );
                })
              )}
            </motion.div>
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

export default Blog;
