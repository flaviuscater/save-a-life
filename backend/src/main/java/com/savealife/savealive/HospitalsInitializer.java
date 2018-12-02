package com.savealife.savealive;

import com.savealife.savealive.model.Hospital;

public class HospitalsInitializer {
    private static Hospital[] hospitalsArray = {
            new Hospital(
                    1L,
                    "Spitalul Clinic Județean de Urgență Pius Brînzeu Timișoara",
                    "Bulevardul Liviu Rebreanu 156, Timișoara 300723",
                    "Timisoara, Romania",
                    "https://www.hosptm.ro/",
                    "Spitalul_Judetean_Timisoara.jpg",
                    "SPECIALITATI MEDICALE – SPITALUL CLINIC JUDETEAN DE URGENTA PIUS BRINZEU TIMISOARA\n" +
                           "Interne, Endocrinologie, Cardiologie, Diabet zaharat, nutritie si boli metabolice..."
            ),

            new Hospital(
                    2L,
                    "Spitalul Clinic Municipal de Urgență",
                    "Strada Gheorghe Dima, Timișoara",
                    "Timisoara, Romania",
                    "http://www.spitalul-municipal-timisoara.ro/",
                    "Spitalul_Municipal_Timisoara.jpg",
                    "Spitalul Clinic Municipal de Urgenţă Timisoara este una dintre instituţiile medicale de tradiţie şi" +
                            " care deserveşte municipiul Timisoara de foarte mulţi ani..."
            ),

            new Hospital(
                    3L,
                    "Spitalul Clinic de Urgență pentru Copii Louis Țurcanu",
                    "Strada Doctor Iosif Nemoianu 2, Timișoara 300011",
                    "Timisoara, Romania",
                    "http://www.spital-copii-timisoara.info/",
                    "Spitalul_LouisTurcanu_Timisoara.jpg",
                    "Spitalul Clinic de Urgență pentru Copii „Louis Țurcanu” Timișoara este principalul furnizor " +
                            "de servicii medicale cu profil pediatric din zona de vest a României..."

            ),
            new Hospital(
                    4L,
                    "Spitalul Militar de Urgență Dr. Victor Popescu",
                    "Strada Gheorghe Lazăr 7, Timișoara",
                    "Timisoara, Romania",
                    "http://www.smutm.ro/",
                    "Spitalul_Militar_Timisoara.jpg",
                    "SPECIALITATI MEDICALE – SPITALUL CLINIC MILITAR DE URGENTA DR. VICTOR POPESCU TIMISOARA\n" +
                            "Interne, Cardiologie, Neurologie..."

            ),
            new Hospital(
                    5L,
                    "Spitalul Universitar de Urgență București",
                    "Splaiul Independenței 169, București 050098",
                    "Bucuresti, Romania",
                    "http://www.suub.ro/",
                    "Spitalul_Universitar_Bucuresti.jpg",
                    "Spitalul Universitar de Urgenta Bucuresti\n" +
                            " este o clinica universitara cu o activitate stiintifica sustinuta..."

            ),
            new Hospital(
                    6L,
                    "Spitalul Clinic Județean de Urgență Cluj",
                    "Strada Clinicilor 3-5, Cluj-Napoca, Cluj 400000",
                    "Cluj-Napoca, Timisoara",
                    "http://www.scju-cluj.ro/Pages/default.aspx",
                    "Spitalul_Judetean_Cluj.jpg",
                    "Spitalul Clinic Judeţean de Urgenţă Cluj-Napoca, spital clasificat Categoria I," +
                            "  este una dintre cele mai mari unităţi sanitare cu paturi din România..."
            ),
    };

    public static Hospital[] getHospitalsArray() {
        return hospitalsArray;
    }
}
