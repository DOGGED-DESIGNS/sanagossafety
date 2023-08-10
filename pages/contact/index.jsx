import { useState } from "react";
import Blognav from "../../comps/blognav";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../../comps/footer";
import Navbar from "../../comps/Navbar";
import { Generalget } from "@/context/General";
import Makepost from "@/hooks/makepost";
import Footermain from "../../comps/Footermain";
import Statichook from "@/hooks/statichook";

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
  const { addContact, contact, setContact } = Makepost();
  const { loading2 } = Generalget();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      e.target.elements.name.value == " " ||
      e.target.elements.email.value == "" ||
      e.target.elements.phone.value == "" ||
      e.target.elements.info.value == ""
    ) {
      setError(true);
    } else {
      const form = new FormData();

      form.append("message", "addcontact");
      form.append("name", e.target.elements.name.value);
      form.append("email", e.target.elements.email.value);
      form.append("phone", e.target.elements.phone.value);
      form.append("info", e.target.elements.info.value);

      await addContact(form);
    }
  };
  return (
    <>
      <main className="admin" style={{ background: "whitesmoke" }}>
        <Navbar />
        <div className="py-4 pl-3 bg-white my-5">
          <h1 className="headtext text-center">Reach out to us</h1>
          <p className="text-center m-auto" style={{ maxWidth: "800px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, atque maxime a iusto exercitationem deserunt pariatur
            rerum ut iste eaque aliquid rem cupiditate amet sequi incidunt
            nostrum porro impedit
          </p>
        </div>
        {/* <!-- end of blog nav --> */}
        <section className="contact advert">
          <div className="advert__grid advert__grid--modify">
            <div>
              <div className="contact__send">
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
                      <strong> kindly fill all form fields </strong>

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
                <AnimatePresence>
                  {contact?.message && (
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
                      className={`alert show  alert-dismissible alert-${contact.type} fade`}
                    >
                      <strong> {contact?.message} </strong>

                      <button
                        onClick={() => {
                          setContact({});
                        }}
                        className="close"
                      >
                        {" "}
                        &times;{" "}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
                <form
                  onSubmit={handleSubmit}
                  action=""
                  className="contact__form"
                >
                  <h2 className="headtext contact__h2">send us a message</h2>
                  <p className="p my-2">
                    your email address will never be made public. All fields are
                    required
                  </p>

                  <input
                    type="text"
                    placeholder="name"
                    maxLength={20}
                    name="name"
                  />
                  <input
                    type="email"
                    placeholder="email"
                    maxLength={20}
                    name="email"
                  />
                  <input
                    type="number"
                    placeholder="phone"
                    maxLength={20}
                    name="phone"
                  />
                  <textarea
                    name="info"
                    id=""
                    cols="30"
                    maxLength={200}
                    rows="10"
                    placeholder="message"
                  ></textarea>
                  <motion.button
                    whileTap={{
                      scale: "0.9",
                      originx: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                    }}
                    type="submit"
                  >
                    {" "}
                    {loading2 ? "loading" : "submit"}{" "}
                  </motion.button>
                </form>
              </div>
            </div>

            <div>
              <div className="contact__social">
                <div className="my-5">
                  <h2 className="headtext my-3">Contact Us</h2>
                  <p className="p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iste error modi vitae consectetur possimus quis earum porro
                    id
                  </p>
                </div>
                <div className="my-5">
                  <h2 className="headtext my-3">
                    We are available . Call Us Now
                  </h2>
                  <p className="my-2 p">
                    <i className="mr-2 fas fa-phone"></i> +234 907 617 6485
                  </p>
                  <p className="my-2 p">
                    <i className="mr-2 fas fa-envelope"></i>{" "}
                    uzoechijerry@gmail.com
                  </p>
                </div>
                <div className="my-5">
                  <h2 className="headtext mb-2">follow us on social media</h2>
                  <div className="contact__sociallinks">
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
