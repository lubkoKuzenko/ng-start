import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { TestComponent } from "./test.component";

describe("TestComponent", () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let title: HTMLElement;
  let actionButton: HTMLButtonElement;
  let actionButtonWithParam: HTMLButtonElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [TestComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.debugElement.componentInstance;

    fixture.detectChanges();

    title = fixture.debugElement.query(By.css(".title")).nativeElement as HTMLElement;
    actionButton = fixture.debugElement.query(By.css("button[data-role='test-action-button']"))
      .nativeElement as HTMLButtonElement;
    actionButtonWithParam = fixture.debugElement.query(By.css("button[data-role='test-action-with-param-button']"))
      .nativeElement as HTMLButtonElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should contain title and sub_title", () => {
    component.isSubTitleVisible = true;
    fixture.detectChanges();
    const sub_title = fixture.debugElement.query(By.css(".sub-title")).nativeElement as HTMLElement;

    expect(title).toBeTruthy();
    expect(sub_title).toBeTruthy(); // isSubTitleVisible = true

    expect(title.textContent?.trim()).toEqual("Test Components");
    expect(sub_title.textContent?.trim()).toMatch("sub title"); // isSubTitleVisible = true
  });

  it("should emit when button is clicked", () => {
    spyOn(component.click, "emit");
    actionButton.click();
    expect(component.click.emit).toHaveBeenCalled();
    expect(component.click.emit).toHaveBeenCalledWith({ someData: "test string" });
  });

  it("should emit when button with param is clicked", () => {
    spyOn(component.clickWithParam, "emit");
    actionButtonWithParam.click();
    expect(component.clickWithParam.emit).toHaveBeenCalled();
    expect(component.clickWithParam.emit).toHaveBeenCalledWith("string param");
  });

  it("should check visibility of subTitle based on isSubTitleVisible property", () => {
    component.isSubTitleVisible = false;
    fixture.detectChanges();
    const subTitleHidden = fixture.debugElement.query(By.css(".sub-title"));

    expect(subTitleHidden).toBeNull();

    component.isSubTitleVisible = true;
    fixture.detectChanges();

    const subTitleVisible = fixture.debugElement.query(By.css(".sub-title")).nativeElement as HTMLElement;

    expect(subTitleVisible).toBeTruthy();
    expect(subTitleVisible.textContent?.trim()).toMatch("sub title");
  });
});
