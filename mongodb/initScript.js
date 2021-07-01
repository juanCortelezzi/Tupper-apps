db.createUser({
  user: "wiz",
  pwd: "pass",
  roles: [
    {
      role: "readWrite",
      db: "testing",
    },
  ],
});

db = db.getSiblingDB("testing");
db.article.drop();

db.article.save({
  title: "this is my title",
  author: "bob",
  posted: new Date(1079895594000),
  pageViews: 5,
  tags: ["fun", "good", "fun"],
  comments: [
    { author: "joe", text: "this is cool" },
    { author: "sam", text: "this is bad" },
  ],
  other: { foo: 5 },
});
