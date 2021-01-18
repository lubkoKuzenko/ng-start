import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { timer, Observable, BehaviorSubject, of, concat, fromEvent } from "rxjs";
import { TodosService } from "../../services/todos.service";
import { ITodo } from "../../interfaces";
import { map, shareReplay, tap, concatMap, concatAll, mergeMap, exhaustMap, switchMap } from "rxjs/operators";

@Component({
  selector: "bb-rxjs",
  templateUrl: "./rxjs.component.html",
  styleUrls: ["./rxjs.component.scss"],
})
export class RxjsComponent implements OnInit {
  public completed$: Observable<ITodo[]>;
  public inProgress$: Observable<ITodo[]>;

  @ViewChild("button", { static: true }) button: ElementRef;

  constructor(public todosService: TodosService) {}

  ngOnInit() {
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

  public contactTwoIntoOne() {
    const stream1$ = of(1, 2, 3);
    const stream2$ = timer(0, 1000);
    const stream3$ = of(4, 5, 6);

    const result$ = concat(stream1$, stream2$, stream3$);

    result$.subscribe(console.log);
  }
}
