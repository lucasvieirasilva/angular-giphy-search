import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {ShareModule} from "../../../share/share.module";
import {GiphySearchListComponent} from "../giphy-search-list.component";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('giphy-search-list.component.spec.ts', () => {
  let fixture: ComponentFixture<GiphySearchListComponent>;
  let giphyComponent: GiphySearchListComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ShareModule
      ],
      declarations: [
        GiphySearchListComponent
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(GiphySearchListComponent);
      giphyComponent = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('Deveria ter criado GiphySearchListComponent', () => {
    expect(giphyComponent).toBeTruthy();
    expect(giphyComponent).not.toBeNull();
  });

  it('Deveria ter criado 2 tag "a" ', () => {
    giphyComponent.gifsList = [{
      id: "1",
      url: "localhost/01.gif",
      images: {
        fixed_height: {
          url: "localhost/01.gif"
        }
      }
    }, {
      id: "2",
      url: "localhost:8080/02.gif",
      images: {
        fixed_height: {
          url: "localhost:8080/02.gif"
        }
      }
    }];

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const debugElements: DebugElement[] = fixture.debugElement.queryAll(By.css('a'));
      expect(debugElements.length).toBe(2);
    });
  });
});
