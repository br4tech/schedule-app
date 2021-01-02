import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Pages */
import { ScheduleDailyComponent } from './pages/schedule-daily/schedule-daily.component';
import { ScheduleWeeklyComponent } from './pages/schedule-weekly/schedule-weekly.component';
import { ScheduleMonthlyComponent } from './pages/schedule-monthly/schedule-monthly.component';

/*Components */
import { DailyComponent } from './components/daily/daily.component';
import { WeeklyComponent } from './components/weekly/weekly.component';
import { MonthlyComponent } from './components/monthly/monthly.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ModalReservationComponent } from './components/modal-reservation/modal-reservation.component';

@NgModule({
  declarations: [
    ScheduleDailyComponent,
    ScheduleWeeklyComponent,
    ScheduleMonthlyComponent,
    ModalReservationComponent,
    DailyComponent,
    WeeklyComponent,
    MonthlyComponent,
    ReservationComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ScheduleModule { }
