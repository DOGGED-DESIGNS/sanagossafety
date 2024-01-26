import React from "react";
import Statichook from "@/hooks/statichook";
import { useRouter } from "next/router";
const index = ({ id, email, phone, budget, name, mess, time }) => {
  // const route = useRouter();

  // const { deleteContact } = Statichook();
  return (
    <>
      <div className="admin__table--body">
        <div className="">
          <div className=" admin__table--body--time">
            <img src="/asset/clock.svg" alt="" />
            time
          </div>
          <p className="p2">uzoechi jeremiah</p>
        </div>
        <div>
          <p className=" p2 text-sanaccent"> uzoechiammie@gmail.com </p>
          <p> no 17 fabukade street shougunle</p>
          <p className="p2">09076176485</p>
        </div>
        <div>
          <div className=" p-1 border my-1 alignz flex-wrap flex gap-1  ">
            <img className=" m-0" src="/asset/san/reflective.svg" alt="" />

            <div>
              <p className="p-1 p2  border-sanaccent border-2 border-solid">
                X2
              </p>
            </div>
            <div>
              <p className=" line-clamp-none  p2  text-sanaccent">high</p>
            </div>
          </div>
          <div className=" p-1 border my-1 alignz flex-wrap flex gap-1  ">
            <img className=" m-0" src="/asset/san/boot.svg" alt="" />

            <div>
              <p className="p-1 p2  border-sanaccent border-2 border-solid">
                X2
              </p>
            </div>
            <div>
              <p className=" line-clamp-none  p2  text-sanaccent">high</p>
            </div>
          </div>
          <div className=" p-1 border my-1 alignz flex-wrap flex gap-1  ">
            <img className=" m-0" src="/asset/san/helment.svg" alt="" />

            <div>
              <p className="p-1 p2  border-sanaccent border-2 border-solid">
                X2
              </p>
            </div>
            <div>
              <p className=" line-clamp-none  p2  text-sanaccent">high</p>
            </div>
          </div>
          <div className=" p-1 border my-1 alignz flex-wrap flex gap-1  ">
            <img className=" m-0" src="/asset/san/goggles.svg" alt="" />

            <div>
              <p className="p-1 p2  border-sanaccent border-2 border-solid">
                X2
              </p>
            </div>
            <div>
              <p className=" line-clamp-none  p2  text-sanaccent">high</p>
            </div>
          </div>
        </div>
        <div>
          <div className=" my-1 p-1 border alignz flex flex-wrap gap-1  ">
            <img
              className=" m-0"
              src="/asset/san/fireextinguisher.svg"
              alt=""
            />

            <div>
              <p className="p-1 p2  border-sanaccent border-2 border-solid">
                X10
              </p>
            </div>
            <div>
              <p className=" line-clamp-none  p2  text-sanaccent">50kg</p>
            </div>
          </div>
          <hr className=" border-2 border-solid text-green-600" />
          <p className=" text-green-600">install</p>
          <div className="  p-1 border my-2 alignz flex flex-wrap gap-1  ">
            <img className=" m-0" src="/asset/san/bucket.svg" alt="" />

            <div>
              <p className="p-1 p2  border-sanaccent border-2 border-solid">
                X2
              </p>
            </div>
            <div>
              <p className=" line-clamp-none  p2  text-sanaccent">high</p>
            </div>
          </div>
          <hr className=" border-2 border-solid text-green-600" />
          <p className=" text-green-600">install</p>
          <div className=" p-1 border my-2 alignz flex flex-wrap gap-1  ">
            <img className=" m-0" src="/asset/san/smokealarm.svg" alt="" />

            <div>
              <p className="p-1 p2  border-sanaccent border-2 border-solid">
                X2
              </p>
            </div>
            <div>
              <p className=" line-clamp-none  p2  text-sanaccent">high</p>
            </div>
          </div>
          <hr className=" border-2 border-solid text-green-600" />
          <p className=" text-green-600">install</p>
          <div className=" p-1 border my-2 alignz flex flex-wrap gap-1  ">
            <img className=" m-0" src="/asset/san/firealarm.svg" alt="" />

            <div>
              <p className="p-1 p2  border-sanaccent border-2 border-solid">
                X2
              </p>
            </div>
            <div>
              <p className=" line-clamp-none  p2  text-sanaccent">high</p>
            </div>
          </div>
          <hr className=" border-2 border-solid text-green-600" />
          <p className=" my-1 p2 text-green-600">install</p>
        </div>
        <div>
          <p className=" text-justify">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            aliquid minima modi magni blanditiis, quis, nam assumenda iusto
            eligendi facilis rem iure dicta repudiandae possimus saepe iste
            veniam itaque sapiente?{" "}
          </p>
        </div>
        <div>
          <div className=" mt-3">
            <a href="" className=" button-sm">
              delete
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
