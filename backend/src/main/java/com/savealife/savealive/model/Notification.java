package com.savealife.savealive.model;

import javax.persistence.*;

@Entity
@Table(name = "notification")
public class Notification {

    @Id
    @GeneratedValue
    @Column(name = "notificationId")
    private int notificationId;

    @Column(name = "hospitalName")
    private String hospitalName;

    @Column(name = "description")
    private String description;

    @Column(name = "bloodDonationAmountNeeded")
    private int bloodDonationAmountNeeded;

    @Column(name = "completed")
    private boolean completed;

    public Notification() {
        super();
    }

    public Notification(String hospitalName, String description, int bloodDonationAmountNeeded) {
        this();
        this.hospitalName = hospitalName;
        this.bloodDonationAmountNeeded = bloodDonationAmountNeeded;
        this.description = description;
        this.completed = false;
    }

    public int getNotificationId() {
        return notificationId;
    }

    public void setNotificationId(int notificationId) {
        this.notificationId = notificationId;
    }

    public String getHospitalName() {
        return hospitalName;
    }

    public void setHospitalName(String hospitalName) {
        this.hospitalName = hospitalName;
    }

    public int getBloodDonationAmountNeeded() {
        return bloodDonationAmountNeeded;
    }

    public void setBloodDonationAmountNeeded(int bloodDonationAmountNeeded) {
        this.bloodDonationAmountNeeded = bloodDonationAmountNeeded;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        completed = completed;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
