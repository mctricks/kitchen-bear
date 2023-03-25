import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaders: number[] = [];

  constructor() { }

  public showLoader(): boolean {
    return this.loaders.length > 0;
  }

  public addLoader(): number {
    const loader = Math.max(Math.max(...this.loaders), -1) + 1;
    this.loaders = this.loaders.concat([loader]);
    return loader;
  }

  public removeLoader(loader: number): void {
    this.loaders = this.loaders.filter((x) => x != loader);
  }
}
