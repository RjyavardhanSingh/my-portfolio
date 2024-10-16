import React, { useState } from 'react';
import { ShootingStars } from '../components/ui/Shooting-Stars';
import { StarsBackground } from '../components/ui/Stars-Background';

export function FeedbackSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    suggestion: ''
  });

  const [loading, setLoading] = useState(false); // For button loading state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Feedback submission function
  const submitFeedback = async (formData) => {
    try {
      setLoading(true);
      const response = await fetch('https://backend-54mis59np-raj-vs-projects.vercel.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message); // Show success message
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting feedback. Please try again later.');
    } finally {
      setLoading(false); // Reset loading state after submission
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFeedback(formData); 
  };

  return (
    <section id="feedback-section" className="relative h-screen w-screen flex flex-col justify-center items-center bg-neutral-900 overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <ShootingStars />
        <StarsBackground />
      </div>

      <div className="relative z-10 w-full max-w-lg p-8 bg-transparent">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white text-lg">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="p-2 mt-2 text-white bg-transparent border border-white rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="p-2 mt-2 text-white bg-transparent border border-white rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="contact" className="text-white text-lg">Contact Number</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              className="p-2 mt-2 text-white bg-transparent border border-white rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="suggestion" className="text-white text-lg">Suggestion</label>
            <textarea
              id="suggestion"
              name="suggestion"
              value={formData.suggestion}
              onChange={handleInputChange}
              maxLength={500}
              className="p-2 mt-2 text-white bg-transparent border border-white rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 h-40 resize-none"
              placeholder="Write your suggestion (max 500 words)..."
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full p-3 mt-4 text-lg font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading} // Disable button while submitting
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
}
