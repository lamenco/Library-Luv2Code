package com.lu2code.springbootlibrary.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "messages")
@Data
public class Message {
    public Message() {
    }

    public Message(String title, String question) {
        this.title = title;
        this.question = question;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "user_email")
    private String userEmail;
    private String title;
    private String question;
    @Column(name = "admin_email ")
    private String adminEmail;
    private String response;
    private Boolean closed;

}
