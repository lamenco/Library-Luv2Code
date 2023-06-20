package com.lu2code.springbootlibrary.entity;


import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
@Data
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "user_email")
    private String userEmail;
    @CreationTimestamp
    private Date date;

    private double rating;
    @Column(name = "book_id")
    private Long bookId;
    @Column(name = "review_description")
    private String reviewDescription;
}
