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
  green = [
    'text-green-700 ',
    ' bg-green-100',
    'dark:bg-green-200',
    'dark:text-green-800',
  ];
  red = [
    'text-red-700 ',
    ' bg-red-100',
    'dark:bg-red-200',
    'dark:text-red-800',
  ];
  colorClasses: string[];

  constructor(private uiService: UiService) {
    this.uiService.onToggleShowAlert().subscribe((value) => {
      this.text = value.msg;
      this.color = value.color;
      this.show = value.showAlert;
      this.colorClasses = this.color === 'green' ? this.green : this.red;

      if (this.show) {
        setTimeout(() => {
          this.uiService.toggleShowAlert();
        }, 4000);
      }
    });
  }

  ngOnInit(): void {}
}
