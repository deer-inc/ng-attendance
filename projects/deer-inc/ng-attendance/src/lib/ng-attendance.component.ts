import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import * as _moment from 'moment';
// @ts-ignore:disable-next-line:no-duplicate-imports
import {default as _rollupMoment, Moment} from 'moment';

const moment = _rollupMoment || _moment;

interface Row {
  date: string;
  start: string;
  end: string;
  break: number;
  total?: number;
  note?: string;
  isActive: boolean;
  holiday?: string;
}

moment.locale('ja', {
  weekdays: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
  weekdaysShort: ['日', '月', '火', '水', '木', '金', '土'],
});

@Component({
  selector: 'ng-attendance',
  templateUrl: './ng-attendance.component.html',
  styleUrls: ['./ng-attendance.component.scss']
})
export class NgAttendanceComponent implements OnInit {

  displayedColumns = [
    'activate', 'date', 'start', 'end', 'break', 'total', 'note'
  ];

  holiday: object;

  editableNoteIndex: number;

  dataSource: Row[] = [];
  totalHour = 0;
  behindCount = 0;
  absenceCount = 0;
  rangeBottom = 140;
  rangeTop = 180;
  overTime = 0;
  remuneration = 200000;
  base = 200000;
  startTime = moment(['09:00'], 'HH:mm');
  month = moment().format('M');

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`https://holidays-jp.github.io/api/v1/${new Date().getFullYear()}/date.json`)
      .subscribe(data => {
        this.holiday = data;
        this.buildTable(data);
      });
  }

  private isHoliday(day: Moment, holiday: object): boolean {
    return /土|日/.test(day.format('ddd')) || holiday[day.format('YYYY-MM-DD')];
  }

  buildTable(holiday) {
    let dayCount = moment().endOf('month').diff(moment().startOf('month'), 'days') + 1;

    while (dayCount--) {
      const day = moment().startOf('month').add(dayCount, 'days');
      const isHoliday = this.isHoliday(day, holiday);

      this.dataSource.unshift(
        {
          holiday: holiday[day.format('YYYY-MM-DD')],
          date: day.format('D（ddd）'),
          start: null,
          end: null,
          break: isHoliday ? null : 60,
          total: null,
          note: null,
          isActive: !isHoliday,
        }
      );
    }
  }

  focusInput(el) {
    setTimeout(() => el.focus(), 100);
  }

  updateTable(value?: string, index?: number, key?: string) {
    if (value) {
      this.dataSource[index][key] = value;
    }

    this.totalHour = 0;
    this.behindCount = 0;

    this.dataSource.forEach((item, i) => {
      if (!item.start || !item.end) {
        return item;
      }

      const start = moment([item.start], 'HH:mm');
      const end = moment([item.end], 'HH:mm').subtract(
        item.break || 0, 'm'
      );
      const total = end.diff(start, 'hours', true);

      if (start.isAfter(this.startTime)) {
        this.behindCount++;
      }

      this.totalHour += total;

      if (this.totalHour > this.rangeTop) {
        this.overTime = this.totalHour - this.rangeTop;
      }

      this.dataSource[i].total = total;
    });
  }

}
