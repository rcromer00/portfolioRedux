const express = require("express");
const htmlRoutes = require("./routes/html-routes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log("Express server listening on port %d in %s mode", this.address().PORT, app.settings.env)
});