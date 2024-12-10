/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Loader2, Mail, Phone, MapPin } from "lucide-react";
import Button from "../components/ui/Button";
import PageHero from "../components/layout/PageHero";
import ContactMap from "./ContactMap";
import Alert from "../components/ui/Alert";

const contactSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<"success" | "error" | "info">("success");
  const [alertMessage, setAlertMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/.netlify/functions/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "info@wildernesswheelsug.com",
          to: data.email,
          subject: "New Contact Form Submission",
          template: "contacts",
          parameters: {
            fullName: data.fullName,
            email: data.email,
            message: data.message,
          },
        }),
      });

      if (response.ok) {
        setAlertType("success");
        setAlertMessage("Message sent successfully!");
        reset();
      } else {
        setAlertType("error");
        setAlertMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setAlertType("error");
      setAlertMessage("Failed to send message. Please try again.");
    } finally {
      setShowAlert(true);
      setIsSubmitting(false);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <main>
      <PageHero
        title="Get in Touch"
        description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}
                method="POST"
                data-netlify="true"
              >
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    {...register("fullName")}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900">Email</p>
                      <a
                        href="mailto:info@wildernesswheelsug.com"
                        className="text-slate-600 hover:text-emerald-600"
                      >
                        info@wildernesswheelsug.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-slate-600 hover:text-emerald-600"
                      >
                        +256 700 870 088
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900">Address</p>
                      <p className="text-slate-600">
                        Hospitality and leisure industry
                        <br />
                        Kigo Road, Ssabagabo, Uganda
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <ContactMap />
            </div>
          </div>
        </motion.div>
      </div>

      {showAlert && (
        <Alert
          type={alertType}
          message={alertMessage}
          onClose={handleCloseAlert}
        />
      )}
    </main>
  );
};

export default Contact;
