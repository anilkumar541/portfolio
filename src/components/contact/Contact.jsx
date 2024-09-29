import React from "react";
import FloatingInput from "../floating_input/FloatingInput";
import { useSetState } from "@mantine/hooks";
import { Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const service_id= "service_jxru1zo"
    const template_id= "template_5x2qalj"
    const public_key= "IteTW2Okt3xjsOAdk"
    const form = {
        name: "",
        email: "",
        message: ""
    };

    const [formData, setFormData] = useSetState(form);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // EmailJS integration
        console.log(formData, "okkk");
        
        emailjs.send(service_id, template_id, formData, public_key)
            .then(() => {
                alert("Message sent successfully!");
                console.log(form, "and", formData);
                setFormData(form); // Reset form after submission
            }, (error) => {
                console.error("Failed to send message:", error);
                alert("Failed to send message. Please try again.");
            });
    };

    return (
        <>
            <div className="xss-min:px-20 px-5 py-5 font-mono mt-16" id="Contact">
                <h1 className="text-4xl font-bold text-white mb-8 text-center">
                    <span className="text-primaryColor">05&nbsp;</span>Contact
                </h1>

                <div className="sm-min:w-[70%] m-auto border border-primaryColor rounded-xl p-8 flex flex-col gap-6 shadow-[0_0_10px_0px_#64FFDA80]">
                    <div className="text-white font-semibold text-2xl ">Let's connect</div>
                    <FloatingInput id="Name" name="name" value={formData.name} handleChange={handleInputChange} />
                    <FloatingInput id="Email" name="email" value={formData.email} handleChange={handleInputChange} />
                    <FloatingInput id="Message" name="message" value={formData.message} handleChange={handleInputChange} />
                    <Button
                        variant="filled"
                        size="lg"
                        radius="lg"
                        fullWidth
                        color="#64FFDA"
                        className="text-bgColor hover:text-bgColor font-bold"
                        rightSection={<IconArrowRight size={20} />}
                        onClick={handleSubmit} // Link the button with handleSubmit
                    >
                        Send
                    </Button>
                </div>
            </div>
        </>
    );
}
