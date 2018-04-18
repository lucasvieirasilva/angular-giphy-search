import { NgModule } from '@angular/core';
import {GiphySearchListComponent} from "./giphy-search-list.component";
import {ShareModule} from "../../share/share.module";

@NgModule({
  imports: [
    ShareModule
  ],
  declarations: [
    GiphySearchListComponent
  ],
  exports: [
    GiphySearchListComponent
  ]
})
export class GiphySearchListModule { }
