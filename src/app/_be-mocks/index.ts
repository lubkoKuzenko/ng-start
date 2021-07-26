import { Server } from "miragejs";
import * as users from "./users.json";

export default () => {
  new Server({
    seeds(server) {
      server.db.loadData({
        users: (users as any).default,
      });
    },
    routes() {
      this.namespace = "/api";

      this.get("/users", ({ db }) => db.users[0]);

      //   this.post("/users", (schema, request) => {
      //     const post = JSON.parse(request.requestBody);
      //     post.id = Date.now();
      //     post.description = users[0].description;
      //     return schema.db.users.insert(post);
      //   });

      //   this.put("/users/:id", (schema, request) => {
      //     const post = schema.db.posts.find(request.params.id);
      //     post.like = !post.like;
      //     return post;
      //   });

      //   this.delete("/users/:id", (schema, request) => {
      //     const post = schema.db.users.remove(request.params.id);
      //     return post;
      //   });
    },
  });
};
