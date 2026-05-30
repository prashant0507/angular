import { Component, inject } from '@angular/core';
import { LoaderAPI } from '../../../core/services/loader-api';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
})
export class Loader {
  private loaderApi = inject(LoaderAPI);

  get loaderEnabled() {
    return this.loaderApi.isLoaderEnabled;
  }
}
