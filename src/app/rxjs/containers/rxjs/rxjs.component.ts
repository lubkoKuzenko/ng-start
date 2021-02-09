import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { timer, Observable, of, concat, fromEvent } from "rxjs";
import { TodosService } from "../../services/todos.service";
import { ITodo } from "../../interfaces";
import { map, tap, switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { AppInitService } from "@core/services/app-init.service";

@Component({
  selector: "bb-rxjs",
  templateUrl: "./rxjs.component.html",
  styleUrls: ["./rxjs.component.scss"],
})
export class RxjsComponent implements OnInit, AfterViewInit {
  public completed$: Observable<ITodo[]>;
  public inProgress$: Observable<ITodo[]>;
  public randomImage$: Observable<any>;

  @ViewChild("button", { static: true }) button: ElementRef;
  @ViewChild("imageButton", { static: true }) imageButton: ElementRef;

  constructor(public todosService: TodosService, private httpClient: HttpClient, public initConfig: AppInitService) {}

  ngOnInit() {
    console.log(this.initConfig.settings);

    // this.simpleRxDefinition();
    // this.createTwoStreamsFromOne();
    // this.contactTwoIntoOne();
  }

  ngAfterViewInit(): void {
    fromEvent(this.button.nativeElement, "click")
      .pipe(
        tap((e) => console.log(e)),
        // concatMap(() => this.todosService.getTodos()),
        // mergeMap(() => this.todosService.getTodos()),
        // exhaustMap(() => this.todosService.getTodos()),
        switchMap(() => this.todosService.getTodos()),
      )
      .subscribe();

    this.onImageChange();
  }

  public testHttp() {
    this.httpClient.get("test").subscribe();
  }

  public onImageChange() {
    this.randomImage$ = fromEvent(this.imageButton.nativeElement, "click").pipe(
      map((d) => this.randomNumber(1, 100)),
      switchMap((id) => {
        if (id) {
          return this.todosService.getPhotoById(id);
        } else {
          return of({});
        }
      }),
    );
  }

  public contactTwoIntoOne() {
    const stream1$ = of(1, 2, 3);
    const stream2$ = timer(0, 1000);
    const stream3$ = of(4, 5, 6);

    const result$ = concat(stream1$, stream2$, stream3$);

    result$.subscribe(console.log);
  }

  private simpleRxDefinition() {
    // create Observable
    const timer$ = timer(0, 1000);

    timer$.subscribe(
      (v) => console.log(v),
      (err) => console.log(err),
      () => console.log("Completed"),
    );
  }

  private createTwoStreamsFromOne() {
    // uncomment HTML
    // map, tap
    this.completed$ = this.todosService.getTodos().pipe(
      tap((d) => console.log(d)),
      map((todos: ITodo[]) => todos.filter((todo: ITodo) => todo.completed)),
    );

    this.inProgress$ = this.todosService
      .getTodos()
      .pipe(map((todos: ITodo[]) => todos.filter((todo: ITodo) => !todo.completed)));
  }

  public fireClientError(it: any) {
    // throw new Error('Client Error. Shit happens :)');
    // it is not defined, ups
    return it.happens;
  }

  public fireServerError() {
    this.httpClient.get("https://jsonplaceholder.typicode.com/1").subscribe();
  }

  // Function to generate random number
  private randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
