package com.savealife.savealive.service;

import com.savealife.savealive.model.Notification;
import com.savealife.savealive.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@Service("notificationService")
public class NotificationService implements INotificationService {

    @Autowired
    NotificationRepository notificationRepository;

    @Override
    public Iterable<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }

    @Override
    public ResponseEntity<Object> createNotification(Notification notification) {
        Notification savedNotification = notificationRepository.save(notification);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(savedNotification.getNotificationId()).toUri();

        return ResponseEntity.created(location).build();
    }
}
