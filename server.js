import app from "./app";

const port = 3001;
app.listen(port, () => {
  console.log("Server started on port %s", port);
  console.log("CTRL + click to open http://localhost:%s", port);
});
