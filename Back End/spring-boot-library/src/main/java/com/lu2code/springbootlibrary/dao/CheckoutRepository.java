package com.lu2code.springbootlibrary.dao;

import com.lu2code.springbootlibrary.entity.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CheckoutRepository extends JpaRepository<Checkout, Long> {

    Checkout findByUserEmailAndBookId(String userEmail,Long bookId);

    List<Checkout> findBooksByUserEmail(String userEmail);
}
