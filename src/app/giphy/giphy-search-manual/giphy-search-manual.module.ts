import {NgModule} from '@angular/core';
import {GiphySearchManualComponent} from './giphy-search-manual.component';
import {GiphySearchService} from "../giphy-search.service";
import {GiphySearchListModule} from "../giphy-search-list/giphy-search-list.module";
import {ShareModule} from "../../share/share.module";
import {GiphySearchManualRoutingModule} from "./giphy-search-manual-routing.module";

@NgModule({
  imports: [ShareModule, GiphySearchListModule, GiphySearchManualRoutingModule],
  exports: [GiphySearchManualComponent],
  declarations: [GiphySearchManualComponent],
  providers: [GiphySearchService],
})
export class GiphySearchManualModule {
}
