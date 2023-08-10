import React from "react";
import Adminnav from "../../comps/Adminnav";
import Blognav from "../../comps/blognav";
import Footer from "../../comps/footer";
import Footermain from "../../comps/Footermain";
import Statichook from "@/hooks/statichook";
import Navbar from "../../comps/Navbar";

export const getServerSideProps = async () => {
  const { getIndustry, getService } = Statichook();

  const getindustry = await getIndustry();
  const getservice = await getService();

  return {
    props: {
      getindustry,
      getservice,
    },
  };
};

const index = ({ getindustry }) => {
  return (
    <>
      <main className=" admin">
        <Navbar />
        <section className="advert">
          <div className="advert__grid advert__grid--modify">
            <div>
              <div className="my-5">
                <h1 className="">About us</h1>
              </div>
              <div className="my-5">
                <h2 className="">What do we do</h2>
                <p className="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  dolor, molestiae odit expedita illum natus inventore!
                  Cupiditate alias porro deleniti fugit praesentium ipsam
                  repudiandae accusamus, vel odit, vero facilis maiores.
                </p>
              </div>
              <div className="my-5">
                <h2 className="">Aim</h2>
                <p className="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  dolor, molestiae odit expedita illum natus inventore!
                  Cupiditate alias porro deleniti fugit praesentium ipsam
                  repudiandae accusamus, vel odit, vero facilis maiores.
                </p>
              </div>
              <div className="my-5">
                <h2 className="">Mission</h2>
                <p className="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  dolor, molestiae odit expedita illum natus inventore!
                  Cupiditate alias porro deleniti fugit praesentium ipsam
                  repudiandae accusamus, vel odit, vero facilis maiores.
                </p>
              </div>
            </div>

            <div>
              <div>
                {/* <!-- start of advert__img2 --> */}
                <a href="" className="advert__img2">
                  <img src="./asset/img/ard1.png" alt="" />
                </a>
                {/* <!-- advert__img2 --> */}

                {/* <!-- tags this are the tags section
              
              --> */}
                <div className="mb-5 border-bottom post__allpost">
                  <span>
                    <h5>Tags</h5>
                  </span>
                </div>

                <div className="advert__tags">
                  <a a href="">
                    fire extinguishers
                  </a>
                  <a a href="">
                    Safety
                  </a>
                  <a a href="">
                    Helment
                  </a>
                  <a a href="">
                    Safety boots
                  </a>
                  <a a href="">
                    Reflextive Vest
                  </a>
                  <a a href="">
                    News
                  </a>
                  <a a href="">
                    Kitchen Fire
                  </a>
                </div>
              </div>

              {/* <!-- this is the category section --> */}
            </div>
          </div>
        </section>
      </main>
      <Footermain getindustry={getindustry} />
    </>
  );
};

export default index;
