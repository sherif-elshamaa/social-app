const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://thesocialmediaa.firebaseapp.com/";

module.exports = baseUrl;
