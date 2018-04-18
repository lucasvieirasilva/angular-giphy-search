import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GiphySearchManualComponent} from "./giphy-search-manual.component";

const routes: Routes = [
  {path: '', component: GiphySearchManualComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiphySearchManualRoutingModule {
}
