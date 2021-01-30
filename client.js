console.log("client code running.");
const axios = require("axios");

const URI = "http://localhost:3000";

// 비효율적인 방법:
//      - blogsLimit 20일 때: 6초
//      - blogsLimit 50일 때: 15초
// populate 사용하는 방법
//      - blogsLimit 20일 때: 0.8초
//      - blogsLimit 50일 때: 0.7초
//      - blogsLimit 200일 때: 2초
// nesting 사용하는 방법
//      - blogsLimit 20일 때: 0.1~2초
//      - blogsLimit 50일 때: 0.2~3초
//      - blogsLimit 200일 때: 0.3초
const test = async () => {
  console.time("loading time: ");
  await axios.get(`${URI}/blog`);
  //   blogs = await Promise.all(
  //     blogs.map(async (blog) => {
  //       const [res1, res2] = await Promise.all([
  //         axios.get(`${URI}/user/${blog.user}`),
  //         axios.get(`${URI}/blog/${blog._id}/comment`),
  //       ]);
  //       blog.user = res1.data.user;
  //       blog.comments = await Promise.all(
  //         res2.data.comments.map(async (comment) => {
  //           const {
  //             data: { user },
  //           } = await axios.get(`${URI}/user/${comment.user}`);
  //           comment.user = user;
  //           return comment;
  //         })
  //       );
  //       return blog;
  //     })
  //   );
  console.timeEnd("loading time: ");
};
const testGroup = async () => {
  await test();
  await test();
  await test();
  await test();
  await test();
  await test();
  await test();
};

testGroup();
