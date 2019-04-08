import { Component, OnInit } from '@angular/core';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
import { Observable} from 'rxjs';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { VideoComponent} from '../video/video.component'
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ComponentPortal } from '../../../../node_modules/@angular/cdk/portal';
import { UrlProviderService } from '../services/url-provider.service';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.css']
})
export class TrailersComponent implements OnInit {

  constructor(public sanitizer:DomSanitizer, private modalService: NgbModal, private overlay: Overlay, private urlService: UrlProviderService) { }

  url;

  videoSrc = [
    {
      "description": "Avengers-ENDGAME|Official Trailer(2019)",
      "imgUrl": "https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBnBA8cJf4NFQzKHmfvpRq_CL343w",
      "src": "https://www.youtube.com/embed/TcMBFSGVi1c",
      "movieBy":"MARVEL",
      "views": "111M views"
    },
    {
      "description": "Kesari|Official Trailer(2019)",
      "imgUrl": "https://i.ytimg.com/vi/JFP24D15_XM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCx5zdCetdEumWXJ9j2wHrRbl8upg",
      "src": "https://www.youtube.com/embed/JFP24D15_XM",
      "movieBy":"Dharma Productions",
      "views": "99M views"
    },
    {
      "description": "HOW TO TRAIN YOUR DRAGON|Official Trailer(2019)",
      "imgUrl": "https://i.ytimg.com/vi/naW9U8MiUY0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLAW-WWzy7gIwS33rsUgDTAl1u5Lag",
      "src": "https://www.youtube.com/embed/naW9U8MiUY0",
      "movieBy":"filmSet Trailer",
      "views": "88M views"
    },
    {
      "description": "SPIDERMAN-FAR FROM HOME|Official Trailer(2019)",
      "imgUrl": "https://i.ytimg.com/vi/YkF4w6w27W0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDNTJuNgV-yrTeexxgfVW5etbmpOA",
      "src": "https://www.youtube.com/embed/YkF4w6w27W0",
      "movieBy":"MARVEL",
      "views": "24M views"
    },
    {
      "description": "KALANK|Official Teaser|Varun|Aditya Roy",
      "imgUrl": "https://i.ytimg.com/vi/UmhXhTmP0a0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLAfH7N8T_SQ6MtS1RHLr1LVra2jGw",
      "src": "https://www.youtube.com/embed/UmhXhTmP0a0",
      "movieBy":"Dharma Productions",
      "views": "11M views"
    },
    {
      "description": "Game of Thrones| Season8| Official Trailer(HBO) ",
      "imgUrl": "https://i.ytimg.com/vi/rlR4PJn8b8I/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDf-E9RCLHFgc3qh_9MHiESYELD5g",
      "src": "https://www.youtube.com/embed/rlR4PJn8b8I",
      "movieBy":"GameOfThrones",
      "views": "50M views"
    }
    ];

    open() {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      positionStrategy, scrollStrategy: this.overlay.scrollStrategies.block()});

    overlayConfig.hasBackdrop = true;

      const overlayRef = this.overlay.create(overlayConfig);
      overlayRef.backdropClick().subscribe(() => {
          overlayRef.dispose();
      });
      const videoPortal = new ComponentPortal(VideoComponent);
      overlayRef.attach(videoPortal);
    }

    setUrl(url){
      this.url = url;
      this.urlService.setVideoUrl(this.url);
      this.open();
    }
    

  ngOnInit() {
  }

}
