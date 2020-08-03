const router = require("./server/server");

const port = 3000 || process.env.PORT;

router.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});
