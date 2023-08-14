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
                  Sanagos Safety is a leading safety supplier company dedicated
                  to providing comprehensive safety solutions for businesses and
                  industries nationwide. With over a decade of experience, we
                  have established ourselves as a trusted partner, delivering
                  high-quality safety products as well as safety training to
                  ensure the well-being of both employees and customers.
                </p>
              </div>
              <div className="my-5">
                <h2 className="">Aim</h2>
                <p className="p">
                  The aim of Sangos Safety Equipment Supplier and Training
                  Company is to be a leading provider of comprehensive safety
                  solutions, offering a range of high-quality safety equipment
                  and specialized training programs to individuals, businesses,
                  and organizations. Our goal is to foster a culture of safety
                  consciousness, empower individuals with the necessary
                  knowledge and skills, and provide reliable safety products
                  that contribute to accident prevention and risk mitigation.
                </p>
                <h3 className=" font-weight-bolder">
                  Our specific objectives include:
                </h3>
                <ol>
                  <li>
                    <span className=" font-weight-bolder">
                      Customer Satisfaction:{" "}
                    </span>
                    Customer satisfaction is paramount to our success. We aim to
                    provide exceptional customer service, ensuring that our
                    clients receive prompt assistance, expert guidance, and the
                    right solutions to meet their safety needs.
                  </li>
                  <li>
                    <span className=" font-weight-bolder">
                      Industry Leadership:{" "}
                    </span>
                    As a leader in the safety sector, we strive to set industry
                    trends, adopt the latest technologies, and collaborate with
                    experts to continuously innovate and improve our offerings.
                  </li>
                  <li>
                    <span className=" font-weight-bolder">
                      Safety Awareness:{" "}
                    </span>
                    We aspire to create a safety-conscious community by raising
                    awareness about the importance of safety in various aspects
                    of life. Through educational resources, workshops, and
                    seminars, we aim to instill a proactive approach to safety.
                  </li>
                  <li>
                    <span className=" font-weight-bolder">
                      Expert Training:{" "}
                    </span>
                    Our training programs are designed to educate individuals
                    about potential hazards, safety protocols, and emergency
                    response strategies. We strive to equip participants with
                    the skills needed to prevent accidents and handle
                    emergencies effectively.
                  </li>
                  <li>
                    <span className=" font-weight-bolder">
                      Custom Solutions:{" "}
                    </span>
                    Recognizing that different industries and environments have
                    unique safety needs, we aim to provide tailored solutions
                    that address specific challenges. Whether it's personal
                    protective equipment (PPE) or specialized safety measures,
                    we endeavor to meet diverse requirements.
                  </li>
                  <li>
                    <span className=" font-weight-bolder">
                      Collaboration and Partnerships:{" "}
                    </span>
                    We seek to establish strong partnerships with businesses,
                    organizations, and community groups to collectively promote
                    safety initiatives, share best practices, and create safer
                    environments for all.
                  </li>
                  <li>
                    <span className=" font-weight-bolder">
                      Regulatory Compliance:{" "}
                    </span>
                    Our aim is to help our clients navigate complex safety
                    regulations and standards, ensuring that they remain
                    compliant with legal requirements and industry guidelines.
                  </li>
                  <li>
                    <span className=" font-weight-bolder">
                      Continuous Improvement:{" "}
                    </span>
                    We are committed to continuously evaluating and improving
                    our products and services based on customer feedback,
                    emerging technologies, and evolving safety practices.
                  </li>
                </ol>
                In essence, the aim of Sangos Safety Equipment Supplier and
                Training Company is to be a trusted ally in the pursuit of
                safety excellence. Through a combination of quality products,
                expert training, and a commitment to fostering a safety-oriented
                mindset, we aim to contribute to a safer world by reducing
                accidents and safeguarding lives.
              </div>
              <div className="my-5">
                <h2 className="">Mission</h2>
                <p className="p">
                  The mission of Sanagos Safety Supplier Company is to serve as
                  a steadfast partner in promoting safety, providing reliable
                  and innovative safety equipment solutions to individuals,
                  businesses, and organizations. We are dedicated to ensuring
                  that our clients have access to high-quality products that
                  enhance protection and minimize risks, while also fostering a
                  culture of safety consciousness within communities.
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
