import app from "./app.js";

const PORT = process.env.PORT ?? 3000;
const HOST = process.env.HOST ?? "0.0.0.0";

app.listen(PORT,HOST, function () {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
