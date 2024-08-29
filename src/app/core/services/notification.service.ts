import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Notification } from '../models/notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  getNotifications(): Observable<Notification[]> {
    // Mock data for example purposes
    const notifications: Notification[] = [
      { message: 'New message received', createdAt: new Date() },
      { message: 'Server maintenance scheduled', createdAt: new Date() },
    ];
    return of(notifications);
  }
}
