import { TestBed } from "@angular/core/testing";
import { Post, PostsService } from "./post.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { postsMock } from "../mocks/posts.mock";

describe("[SERVICES]: PostsService", () => {
  let service: PostsService;
  let httpController: HttpTestingController;
  let url = "https://jsonplaceholder.typicode.com";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService],
    });

    service = TestBed.inject(PostsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it("should be initialized with default state", () => {
    expect(service).toBeTruthy();
  });

  it("should call getAllPosts and return an array of Posts", () => {
    service.getAllPosts().subscribe((res) => {
      expect(res).toEqual(postsMock);
    });

    const req = httpController.expectOne({ method: "GET", url: `${url}/posts` });

    req.flush(postsMock);
  });

  it("should call getPostById and return the appropriate Book", () => {
    const id = "1";

    service.getPostById(id).subscribe((data) => {
      expect(data).toEqual(postsMock[0]);
    });

    const req = httpController.expectOne({ method: "GET", url: `${url}/posts/${id}` });

    req.flush(postsMock[0]);
  });

  it("should call updatePost and return the updated Post from the API", () => {
    const updatedPost: Post = { id: "1", title: "New title", body: "Author 1" };

    service.updatePost(postsMock[0]).subscribe((data) => {
      expect(data).toEqual(updatedPost);
    });

    const req = httpController.expectOne({ method: "PUT", url: `${url}/posts` });

    req.flush(updatedPost);
  });

  it("should call addPost and return the add Post from the API", () => {
    service.addPost(postsMock[0]).subscribe((data) => {
      expect(data).toEqual(postsMock[0]);
    });

    const req = httpController.expectOne({ method: "POST", url: `${url}/posts` });

    req.flush(postsMock[0]);
  });

  it("should call addPost and return the add Post from the API", () => {
    service.deletePost(postsMock[1]).subscribe((data) => {
      expect(data).toEqual(postsMock[1]);
    });

    const req = httpController.expectOne({ method: "DELETE", url: `${url}/posts/4` });

    req.flush(postsMock[1]);
  });
});
