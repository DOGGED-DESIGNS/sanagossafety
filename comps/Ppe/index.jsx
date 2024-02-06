import { useState, useEffect } from "react";
import Statichook from "@/hooks/statichook";

const index = ({ id }) => {
  const [getRelatedpp, setGetRelatedpp] = useState([]);
  useEffect(() => {
    const getPpe = async () => {
      const { getRelatedppe } = Statichook();

      const data = await getRelatedppe(id);

      setGetRelatedpp(data);
    };

    //   run the fuction

    getPpe();
  }, []);

  return (
    <>
      {getRelatedpp.length < 1 ? (
        <>
          <h4 className="text-center  text-sanaccent "> no item </h4>
        </>
      ) : (
        getRelatedpp?.map((get) => {
          return (
            <div
              key={get.uuid}
              className=" p-1 border my-1 alignz flex-wrap flex gap-1  "
            >
              {get?.item == "boot" && (
                <img className=" m-0" src="/asset/san/boot.svg" alt="" />
              )}
              {get?.item == "goggles" && (
                <img className=" m-0" src="/asset/san/goggles.svg" alt="" />
              )}
              {get?.item == "reflective" && (
                <img className=" m-0" src="/asset/san/reflective.svg" alt="" />
              )}
              {get?.item == "helment" && (
                <img className=" m-0" src="/asset/san/helment.svg" alt="" />
              )}

              <div>
                <p className="p-1 p2  border-sanaccent border-2 border-solid">
                  X{get?.qunt}
                </p>
              </div>
              <div>
                <p className=" line-clamp-none  p2  text-sanaccent">
                  {" "}
                  {get?.type}{" "}
                </p>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default index;
