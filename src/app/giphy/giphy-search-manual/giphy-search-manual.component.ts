import {Component, OnInit} from '@angular/core';
import {GiphySearchService} from "../giphy-search.service";
import {Title} from "@angular/platform-browser";
import {Giphy} from "./giphy,type";

@Component({
  selector: 'giphy-search-manual',
  templateUrl: 'giphy-search-manual.component.html'
})

export class GiphySearchManualComponent implements OnInit {

  gifs: Giphy[] = [];
  limit: string = "10";
  term: string;

  constructor(private title: Title, private giphySearchService: GiphySearchService) {
  }

  ngOnInit() {
    this.title.setTitle("Giphy Search by Lucas");
  }

  pesquisarGiphy() {
    this.title.setTitle("Pesquisando...");
    this.giphySearchService.pesquisarGiphy(this.limit, this.term)
      .subscribe(response => {
        this.gifs = response['data'];
        this.title.setTitle("Giphy Search by Lucas");
      });
  }
}
