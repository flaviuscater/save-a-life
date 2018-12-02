package com.savealife.savealive.model;

import javax.persistence.*;

@Entity
@Table(name = "hospital")
public class Hospital {

    @Id
    //@GeneratedValue
    @Column(name = "id")
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "address")
    private String address;
    @Column(name = "city")
    private String city;
    @Column(name = "visitUrl")
    private String visitUrl;
    @Column(name = "imgName")
    private String imgName;
    @Column(name = "descriptiontext")
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

    public Hospital(Long id, String name, String address, String city, String visitUrl, String imgName, String descriptionText) {
        this(name, address);
        this.id = id;
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
