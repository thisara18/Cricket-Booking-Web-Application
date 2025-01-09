package com.example.FinalProject.Repository;

import com.example.FinalProject.Model.SoftGroundModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

public interface SoftGroundRepository extends JpaRepository<SoftGroundModel,Integer> {
    List<SoftGroundModel> findByDate(LocalDate date);
    List<SoftGroundModel> findByMobile(String mobile);




}
