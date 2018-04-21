import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GiphySearchService {

  private readonly API_KEY = "gsa5b28CnfmSVWmTKtDWeLU4Smoda6hs";

  constructor(private httpClient: HttpClient) {
  }

  pesquisarGiphy(limit: string, term: string): Observable<Object> {
    const url = this.getUrl(limit, term);
    return this.httpClient.get(url);
  }

  getUrl(limit: string, term: string): string {
    return 'https://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=' + this.API_KEY + '&limit=' + limit;
  }
}
