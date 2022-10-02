const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const app =express();

app.use(cors());
app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});