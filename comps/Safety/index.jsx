import { useState, useEffect } from "react";
import Statichook from "@/hooks/statichook";

const index = ({ id }) => {
  const [getRelatedss, setgetRelatedss] = useState([]);
  useEffect(() => {
    const getSse = async () => {
      const { getRelatedsafety } = Statichook();

      const data = await getRelatedsafety(id);

      setgetRelatedss(data);
    };

    //   run the fuction

    getSse();
  }, []);

  return (
    <>
      {getRelatedss?.length < 1 ? (
        <>
          <h4 className="text-center text-sanaccent "> no item </h4>
        </>
      ) : (
        getRelatedss?.map((get) => {
          return (
            <div key={get.uuid}>
              <div className=" p-1 border my-2 alignz flex flex-wrap gap-1  ">
                {get?.item == "bucket" && (
                  <img className=" m-0" src="/asset/san/bucket.svg" alt="" />
                )}
                {get?.item == "extinguisher" && (
                  <img
                    className=" m-0"
                    src="/asset/san/fireextinguisher.svg"
                    alt=""
                  />
                )}
                {get?.item == "firealarm" && (
                  <img className=" m-0" src="/asset/san/firealarm.svg" alt="" />
                )}
                {get?.item == "smokealarm" && (
                  <img
                    className=" m-0"
                    src="/asset/san/smokealarm.svg"
                    alt=""
                  />
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
              {get?.install == "yes" && (
                <>
                  <hr className=" border-2 border-solid text-green-600" />
                  <p className=" my-1 p2 text-green-600">install</p>
                </>
              )}
            </div>
          );
        })
      )}
    </>
  );
};

export default index;
