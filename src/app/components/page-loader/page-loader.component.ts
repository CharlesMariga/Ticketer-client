import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss'],
})
export class PageLoaderComponent implements OnInit {
  showPageLoader = false;

  constructor(private uiService: UiService) {
    this.uiService.onToggleShowLoader().subscribe((value: boolean) => {
      this.showPageLoader = value;
    });
  }

  ngOnInit(): void {}
}
