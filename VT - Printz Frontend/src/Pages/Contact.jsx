import React, { useState } from "react";
import axios from "axios";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const googleMapUrl =
        "https://www.google.com/maps?q=HR%20Tower%20Agroha%20Colony%20Raipur%20Chhattisgarh&output=embed";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
            setStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("Error sending message:", error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            {/* ================= HERO SECTION ================= */}
            <div className="bg-[#02192F] py-16 text-center px-4 mb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#DB2A7B] opacity-5"></div>
                <h1 className="HeroHeading text-4xl md:text-5xl text-white mb-4 relative z-10">
                    Get in <span className="text-[#DB2A7B]">Touch</span>
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto relative z-10">
                    Have a question about our printing services? Want a custom quote? Fill
                    out the form below or visit us at our store.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-black">
                    {/* ================= LEFT: CONTACT FORM ================= */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Mail className="text-[#DB2A7B]" /> Send us a Message
                        </h2>

                        {status === "success" && (
                            <div className="bg-green-50 text-green-700 p-4 rounded-xl mb-6 flex items-center gap-3 border border-green-100">
                                <CheckCircle2 size={20} />
                                <span>Message sent successfully! We'll get back to you soon.</span>
                            </div>
                        )}

                        {status === "error" && (
                            <div className="bg-red-50 text-red-700 p-4 rounded-xl mb-6 border border-red-100">
                                Failed to send message. Please try again or call us directly.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#DB2A7B] focus:ring focus:ring-[#DB2A7B]/20 transition outline-none"
                                        placeholder="John Doe"
                                        disabled={loading}
                                        autoComplete="off"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#DB2A7B] focus:ring focus:ring-[#DB2A7B]/20 transition outline-none"
                                        placeholder="+91 98765 43210"
                                        disabled={loading}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#DB2A7B] focus:ring focus:ring-[#DB2A7B]/20 transition outline-none"
                                    placeholder="john@example.com"
                                    disabled={loading}
                                    autoComplete="off"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#DB2A7B] focus:ring focus:ring-[#DB2A7B]/20 transition outline-none"
                                    placeholder="Inquiry about T-Shirt Printing"
                                    disabled={loading}
                                    autoComplete="off"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#DB2A7B] focus:ring focus:ring-[#DB2A7B]/20 transition outline-none resize-none"
                                    placeholder="Tell us about your requirements..."
                                    disabled={loading}
                                    autoComplete="off"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#02192F] hover:bg-[#032545] text-white font-semibold py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-lg shadow-lg shadow-[#02192F]/20"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} /> Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* ================= RIGHT: INFO & MAP ================= */}
                    <div className="space-y-8">
                        {/* Contact Details Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition text-center">
                                <div className="w-12 h-12 bg-blue-50 text-[#02192F] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Phone size={24} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                                <p className="text-gray-600 text-sm">Mon-Sat: 10am - 8pm</p>
                                <a
                                    href="tel:+919876543210"
                                    className="block mt-2 font-semibold text-[#DB2A7B] hover:underline"
                                >
                                    +91-98765 43210
                                </a>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition text-center">
                                <div className="w-12 h-12 bg-pink-50 text-[#DB2A7B] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail size={24} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                                <p className="text-gray-600 text-sm">For quotes & support</p>
                                <a
                                    href="mailto:contact@vtprintz.com"
                                    className="block mt-2 font-semibold text-[#DB2A7B] hover:underline"
                                >
                                    contact@vtprintz.com
                                </a>
                            </div>
                        </div>

                        {/* Address & Map */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                            <div className="p-6 border-b border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 text-[#DB2A7B]">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            Our Location
                                        </h3>
                                        <p className="text-gray-600 mt-2 leading-relaxed">
                                            <strong>VT-Printz (HK Enterprises)</strong>
                                            <br />
                                            Beside HR Tower, Manuas Reality Road,
                                            <br />
                                            Agroha Colony, Raipur, Chhattisgarh – 492001
                                        </p>
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=HR+Tower+Agroha+Colony+Raipur+Chhattisgarh"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-4 text-sm font-semibold text-[#02192F] underline hover:text-[#DB2A7B]"
                                        >
                                            Get Directions
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[350px] w-full bg-gray-100">
                                <iframe
                                    title="VT Printz Location"
                                    src={googleMapUrl}
                                    className="w-full h-full border-0"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
