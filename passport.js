const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "711474412491-av606rme4he37m5q8c1n19nu2l1s4l5p.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
