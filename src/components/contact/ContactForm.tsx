"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/shared/Button";
import AnimatedSection from "@/components/shared/AnimatedSection";

const inputClassName =
  "w-full rounded-full bg-white px-6 py-4 text-sm text-textDark outline-none placeholder:text-[#9CA3A3] focus:ring-2 focus:ring-primary/10";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    companyName: "",
    workEmail: "",
    phoneNumber: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      jobTitle: "",
      companyName: "",
      workEmail: "",
      phoneNumber: "",
    });
  };

  return (
    <AnimatedSection>
      <div className="rounded-3xl bg-[#F4FAF9] px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-14">
        <h1 className="text-[1.75rem] font-extrabold leading-tight text-textDark md:text-[2rem] lg:text-[2.125rem]">
          Get in Touch With Our Team
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4 md:mt-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className={inputClassName}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className={inputClassName}
              required
            />
          </div>

          <input
            type="text"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={(e) =>
              setFormData({ ...formData, jobTitle: e.target.value })
            }
            className={inputClassName}
            required
          />

          <input
            type="text"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
            className={inputClassName}
            required
          />

          <input
            type="email"
            placeholder="Work Email"
            value={formData.workEmail}
            onChange={(e) =>
              setFormData({ ...formData, workEmail: e.target.value })
            }
            className={inputClassName}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            className={inputClassName}
            required
          />

          <div className="pt-2">
            <Button type="submit" size="lg" className="px-10">
              Speak to Us
            </Button>
          </div>
        </form>
      </div>
    </AnimatedSection>
  );
}
