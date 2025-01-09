import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './BookingConfirmation.css'; // Import your styling here

const BookingConfirmation = () => {
    const [bookings, setBookings] = useState([]);
    const [mobile, setMobile] = useState('');
    const [showAll, setShowAll] = useState(false);
    const [editableBookingId, setEditableBookingId] = useState(null);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate(); // Use navigate hook for routing

    // Fetch all bookings from the API
    const fetchAllBookings = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/softground/getBookings', {
                method: 'GET',
            });
            const data = await response.json();
            setBookings(data);
            setShowAll(true);
        } catch (error) {
            console.error('Error fetching all bookings:', error.message);
        }
    };

    // Fetch bookings by mobile number
    const fetchBookingsByMobile = async () => {
        if (!mobile) {
            console.error('Mobile number is required.');
            return;
        }
    
        try {
            const response = await fetch(`http://localhost:8080/api/v1/softground/findByMobile/${mobile}`, {
                method: 'GET',
            });
    
            if (!response.ok) {
                console.error('Failed to fetch bookings for mobile number:', mobile);
                return;
            }
    
            const data = await response.json();
            console.log('Bookings fetched for mobile:', data);
    
            setBookings(data);
            setShowAll(false);
        } catch (error) {
            console.error('Error fetching bookings by mobile:', error.message);
        }
    };

    // Handle edit booking data
    const handleEdit = (booking) => {
        setEditableBookingId(booking.bookingId);
        setFormData({ ...booking });
    };

    // Handle input change for booking edit
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Update booking data
    const handleUpdate = async (bookingId) => {
        try {
            await fetch(`http://localhost:8080/api/v1/softground/updateSoftground`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, bookingId }), // Include bookingId in the request body
            });
            setEditableBookingId(null); // Exit edit mode after update
            fetchBookingsByMobile(); // Refresh the list
        } catch (error) {
            console.error('Error updating booking:', error.message);
        }
    };

    const handleDelete = async (bookingId) => {
        try {
            await fetch(`http://localhost:8080/api/v1/softground/deleteSoft/${bookingId}`, {
                method: 'DELETE',
            });
            fetchBookingsByMobile(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting booking:', error.message);
        }
    };

    // Handle navigation back to Booking page
    const handleNavigateToBooking = () => {
        navigate('/booking'); // Navigate to the booking page
    };

    return (
        <div className="confirmation-container">
            <div className="button-group">
                <button onClick={fetchAllBookings}>Show All Bookings</button>
                <div className="show-my-bookings">
                    <input
                        type="text"
                        placeholder="Enter Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    <button onClick={fetchBookingsByMobile}>Show My Bookings</button>
                </div>
            </div>

            {/* Button to navigate back to the Booking page */}
            <button onClick={handleNavigateToBooking} className="navigate-to-booking">
                Go Back to Booking
            </button>

            {bookings.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            {showAll ? (
                                <>
                                    <th>Date</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                </>
                            ) : (
                                <>
                                    <th>Booking ID</th>
                                    <th>Name</th>
                                    <th>Mobile</th>
                                    <th>Date</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                    <th>Actions</th>
                                </>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking.bookingId}>
                                {showAll ? (
                                    <>
                                        <td>{booking.date}</td>
                                        <td>{booking.startTime}</td>
                                        <td>{booking.endTime}</td>
                                    </>
                                ) : (
                                    <>
                                        <td>{booking.bookingId}</td>
                                        <td>{editableBookingId === booking.bookingId ? (
                                            <input
                                                type="text"
                                                name="cusName"
                                                value={formData.cusName || ''}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            booking.cusName
                                        )}
                                        </td>
                                        <td>{editableBookingId === booking.bookingId ? (
                                            <input
                                                type="tel"
                                                name="mobile"
                                                value={formData.mobile || ''}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            booking.mobile
                                        )}
                                        </td>
                                        <td>{editableBookingId === booking.bookingId ? (
                                            <input
                                                type="date"
                                                name="date"
                                                value={formData.date || ''}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            booking.date
                                        )}
                                        </td>
                                        <td>{editableBookingId === booking.bookingId ? (
                                            <input
                                                type="time"
                                                name="startTime"
                                                value={formData.startTime || ''}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            booking.startTime
                                        )}
                                        </td>
                                        <td>{editableBookingId === booking.bookingId ? (
                                            <input
                                                type="time"
                                                name="endTime"
                                                value={formData.endTime || ''}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            booking.endTime
                                        )}
                                        </td>
                                        <td>
                                            {editableBookingId === booking.bookingId ? (
                                                <button onClick={() => handleUpdate(booking.bookingId)}>Save</button>
                                            ) : (
                                                <button onClick={() => handleEdit(booking)}>Edit</button>
                                            )}
                                            <button
                                                onClick={() => handleDelete(booking.bookingId)}
                                                style={{ backgroundColor: 'red', color: 'white' }}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default BookingConfirmation;
