import app from "./server.js";

const puerto = process.env.PORT || 3000;

app.listen(puerto, () => {
  console.log("server started on port: ", puerto);
});
