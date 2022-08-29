import { Component, OnInit } from '@angular/core';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  faInfo = faInfo;
  text = '';
  show = false;
  color = '';

  constructor(private uiService: UiService) {
    this.uiService.onToggleShowAlert().subscribe((value) => {
      this.show = value.showAlert;
      this.text = value.msg;
      this.color = value.color;

      if (this.show) {
        setTimeout(() => {
          this.uiService.toggleShowAlert();
        }, 4000);
      }
    });
  }

  ngOnInit(): void {}
}
