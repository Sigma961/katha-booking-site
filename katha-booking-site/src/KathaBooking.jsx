
import React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export default function KathaBooking() {
  const [language, setLanguage] = useState("en");
  const [date, setDate] = useState(new Date());
  const [form, setForm] = useState({
    name: "",
    contact: "",
    location: "",
    kathaType: "Ram Katha",
    days: 5,
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Your booking request has been submitted! 🙏");
  };

  const labels = {
    en: {
      title: "Book a Katha Session",
      name: "Your Name",
      contact: "Contact Number",
      location: "Location",
      kathaType: "Select Katha Type",
      duration: "Duration (5-9 days)",
      notes: "Additional Notes",
      submit: "Submit Booking",
      contactInfo: "Contact: 7906903415",
    },
    hi: {
      title: "कथा सत्र बुक करें",
      name: "आपका नाम",
      contact: "संपर्क नंबर",
      location: "स्थान",
      kathaType: "कथा प्रकार चुनें",
      duration: "अवधि (5-9 दिन)",
      notes: "अतिरिक्त विवरण",
      submit: "बुकिंग सबमिट करें",
      contactInfo: "संपर्क: 7906903415",
    },
  };

  const t = labels[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-orange-100 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center my-6">
          <motion.img
            src="/channels4_profile.jpg"
            alt="Acharya Kuldeep Ji Maharaj"
            className="mx-auto rounded-full border-4 border-orange-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            width={150}
            height={150}
          />
          <h1 className="text-3xl font-bold mt-4">Acharya Kuldeep Ji Maharaj</h1>
          <p className="text-lg text-gray-700">{t.contactInfo}</p>
          <div className="mt-2">
            <Button variant="outline" onClick={() => setLanguage(language === "en" ? "hi" : "en")}>
              {language === "en" ? "हिंदी में देखें" : "View in English"}
            </Button>
          </div>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">{t.title}</h2>

            <div className="grid gap-4">
              <Input name="name" placeholder={t.name} onChange={handleChange} />
              <Input name="contact" placeholder={t.contact} onChange={handleChange} />
              <Input name="location" placeholder={t.location} onChange={handleChange} />

              <select name="kathaType" className="p-2 rounded border" onChange={handleChange}>
                <option>Ram Katha</option>
                <option>Krishna Katha</option>
                <option>Hanumanta Katha</option>
              </select>

              <Input
                name="days"
                type="number"
                min={5}
                max={9}
                placeholder={t.duration}
                onChange={handleChange}
              />

              <Calendar mode="single" selected={date} onSelect={setDate} className="border rounded" />

              <Textarea name="notes" placeholder={t.notes} onChange={handleChange} />

              <Button onClick={handleSubmit}>{t.submit}</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
