const express = require("express");
const htmlRoutes = require("./routes/html-routes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log("Server listening on:" + PORT)
});