//homeview controller
const home = (req, res) => {
  const variable = {
    title: "Ejs",
    hero:"welcome to learning ejs",
    id:10
  }
  res.render("home",variable);// passing local variable
};
export { home };
