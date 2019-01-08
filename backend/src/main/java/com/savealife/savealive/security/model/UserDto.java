package com.savealife.savealive.security.model;

public class UserDto {

    private String username;
    private String password;
    private int age;
    private int salary;
    private Boolean donatedToday;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public Boolean hasDonatedToday() {
        return donatedToday;
    }

    public void setDonatedToday(boolean donatedToday) {
        this.donatedToday = donatedToday;
    }

}
