// import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

// import bodyParser from "body-parser";

const handlez = async (req, res) => {
  const { message, username, password } = req.body;

  if (req.method == "POST") {
    // bodyParser.json();

    if (message === "login") {
      if (username == "bencodelight" && password == "ben8000") {
        req.session.ben = {
          message: "correct credentials",
          status: true,
          type: "success",
          error: false,
        };

        await req.session.save();
        // console.log(req.session);
        res.send("login successful");
      } else {
        req.session.ben = {
          message: "invalid credentials",
          status: false,
          type: "error",
          error: true,
        };

        await req.session.save();
        // console.log(req.session);

        res.send("invalid credentials");
      }
    }

    // this is for the log out
    if (message === "logout") {
      req.session.ben = {
        message: "",
        status: false,
        error: false,
        type: "",
      };

      await req.session.save();
      res.send("logout successful");
      console.log(req.session);
    }
  }
};

export default withIronSessionApiRoute(handlez, {
  cookieName: "benco",
  password: "dogged8000,mouauchinaza,aiajcocharles0803410363600",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
  ttl: 86400,
});

export const withSessionrap = (handlez) => {
  return withIronSessionSsr(handlez, {
    cookieName: "benco",
    password: "dogged8000,mouauchinaza,aiajcocharles0803410363600",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
    ttl: 86400,
  });
};

export const sessionGet = (req) => {
  return req.session.ben;
};

// const handler = async (req, res) => {
//   if (req.method === "POST") {
//     bodyParser.json();
//     const { message } = req.body;

//     if (message === "logout") {
//       await req.session.destroy();
//       req.session.user = {
//         message: "",
//         error: "",
//         type: "",
//       };

//       await req.session.save();

//       res.json({ name: "i dunno what to do angina" });

//       console.log(req.session);

//       return;
//     }

//     if (message === "login") {
//       //   await req.session.destroy();
//       console.log(message);

//       const { name, password } = req.body;
//       if (name === "sanagos" && password === "aiajcocharles") {
//         req.session.user = {
//           error: false,
//           message: "user loged in sucessfully",
//           type: "success",
//           status: true,
//         };
//         await req.session.save();
//         res.send("userlogged in successfully");
//       } else {
//         req.session.user = {
//           error: true,
//           message: "invalid user credentials",
//           type: "danger",
//           status: false,
//         };
//         await req.session.save();

//         res.send("invalid credentials");
//       }
//       return;
//     }
//   }
// };

// export default withIronSessionApiRoute(handler, {
//   password: "dogged8000mouauchinazaaiajcocharles0803410363600",
//   cookieName: "login",
//   cookieOptions: {
//     secure: process.env.NODE_ENV === "production",
//   },
//   ttl: 86400,
// });

// export function withSessionSsr(handler) {
//   return withIronSessionSsr(handler, {
//     password: "dogged8000mouauchinazaaiajcocharles0803410363600",
//     cookieName: "login",
//     cookieOptions: {
//       secure: process.env.NODE_ENV === "production",
//     },
//     ttl: 86400,
//   });
// }

// export const getSessionData = (req) => {
//   return req.session.user;
// };
