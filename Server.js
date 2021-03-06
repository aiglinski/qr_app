const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

//!! DEFINE ROUTES here
app.use("/auth", require("./routes/Auth"));
app.use("/Employees", require("./routes/Employees"));
app.use("/clockedIn", require("./routes/ClockedIn"));
app.use("/Inventory", require("./routes/Inventory"));
app.use("/locations", require("./routes/Locations"));
app.use("/Sale", require("./routes/Sales"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Successfully started on port ${PORT}`));
