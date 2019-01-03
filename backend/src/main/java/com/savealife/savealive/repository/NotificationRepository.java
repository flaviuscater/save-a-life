package com.savealife.savealive.repository;

import com.savealife.savealive.model.Notification;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("notificationRepository")
public interface NotificationRepository extends CrudRepository<Notification, Long> {
}
