/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { PaperPlaneRight } from "@phosphor-icons/react";
import React, { useRef, useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

export default function ContactForm() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const form = useRef<any>(null);
  const [errors, setErrors] = useState<any>({});
  const [commentaryLength, setCommentaryLength] = useState(0);
  const [endingMessage, setEndingMessage] = useState("");

  const schema = z.object({
    email: z.string().email({ 
      message: isEnglish ? "Please enter a valid email." : "Veuillez entrer un email valide." 
    }),
    lastname: z
      .string()
      .optional()
      .refine((val) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/.test(val as any), {
        message: isEnglish ? "Last name must not contain numbers." : "Le nom de famille ne doit pas contenir de chiffres.",
      }),
    firstname: z
      .string()
      .optional()
      .refine((val) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/.test(val as any), {
        message: isEnglish ? "First name must not contain numbers." : "Le prénom ne doit pas contenir de chiffres.",
      }),
    commentary: z
      .string()
      .min(10, { 
        message: isEnglish ? "Please enter at least 10 characters." : "Veuillez entrer au moins 10 caractères." 
      })
      .max(3000, { 
        message: isEnglish ? "Please do not exceed 3000 characters." : "Veuillez ne pas dépasser 3000 caractères." 
      }),
  });

  const handleCommentaryChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommentaryLength(e.target.value.length);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      lastname: e.target.lastname.value,
      firstname: e.target.firstname.value,
      commentary: e.target.commentary.value,
    };

    const result = schema.safeParse(formData);
    if (!result.success) {
      setErrors(result.error.format());
      return;
    }
    emailjs.sendForm(serviceId!, templateId!, form.current, publicKey!).then(
      () => {
        console.log("Envoi réussi !");
        form.current.reset();
        setCommentaryLength(0);
        window.scrollBy({ top: 250, behavior: "smooth" });
        setEndingMessage(
          isEnglish
            ? "Thank you for filling out the form, a response will be sent within 24 hours maximum 👍"
            : "Merci à vous d'avoir rempli le formulaire, une réponse vous sera communiqué sous 24h maximum 👍"
        );
      },
      (error) => {
        console.log("FAILED...", error.text);
        console.error("Error details:", error);
        setEndingMessage("Une erreur s'est produite, veuillez réessayez.");
      }
    );
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="min-h-screen flex flex-col items-center"
      onSubmit={sendEmail}
      ref={form}
    >
      <div className="flex flex-col gap-10 w-[302px] sm:w-[404px] md:w-[431px] lg:w-[600px]">
        <div className="flex flex-col">
          <label className="font-medium text-darkBrown dark:text-lightYellow">
            email *
          </label>
          <input
            name="email"
            className="border-b-2 border-darkBrown bg-bgColorLight h-12 outline-none font-medium dark:bg-bgColorDark dark:border-lightYellow"
            type="email"
          />
          {errors.email && (
            <span className="my-3 text-lightBrown dark:text-darkYellow">
              {errors.email._errors[0]}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-darkBrown dark:text-lightYellow">
            {isEnglish ? "last name" : "nom"}
          </label>
          <input
            name="lastname"
            className="border-b-2 border-darkBrown bg-bgColorLight h-12 outline-none font-medium dark:bg-bgColorDark dark:border-lightYellow"
            type="text"
          />
          {errors.lastname && (
            <span className="my-3 text-lightBrown dark:text-darkYellow">
              {errors.lastname._errors[0]}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-darkBrown dark:text-lightYellow">
            {isEnglish ? "first name" : "prénom"}
          </label>
          <input
            name="firstname"
            className="border-b-2 border-darkBrown bg-bgColorLight h-12 outline-none font-medium dark:bg-bgColorDark dark:border-lightYellow"
            type="text"
          />
          {errors.firstname && (
            <span className="my-3 text-lightBrown dark:text-darkYellow">
              {errors.firstname._errors[0]}
            </span>
          )}
        </div>
        <div className="flex flex-col relative">
          <label className="font-medium text-darkBrown dark:text-lightYellow">
            {isEnglish ? "commentary" : "commentaire"} *
          </label>
          <textarea
            name="commentary"
            maxLength={3000}
            onChange={handleCommentaryChange}
            className="border-b-2 border-darkBrown bg-bgColorLight outline-none h-60 max-h-96 min-h-20 font-medium dark:bg-bgColorDark dark:border-lightYellow py-3"
          />
          {errors.commentary && (
            <span className="my-3 text-lightBrown dark:text-darkYellow">
              {errors.commentary._errors[0]}
            </span>
          )}
          <p className="absolute -bottom-7 right-0 text-sm font-light text-darkBrown dark:text-lightYellow">
            {commentaryLength} / 3000
          </p>
        </div>
      </div>
      <div className="flex w-[302px] sm:w-[404px] md:w-[431px] lg:w-[600px] justify-end mt-12">
        <button
          type="submit"
          className="bg-darkBrown dark:bg-darkYellow text-white px-6 py-2 rounded-lg hover:opacity-80 transition-all hover:scale-95"
        >
          <PaperPlaneRight size={24} />
        </button>
      </div>
      <p className="mt-16 text-center px-8 text-lg text-lightBrown md:mt-24 md:mb-12 lg:mt-32 lg:mb-24 dark:text-lightYellow">
        {endingMessage}
      </p>
    </motion.form>
  );
}
