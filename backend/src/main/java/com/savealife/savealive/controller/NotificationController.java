package com.savealife.savealive.controller;

import com.savealife.savealive.model.Notification;
import com.savealife.savealive.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@PreAuthorize("hasAnyRole('USER', 'ADMIN')")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping(value = "/notifications")
    public Iterable<Notification> getNotifications() {
        return notificationService.getAllNotifications();
    }

    @PostMapping(value = "/notifications")
    public ResponseEntity<Object> createNotification(@RequestBody Notification notification) {
        return notificationService.createNotification(notification);
    }

}