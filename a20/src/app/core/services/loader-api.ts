import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderAPI {
  private static isLoaderEnabled: boolean;

  get isLoaderEnabled() {
    return LoaderAPI.isLoaderEnabled;
  }

  static showLoader(){
    LoaderAPI.isLoaderEnabled = true;
  }

  static hideLoader(){
    // added setTimeout to show loader for testing b/c api too fast, otherwise not required
    setTimeout(() => {
      LoaderAPI.isLoaderEnabled = false;
    }, 500)
  }
}
