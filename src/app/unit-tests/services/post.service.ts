import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

export interface Post {
  id: string;
  title: string;
  body: string;
}

@Injectable({
  providedIn: "root",
})
export class PostsService {
  url = "https://jsonplaceholder.typicode.com";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts`).pipe(catchError(this.handleError<Post[]>("getAllPosts", [])));
  }

  getPostById(id: string): Observable<Post> {
    return this.http
      .get<Post>(`${this.url}/posts/${id}`)
      .pipe(catchError(this.handleError<Post>(`getPostById id=${id}`)));
  }

  updatePost(post: Post): Observable<any> {
    return this.http
      .put(`${this.url}/posts`, post, this.httpOptions)
      .pipe(catchError(this.handleError<any>(`updatePost`)));
  }

  addPost(post: Post): Observable<Post> {
    return this.http
      .post<Post>(`${this.url}/posts`, post, this.httpOptions)
      .pipe(catchError(this.handleError<Post>(`addPost`)));
  }

  deletePost(post: Post): Observable<Post> {
    return this.http
      .delete<Post>(`${this.url}/posts/${post.id}`, this.httpOptions)
      .pipe(catchError(this.handleError<Post>(`deletePost`)));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
