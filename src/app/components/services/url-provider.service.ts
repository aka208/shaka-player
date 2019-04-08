import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlProviderService {

  constructor() { }
  videoUrl;

  setVideoUrl(url){
    this.videoUrl =url;
  }

  getVideoUrl(){
    return this.videoUrl;
  }
}
