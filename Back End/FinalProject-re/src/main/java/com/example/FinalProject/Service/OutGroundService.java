package com.example.FinalProject.Service;


import com.example.FinalProject.Model.SoftGroundModel;
import com.example.FinalProject.Repository.SoftGroundRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OutGroundService {
    @Autowired
    private SoftGroundRepository softGroundRepository;

    public String saveSoftground(SoftGroundModel softGroundModel) {
        // Check for existing records on the same day
        List<SoftGroundModel> existingEntries = softGroundRepository.findByDate(softGroundModel.getDate());

        for (SoftGroundModel existingEntry : existingEntries) {
            // Check if the time overlaps or is identical
            if (isTimeOverlapping(
                    existingEntry.getStartTime(), existingEntry.getEndTime(),
                    softGroundModel.getStartTime(), softGroundModel.getEndTime()
            )) {
                return "Sorry In that time is not available";
            }
        }

        // If no overlap, save the new entry
        softGroundRepository.save(softGroundModel);
        int bookId = softGroundModel.getBookingId();
        return "Success: Entry saved. and your booking id is " + bookId;
    }

    // Utility method to check if time intervals overlap
    private boolean isTimeOverlapping(LocalTime existingStartTime, LocalTime existingEndTime, LocalTime newStartTime, LocalTime newEndTime) {
        return newStartTime.isBefore(existingEndTime) && newEndTime.isAfter(existingStartTime);
    }

    public String updateSoftground(SoftGroundModel softGroundModel) {
        Optional<SoftGroundModel> existingItem = softGroundRepository.findById(softGroundModel.getBookingId());

        if (existingItem.isPresent()) {
            softGroundRepository.save(softGroundModel);
            return "Your booking is updated successfully.";
        } else {
            return "Booking not found, update failed.";
        }
    }

    public List<Map<String, String>> GetSoftgrounds() {
        // Use findAll() and map each SoftGroundModel to a Map with only the required fields
        return softGroundRepository.findAll().stream().map(softGroundModel -> {
            Map<String, String> resultMap = new HashMap<>();

            // Convert LocalTime and LocalDate fields to String
            resultMap.put("startTime", softGroundModel.getStartTime().toString());
            resultMap.put("endTime", softGroundModel.getEndTime().toString());
            resultMap.put("date", softGroundModel.getDate().toString());

            return resultMap;
        }).collect(Collectors.toList());
    }




    public List<SoftGroundModel>GetSoftgroundsByMobile(String mobile)
    {
        return softGroundRepository.findByMobile(mobile);
    }

    public List<SoftGroundModel> GetSoftground(String mobile)
    {
        return softGroundRepository.findByMobile(mobile);
    }

    public String deleteBooking(int id){
        softGroundRepository.deleteById(id);
        return id+" "+"Removed";
    }

    public boolean deleteSoftgroundById(int bookingId) {
        Optional<SoftGroundModel> softGround = softGroundRepository.findById(bookingId);
        if (softGround.isPresent()) {
            softGroundRepository.deleteById(bookingId);
            return true;  // Successfully deleted
        } else {
            return false;  // Record not found
        }
    }


}
