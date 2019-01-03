package com.savealife.savealive.service;

import com.savealife.savealive.model.Notification;
import org.springframework.http.ResponseEntity;

public interface INotificationService {

    Iterable<Notification> getAllNotifications();
    ResponseEntity<Object> createNotification(Notification notification);

}
