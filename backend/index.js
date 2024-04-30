const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authentication = require("./Routes/authentication");
const song = require("./Routes/song");
const playlistRoutes = require("./Routes/playlist");
const { notFound, errorHandler } = require("./Middleware/errorMiddle");
const pass = require("./config/pport");
const cors = require("cors");
const path = require("path");
dotenv.config();
const Port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

pass();

app.use("/auth", authentication);
app.use("/song", song);
app.use("/playlist", playlistRoutes);

app.use(express.static(path.join(__dirname, "..", "/frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
});

app.use(notFound);
app.use(errorHandler);

app.listen(Port, () => {
  connectDB();
  console.log(`The server Started listining on PORT ${Port}`);
});
