import { Component, OnInit } from '@angular/core';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
import { Observable} from 'rxjs';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { VideoComponent} from '../video/video.component'
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ComponentPortal } from '../../../../node_modules/@angular/cdk/portal';
import { UrlProviderService } from '../services/url-provider.service';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor(public sanitizer:DomSanitizer, private modalService: NgbModal, private overlay: Overlay, private urlService: UrlProviderService) { }

  url;

  videoSrc = [
    {
      "description": "Justin Beiber-Baby ft.Lucadris (Official Music Video)",
      "imgUrl": "https://i.ytimg.com/vi/kffacxfA7G4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCGrHxgEj9lh0k2kQ5HJ49zLtlVRg",
      "src": "https://www.youtube.com/embed/kffacxfA7G4",
      "musicBy":"Millenium Track",
      "views": "55M views"
    },
    {
      "description": "Louis Fonsi-Despacito ft. Daddy Yankee",
      "imgUrl": "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLA4TSmv0WfMIsu8dizbhSInGcGWrQ",
      "src": "https://www.youtube.com/embed/kJQP7kiw5Fk",
      "musicBy":"Trendzy",
      "views": "70M views"
    },
    {
      "description": "The Script-Hall Of Fame(Official Video) ft. Will.i.am",
      "imgUrl": "https://i.ytimg.com/vi/mk48xRzuNvA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLC3LigHySKJR5VCMFaAeovA90WS1w",
      "src": "https://www.youtube.com/embed/mk48xRzuNvA",
      "musicBy":"THE S.C.R.I.P.T",
      "views": "65M views"
    },
    {
      "description": "Waka Waka|ft. Shakira",
      "imgUrl": "https://i.ytimg.com/vi/pRpeEdMmmQ0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBvcg2MCIEGcKHEMcYc9CjyQTX7gg",
      "src": "https://www.youtube.com/embed/pRpeEdMmmQ0",
      "musicBy":"Shakira",
      "views": "58M views"
    },
    {
      "description": "Love the way you lie|ft. Eminem| Rihana",
      "imgUrl": "https://i.ytimg.com/vi/uelHwf8o7_U/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBQcW-je-Sqvi4DjypeVjgq_uq1rg",
      "src": "https://www.youtube.com/embed/uelHwf8o7_U",
      "musicBy":"Eminem",
      "views": "11M views"
    },
    {
      "description": "The Chainsmokers-Don't let me down ft. Daya",
      "imgUrl": "https://i.ytimg.com/vi/Io0fBr1XBUA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLA9sUEZV1GGGEHw3O7S-krA2BtELQ",
      "src": "https://www.youtube.com/embed/Io0fBr1XBUA",
      "musicBy":"The Chainsmokers",
      "views": "95M views"
    },
    {
      "description": "Queen- Bohemia Rhapsody(Official Video)",
      "imgUrl": "https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBBn_rHD_MA12n8BJbSx4Vr9Tfj6g",
      "src": "https://www.youtube.com/embed/fJ9rUzIMcZQ",
      "musicBy":"Queen Official",
      "views": "917M views"

    },
    {
      "description": "K'NAAN-Wavin' Flag(Coca-Cola Celebration Mix)",
      "imgUrl": "https://i.ytimg.com/vi/WTJSt4wP2ME/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLAD1rw-mx93JHrLNw0RzOAs7F4-sA",
      "src": "https://www.youtube.com/embed/WTJSt4wP2ME",
      "musicBy":"Knaan",
      "views": "917M views"

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
