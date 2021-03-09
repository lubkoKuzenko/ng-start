import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { timer, Observable, of, concat, fromEvent, BehaviorSubject } from "rxjs";
import { TodosService } from "../../services/todos.service";
import { ITodo } from "../../interfaces";
import { map, tap, switchMap, scan } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

export const enum TlcDeviceEnum {
  OCIT = "ocit",
  OCIT_C = "ocit-c",
  STCIP = "stcip",
}

@Component({
  selector: "bb-rxjs",
  templateUrl: "./rxjs.component.html",
  styleUrls: ["./rxjs.component.scss"],
})
export class RxjsComponent implements OnInit, AfterViewInit {
  @ViewChild("button", { static: true }) button: ElementRef;
  @ViewChild("imageButton", { static: true }) imageButton: ElementRef;

  private _total$ = new BehaviorSubject<any>({
    [TlcDeviceEnum.OCIT]: 0,
    [TlcDeviceEnum.OCIT_C]: 1,
    [TlcDeviceEnum.STCIP]: 2,
  });
  public total$ = this._total$.asObservable();

  public completed$: Observable<ITodo[]>;
  public inProgress$: Observable<ITodo[]>;
  public randomImage$: Observable<any>;

  constructor(public todosService: TodosService, private httpClient: HttpClient) {}

  ngOnInit() {
    // this.simpleRxDefinition();
    // this.createTwoStreamsFromOne();
    // this.contactTwoIntoOne();
    this.calculateFromStream();
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

  private calculateFromStream() {
    const t$ = this.total$.pipe(
      scan((acc, curr) => {
        for (var key of Object.keys(curr)) {
          if (curr[key] > 0) {
            acc += 1;
          }
        }
        return acc;
      }, 0),
    );

    t$.subscribe((t) => console.log(t));
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

  public fireClientError(it: any) {
    // throw new Error('Client Error. Shit happens :)');
    // it is not defined, ups
    return it.happens;
  }

  public fireServerError() {
    this.httpClient.get("https://jsonplaceholder.typicode.com/1").subscribe();
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

  // Function to generate random number
  private randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
