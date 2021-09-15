import { AfterContentInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from '../../notification/notification.service';
import { InnerContentDirective } from '../inner-content.directive';
import { ModalContentComponent } from '../modal-content.interface';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})
export class BaseModalComponent<T> implements OnInit, AfterContentInit {

  @ViewChild(InnerContentDirective, { static: true }) content: InnerContentDirective;
  @Input() data: any;

  constructor(
    public activeModal: NgbActiveModal,
    private componentFactoryResolver: ComponentFactoryResolver,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.component);
    const viewContainerRef = this.content.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as ModalContentComponent).activeModal = this.activeModal;
    (componentRef.instance as ModalContentComponent).data = this.data;
  }

  ngAfterContentInit(){
    
  }

  close(){
    this.activeModal.close(this.data)
  }

  sucess(){
   this.notificationService.notificationSucess();
   this.activeModal.close(this.data)
  }

  error(){
    this.notificationService.notificationError();
    this.activeModal.close(this.data)
  }
}
