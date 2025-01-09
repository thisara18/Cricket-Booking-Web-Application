package com.example.FinalProject.Controller;


import com.example.FinalProject.Model.SoftGroundModel;
import com.example.FinalProject.Service.SoftGroundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/outground")
@CrossOrigin("http://localhost:5175")
public class OutGroundController {

    @Autowired
    private SoftGroundService softGroundService;

        @PostMapping("/addOutground")
    public String addSoftgrounds(@RequestBody SoftGroundModel softGroundModel) {
        return softGroundService.saveSoftground(softGroundModel);
    }

    @PutMapping("/updateOuftground")
    public String updateItem(@RequestBody SoftGroundModel softGroundModel) {
        return softGroundService.updateSoftground(softGroundModel);
    }

    @GetMapping("/getBookings")
    public List<Map<String, String>> getAllSoftground() {
        return softGroundService.GetSoftgrounds();
    }

    @PostMapping("/findByMobile")
    public List<SoftGroundModel> GetSoftgroundsByMobile(@RequestBody Map<String, String> requestBody)
    {
        String mobile = requestBody.get("mobile");
        return softGroundService.GetSoftgroundsByMobile(mobile);
    }

    @GetMapping("/findByMobile/{mobile}")
    public List<SoftGroundModel> GetSoftground(@PathVariable String mobile){
        return softGroundService.GetSoftground(mobile);
    }


    @DeleteMapping("/deleteOutground/{id}")
    public String deleteBooking(@PathVariable int id){
        return softGroundService.deleteBooking(id);
    }

    @DeleteMapping("/deleteById")
    public String deleteSoftgroundById(@RequestBody Map<String, Integer> requestBody) {
        int bookingId = requestBody.get("bookingId");  // Extract id from the request body
        boolean isDeleted = softGroundService.deleteSoftgroundById(bookingId);
        if (isDeleted) {
            return "Record with ID " + bookingId + " has been deleted successfully!";
        } else {
            return "Record with ID " + bookingId + " not found.";
        }
    }

}
