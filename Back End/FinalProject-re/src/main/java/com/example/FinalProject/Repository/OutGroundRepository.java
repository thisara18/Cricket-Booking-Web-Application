package com.example.FinalProject.Repository;

import com.example.FinalProject.Model.SoftGroundModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface OutGroundRepository extends JpaRepository<SoftGroundModel,Integer> {
    List<SoftGroundModel> findByDate(LocalDate date);
    List<SoftGroundModel> findByMobile(String mobile);
}
