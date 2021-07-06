
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { endOfMonth, endOfWeek, isSameDay, isSameMonth, startOfDay } from 'date-fns';
import { Subject } from 'rxjs';
import { Reservation } from 'src/app/shared/models/reservation';
import { ScheduleService } from '../schedule.service';
@Component({
  selector: 'app-contract-schedule',
  templateUrl: './contract-schedule.component.html'
})
export class ContractScheduleComponent implements OnInit {

  @ViewChild("modalContent", { static: true }) modalContent: TemplateRef<any> | undefined;

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  activeDayIsOpen: boolean = true;
  locale: string = 'pt-PT';
 
  reservation = {} as Reservation;
  reservations: Reservation[] = [];
  events: CalendarEvent[]

  modalData!: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: "Edit",
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent("Edited", event);
      }
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: "Delete",
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent("Deleted", event);
      }
    }
  ];

  refresh: Subject<any> = new Subject(); 

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }


  constructor(private modal: NgbModal, private scheduleService: ScheduleService) { 
  }

  ngOnInit() {
    this.getReservations()
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: "lg" });
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  setView(view: CalendarView) {
    this.view = view;
  }
  
  getReservations() {
    this.scheduleService.getReservations().subscribe((data: any) => {
      this.reservations = data.reservations
    });
    this.mountCalendar(this.reservations)
  }

  mountCalendar(reservations: any){
    // reservations.forEach(f => {
    //   let reservation : CalendarEvent =  {
    //     start: startOfDay(f.date),       
    //     title: f.client_name,
    //   }

    //   this.events.push(reservation)
    // })
 
  }
}
