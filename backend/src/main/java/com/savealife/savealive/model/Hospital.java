package com.savealife.savealive.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Hospital {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String address;
    private String city;
    private String visitUrl;
    private String imgName;
    private String descriptionText;

    public Hospital() {
        super();
    }

    public Hospital(String name, String address) {
        this();
        this.name = name;
        this.address = address;
        this.visitUrl = "";
        this.imgName = "";
        this.descriptionText = "";
    }

    public Hospital(String name, String address, String city, String visitUrl, String imgName, String descriptionText) {
        this(name, address);
        this.city = city;
        this.visitUrl = visitUrl;
        this.imgName = imgName;
        this.descriptionText = descriptionText;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getVisitUrl() {
        return visitUrl;
    }

    public void setVisitUrl(String visitUrl) {
        this.visitUrl = visitUrl;
    }

    public String getImgName() {
        return imgName;
    }

    public void setImgName(String imgName) {
        this.imgName = imgName;
    }

    public String getDescriptionText() {
        return descriptionText;
    }

    public void setDescriptionText(String descriptionText) {
        this.descriptionText = descriptionText;
    }
}
