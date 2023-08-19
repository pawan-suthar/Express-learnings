//homeview controller
const home = (req, res) => {
  res.render("home", { title: "template",hero:"welcome to learning ejs" });// passing local variable
};
export { home };
