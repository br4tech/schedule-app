
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { getHours, isSameDay, isSameMonth} from 'date-fns';
import { Subject } from 'rxjs';
import { Reservation } from 'src/app/shared/models/reservation';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-contract-schedule',
  templateUrl: './contract-schedule.component.html'
})
export class ContractScheduleComponent implements OnInit {

  @ViewChild("modalContent", { static: true }) modalContent: TemplateRef<any> | undefined;

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = true;
  locale: string = 'pt-PT';
 
  reservation = {} as Reservation;
  reservations: Reservation[] = [];
  events: CalendarEvent[] = [];

  resercations: any;

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

  dayStartHour = 8;
  dayEndHour = 21

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


  constructor(
    private modal: NgbModal,  
    private activatedRoute: ActivatedRoute,
    private ngxService: NgxUiLoaderService
    ) {}

  ngOnInit() {
    this.ngxService.start(); 
    this.activatedRoute.data.subscribe((data) => {
     this.reservations = data.item.reservations
    });  
    this.mountCalendar(this.reservations) 
    this.ngxService.stop(); 
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

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: "lg" });
  }

  setView(view: CalendarView) {
    this.view = view;
  } 


  mountCalendar(reservations: any[]){
    reservations.map((f) => {
      let start = f.date + " " + f.time_start
      let end = f.date + " " + f.time_end
      let reservation_kind = f.detached ? "Avulsa" : "Normal"
      let description = " Médico(a) " + f.client_name + 
                        ", Unidade: " + f.unit_name +
                        ", Sala: " + f.office_name +
                        ", Horário: " + f.time_start + " até " + f.time_end +
                        ", Reserva: " + reservation_kind

      let reservation : CalendarEvent =  {
        start: new Date(start),   
        end: new Date(end),      
        title: description      
      }
      this.events.push(reservation)
    })

    new Date("2021-07-06  21:25:28")
 
  }
}
