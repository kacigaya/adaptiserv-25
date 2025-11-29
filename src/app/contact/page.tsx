"use client";

import { useState } from "react";
import EmailInput from "@/components/input/email-input";
import NameInputComponent from "@/components/input/name-input";
import Name2InputComponent from "@/components/input/name2-input";
import PhoneInputComponent from "@/components/input/phone-input";
import MessageInputComponent from "@/components/input/message-input";
import SiretInputComponent from "@/components/input/siret-input";
import DateInputComponent from "@/components/input/date-input";
import TimeInputComponent from "@/components/input/time-input";
import ServiceInputComponent from "@/components/input/service-input";
import LoadingButton from "@/components/button/loading-button";
import SplitText from "@/components/text/SplitText";
import SuccessToast from "@/components/toast/true";
import FailToast from "@/components/toast/false";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

interface FormData {
  name: string;
  name2: string;
  email: string;
  siret: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    name2: "",
    email: "",
    siret: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: result.message || "Votre message a été envoyé avec succès!",
        });
        setFormData({
          name: "",
          name2: "",
          email: "",
          siret: "",
          phone: "",
          date: "",
          time: "",
          service: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: result.error || "Une erreur s'est produite lors de l'envoi.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Une erreur réseau s'est produite. Veuillez réessayer.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 py-20 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <SplitText
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight"
            text="Contactez-nous"
          />
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Vous avez un projet ? Une question ? Notre équipe est là pour vous répondre.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-8">
              <div className="p-8 h-full bg-blue-50 dark:bg-gray-800 rounded-3xl border border-blue-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Nos coordonnées</h3>
                <p className="mb-8 text-gray-600 dark:text-gray-300">
                  Remplissez le formulaire et notre équipe vous recontactera sous 24h.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                      <PhoneIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium opacity-70 text-sm text-gray-500 dark:text-gray-400">Téléphone</div>
                      <div className="font-semibold text-gray-900 dark:text-white">+33 1 23 45 67 89</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                      <MailIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium opacity-70 text-sm text-gray-500 dark:text-gray-400">Email</div>
                      <div className="font-semibold text-gray-900 dark:text-white">contact@adaptiserv.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                      <MapPinIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium opacity-70 text-sm text-gray-500 dark:text-gray-400">Bureau</div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        123 Avenue des Champs-Élysées<br/>
                        75008 Paris, France
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-4">
                    {/* Social icons placeholders */}
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors cursor-pointer flex items-center justify-center text-gray-600 dark:text-gray-300">
                       <span className="sr-only">LinkedIn</span>
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors cursor-pointer flex items-center justify-center text-gray-600 dark:text-gray-300">
                       <span className="sr-only">Twitter</span>
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 dark:border-gray-800">
              {/* Status Messages */}
              {status.type && (
                <div
                  className={`mb-6 ${
                    status.type === "success" ? <SuccessToast /> : <FailToast />
                  }`}
                ></div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <NameInputComponent
                    value={formData.name}
                    onChange={(value: string) => handleInputChange("name", value)}
                  />
                  <Name2InputComponent
                    value={formData.name2}
                    onChange={(value: string) => handleInputChange("name2", value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <EmailInput
                    value={formData.email}
                    onChange={(value: string) => handleInputChange("email", value)}
                  />
                  <SiretInputComponent
                    value={formData.siret}
                    onChange={(value: string) => handleInputChange("siret", value)}
                  />
                </div>

                <PhoneInputComponent
                  value={formData.phone}
                  onChange={(value: string) => handleInputChange("phone", value)}
                />

                <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                    Préférences de contact
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <DateInputComponent
                      value={formData.date}
                      onChange={(value: string) => handleInputChange("date", value)}
                    />
                    <TimeInputComponent
                      value={formData.time}
                      onChange={(value: string) => handleInputChange("time", value)}
                    />
                    <div className="space-y-2">
                      <div className="relative">
                        <ServiceInputComponent
                          value={formData.service}
                          onChange={(value: string) =>
                            handleInputChange("service", value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <MessageInputComponent
                    value={formData.message}
                    onChange={(value: string) => handleInputChange("message", value)}
                  />
                </div>

                <div className="pt-4">
                  <LoadingButton
                    isLoading={isLoading}
                    disabled={isLoading}
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
