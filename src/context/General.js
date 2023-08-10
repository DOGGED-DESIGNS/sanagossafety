import { useContext, createContext, useState } from "react";

const Contextprovider = createContext();

export const Generalget = () => {
  return useContext(Contextprovider);
};

const General = (props) => {
  const [singlecontact, setSinglecontact] = useState({});
  const [singlecomment, setSinglecomment] = useState({});
  const [catprev, setCatprev] = useState("");
  const [singlequote, setSinglequote] = useState({});
  const [singleservice, setSingleservice] = useState({});
  const [cattest, setCattest] = useState("");
  const [singlepost, setSinglepost] = useState({});
  const [singlecategory, setSinglecategory] = useState({});
  const [singleindustry, setSingleindustry] = useState({});
  const [loading2, setLoading2] = useState(false);
  return (
    <Contextprovider.Provider
      value={{
        singlecontact,
        singlequote,
        setSinglequote,
        loading2,
        setLoading2,
        setSinglecontact,
        singlecomment,
        setSinglecomment,
        singleservice,
        setSingleservice,
        singlepost,
        setSinglepost,
        singlecategory,
        cattest,
        setCattest,
        catprev,
        setCatprev,
        setSinglecategory,
        singleindustry,
        setSingleindustry,
      }}
    >
      {props.children}
    </Contextprovider.Provider>
  );
};

export default General;
