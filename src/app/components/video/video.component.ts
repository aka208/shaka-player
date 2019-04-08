import { Component, OnInit } from '@angular/core';
import { UrlProviderService } from '../services/url-provider.service';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private urlService: UrlProviderService, public sanitizer:DomSanitizer) { }

  videoUrl;
  visible:boolean = true;

  ngOnInit() {
    this.setVideoUrl();
  }

  setVideoUrl(){  
    this.visible = true;    
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlService.getVideoUrl()+"?autoplay=1");
    console.log("URL to play",this.videoUrl);
  }
}
