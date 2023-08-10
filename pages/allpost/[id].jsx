import { useEffect, useState } from "react";
import Blognav from "../../comps/blognav";
import { useRouter } from "next/router";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Statichook from "@/hooks/statichook";
import { motion } from "framer-motion";
import Animatez from "@/Animate";
import Footer from "../../comps/footer";

export const getServerSideProps = async ({ query, params }) => {
  const {
    search,
    displayposts,
    pagenumberSearch,
    tagSearch,
    categoryEach,
    pagenumberTag,
    allpostnumber,
  } = Statichook();
  const { tagz } = query;
  const { id } = params;

  const number = await allpostnumber();
  const data = await displayposts(id);
  const categoryeach = await categoryEach();

  console.log(data);

  // const number = await pagenumber(cat);
  // const data = await paginatez(cat, id);

  if (data.length < 1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data,
      number: number,
      categoryeach: categoryeach,
      fallback: false,
    },
  };
};

const index = ({ data, number, categoryeach }) => {
  const { genchild, gencont } = Animatez();

  // this is the end of the animation section
  const [toggle, setToggle] = useState(false);
  const [force, setForce] = useState(null);
  const [tagz, setTagz] = useState([]);

  const reload = useRouter();
  const router = useRouter();
  const { query } = router;
  // handle pae chage
  const handlePage = (val) => {
    const val2 = val.selected + 1;
    router.push(`/allpost/${val2}`);

    // setToggle(!toggle);
  };
  // end of handling page chage
  useEffect(() => {
    let arr = [];

    data.map((ta) => {
      ta.tag.map((taa) => {
        arr.push(taa);
      });
    });
    const arrz = [...new Set(arr)];
    setTagz(arrz);

    console.log(parseInt(query.id));
    console.log(query.id);
    setForce(parseInt(query.id));

    console.log(force);

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
  }, [toggle]);

  return (
    <>
      <main className="admin">
        <Blognav />

        <div className="singlelinks">
          <a href="">sanagos</a>
          <a href="/allpost/1">posts</a>
        </div>

        {/* <!-- end of single head --> */}
        <section className="advert">
          {/* <h6 className="headtext mb-5">{`Search Result For : ${query.tagz}`}</h6> */}
          <div className="advert__grid advert__grid--modify">
            <motion.div variants={gencont} initial="initial" animate="animate">
              {data?.map((da) => {
                return (
                  <motion.div
                    variants={genchild}
                    className="post__recent post__recent--modify"
                  >
                    <div>
                      <div className="post__recent--img post__recent--img--modify">
                        <img
                          src={`http://localhost/sanagosApi/${da.img1}`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="post__recent--tag">
                      {da.tag.map((ta, index) => {
                        return (
                          <a
                            href=""
                            style={{ background: da.color[index] }}
                            className="post__recent--cat"
                          >
                            {ta}
                          </a>
                        );
                      })}

                      <br />
                      <a
                        className="post__recent--link post__recent--link--modify"
                        href={`/single/${da.uuid}`}
                      >
                        {da.title}
                      </a>
                      <span className="post__recent--tagspan">
                        By Sanagos . <span>03/4/23</span>
                      </span>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${da.des1.substring(0, 300)}`,
                        }}
                        className="post__post--p"
                      ></div>
                    </div>
                  </motion.div>
                );
              })}

              {/* <motion.div
                variants={genchild}
                className="post__recent post__recent--modify"
              >
                <div>
                  <div className="post__recent--img post__recent--img--modify">
                    <img src="./asset/img/presentation-8.png" alt="" />
                  </div>
                </div>
                <div className="post__recent--tag">
                  <a href="" className="post__recent--cat">
                    Extinguisher
                  </a>
                  <br />
                  <a
                    className="post__recent--link post__recent--link--modify"
                    href=""
                  >
                    How to use fire extinguishers properly to aviod damage to
                    the cylinder
                  </a>
                  <span className="post__recent--tagspan">
                    By Sanagos . <span>03/4/23</span>
                  </span>
                  <p className="post__post--p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Corrupti, possimus neque quos ad hic maiores. Ratione porro,
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={genchild}
                className="post__recent post__recent--modify"
              >
                <div>
                  <div className="post__recent--img post__recent--img--modify">
                    <img src="./asset/img/presentation-8.png" alt="" />
                  </div>
                </div>
                <div className="post__recent--tag">
                  <a href="" className="post__recent--cat">
                    Extinguisher
                  </a>
                  <br />
                  <a
                    className="post__recent--link post__recent--link--modify"
                    href=""
                  >
                    How to use fire extinguishers properly to aviod damage to
                    the cylinder
                  </a>
                  <span className="post__recent--tagspan">
                    By Sanagos . <span>03/4/23</span>
                  </span>
                  <p className="post__post--p  justifycontent-start ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Corrupti, possimus neque quos ad hic maiores. Ratione porro,
                  </p>
                </div>
              </motion.div> */}
              <div className=" mt-5">
                <ReactPaginate
                  previousLabel={"previous"}
                  forcePage={force - 1}
                  onPageChange={handlePage}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  pageCount={number.slice(-1)}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={1}
                  containerClassName={"pagination justifycontent-start "}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  activeClassName={"active"}
                />
              </div>
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

export default index;
