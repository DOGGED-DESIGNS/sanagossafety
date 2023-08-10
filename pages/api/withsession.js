import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import bodyParser from "body-parser";

bodyParser.json();

const handler = async (req, res) => {
  if (req.method === "POST") {
    bodyParser.json();
    const { message } = req.body;

    if (message === "logout") {
      await req.session.destroy();
      req.session.user = {
        message: "",
        error: "",
        type: "",
      };

      await req.session.save();

      res.json({ name: "i dunno what to do angina" });

      console.log(req.session);

      return;
    }

    if (message === "login") {
      //   await req.session.destroy();
      console.log(message);

      const { name, password } = req.body;
      if (name === "sanagos" && password === "aiajcocharles") {
        req.session.user = {
          error: false,
          message: "user loged in sucessfully",
          type: "success",
          status: true,
        };
        await req.session.save();
        res.send("userlogged in successfully");
      } else {
        req.session.user = {
          error: true,
          message: "invalid user credentials",
          type: "danger",
          status: false,
        };
        await req.session.save();

        res.send("invalid credentials");
      }
      return;
    }
  }
};

export default withIronSessionApiRoute(handler, {
  password: "dogged8000mouauchinazaaiajcocharles0803410363600",
  cookieName: "login",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
  ttl: 86400,
});

export function withSessionSsr(handler) {
  return withIronSessionSsr(handler, {
    password: "dogged8000mouauchinazaaiajcocharles0803410363600",
    cookieName: "login",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
    ttl: 86400,
  });
}

export const getSessionData = (req) => {
  return req.session.user;
};
