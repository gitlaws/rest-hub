import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NotificationService } from '../../../../core/services/notification.service';
import { Notification } from '../../../../core/models/notification.model';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  @Input() message!: string;
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.getNotifications().subscribe((notifications) => {
      this.notifications = notifications;
    });
  }
}
