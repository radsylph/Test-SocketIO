const landingPage = (req, res) => {
  res.render("auth/chat", {
    title: "Chat",
    pagina: "Welcome",
  });
};

export { landingPage };
