import React, { useState } from 'react';
import axios from 'axios';

export default function AddEvent() {
    const [formData, setFormData] = useState({
        event_title: '',
        event_description: '',
        event_venue: '',
        event_startdate: '',
        event_enddate: '',
        event_starttime: '',
        event_endtime: '',
        event_image: '',
        event_price: '',
        organizer: '',
        organizer_contact: '',
        form_link: '',
        category: '',
        tags: '',
        event_status: 'pending'
    });

    const [imageFile, setImageFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleImageUpload = async () => {
        if (imageFile) {
            const formData = new FormData();
            formData.append('event_image', imageFile);

            try {
                const response = await axios.post('http://localhost:3000/upload', formData);
                return response.data.imageUrl;
            } catch (error) {
                console.error('Image upload failed:', error);
                return null;
            }
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const uploadedImageUrl = await handleImageUpload();

        if (uploadedImageUrl) {
            const finalFormData = {
                ...formData,
                event_image: uploadedImageUrl,
            };

            axios
                .post("http://localhost:3000/event/createevent", finalFormData)
                .then((res) => {
                    console.log("User Event", res.data);
                    alert("Event successfully created!");
                    setFormData({
                        event_title: '',
                        event_description: '',
                        event_venue: '',
                        event_startdate: '',
                        event_enddate: '',
                        event_starttime: '',
                        event_endtime: '',
                        event_image: '',
                        event_price: '',
                        organizer: '',
                        organizer_contact: '',
                        form_link: '',
                        category: '',
                        tags: '',
                        event_status: 'pending'
                    });
                    setImageFile(null);
                })
                .catch((err) => {
                    console.error("An error occurred", err.response.data);
                    alert("Failed to create event. Please check the console for details.");
                });
        } else {
            alert("Failed to upload image. Please try again.");
        }
    };

    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Add Your Event</h1>

                    <form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="event_title">Event Title</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                                placeholder="Event Title"
                                name='event_title'
                                value={formData.event_title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="event_description">Event Description</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                                placeholder="Event Description"
                                name='event_description'
                                value={formData.event_description}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="event_venue">Event Venue</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                                placeholder="Event Venue"
                                name='event_venue'
                                value={formData.event_venue}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="event_startdate">Event Start Date</label>
                            <input
                                type="date"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                                placeholder="Event Start Date"
                                name='event_startdate'
                                value={formData.event_startdate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="event_enddate">Event End Date</label>
                            <input
                                type="date"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                                placeholder="Event End Date"
                                name='event_enddate'
                                value={formData.event_enddate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="event_starttime">Event Start Time</label>
                            <input
                                type="time"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                                placeholder="Event Start Time"
                                name='event_starttime'
                                value={formData.event_starttime}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="event_endtime">Event End Time</label>
                            <input
                                type="time"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                                placeholder="Event End Time"
                                name='event_endtime'
                                value={formData.event_endtime}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="event_image">Event Poster</label>
                            <input
                                type="file"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                                placeholder="Event Poster"
                                name='event_image'
                                onChange={handleFileChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="event_price">Event Price</label>
                            <input
                                type="number"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                                placeholder="Event Price"
                                name='event_price'
                                value={formData.event_price}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="organizer">Event Organizer</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                                placeholder="Event Organizer"
                                name='organizer'
                                value={formData.organizer}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="organizer_contact">Event Organizer Contact</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                                placeholder="Event Organizer Contact"
                                name='organizer_contact'
                                value={formData.organizer_contact}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="form_link">Event Form Link</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                                placeholder="Event Form Link"
                                name='form_link'
                                value={formData.form_link}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="category">Event Category</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                                placeholder="Event Category"
                                name='category'
                                value={formData.category}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="tags">Event Tags</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                                placeholder="Event Tags"
                                name='tags'
                                value={formData.tags}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="event_status">Event Status</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                                placeholder="Event Status"
                                name='event_status'
                                value={formData.event_status}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Add Event
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
