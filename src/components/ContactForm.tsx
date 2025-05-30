import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { ContactFormField } from './ContactFormField';
interface ContactFormProps {
  isVisible: boolean;
}
export const ContactForm = ({
  isVisible
}: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const {
    toast
  } = useToast();

  // EmailJS configuration - Updated with your credentials
  const EMAILJS_PUBLIC_KEY = '0hTRSRXVKQJPAzMrN';
  const EMAILJS_SERVICE_ID = 'service_u8aevj8';
  const EMAILJS_TEMPLATE_ID = 'template_obmza1d';
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Form input changed:', e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Reset success state when user starts typing again
    if (isSuccess) {
      setIsSuccess(false);
    }
  };
  const validateForm = () => {
    console.log('Validating form with data:', formData);
    if (!formData.name.trim()) {
      console.log('Validation failed: Name is empty');
      toast({
        title: "Validation Error",
        description: "Please enter your name.",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.email.trim()) {
      console.log('Validation failed: Email is empty');
      toast({
        title: "Validation Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.log('Validation failed: Invalid email format');
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.message.trim()) {
      console.log('Validation failed: Message is empty');
      toast({
        title: "Validation Error",
        description: "Please enter your message.",
        variant: "destructive"
      });
      return false;
    }
    console.log('Form validation passed');
    return true;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submit triggered');
    console.log('EmailJS configuration:', {
      EMAILJS_PUBLIC_KEY,
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID
    });
    if (!validateForm()) {
      console.log('Form validation failed, stopping submission');
      return;
    }
    setIsSubmitting(true);
    console.log('Starting email send process with data:', formData);
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: 'Rakshit Awasthi',
        message: formData.message,
        reply_to: formData.email
      };
      console.log('Template params prepared:', templateParams);
      console.log('Calling emailjs.send...');
      const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      console.log('EmailJS response received:', response);
      console.log('Email sent successfully with status:', response.status);

      // Show success toast
      toast({
        title: "Message Sent Successfully! ✅",
        description: "Thank you for reaching out! I'll get back to you soon."
      });

      // Reset form and show success state
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSuccess(true);
      console.log('Form reset and success state set');

      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        console.log('Success state reset');
      }, 5000);
    } catch (error) {
      console.error('EmailJS error occurred:', error);
      console.error('Error details:', {
        message: error.message,
        status: error.status,
        text: error.text
      });
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
      console.log('Form submission process completed, isSubmitting set to false');
    }
  };
  return <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
      <Card className="overflow-hidden">
        <CardContent className="p-8 my-[50px]">
          <h3 className="text-xl font-bold font-space mb-6 text-gray-900 dark:text-white">
            Send a Message
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <ContactFormField id="name" name="name" label="Your Name" type="text" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" disabled={isSubmitting} required animationDelay="0.2s" isVisible={isVisible} />

            <ContactFormField id="email" name="email" label="Email Address" type="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" disabled={isSubmitting} required animationDelay="0.4s" isVisible={isVisible} />

            <ContactFormField id="message" name="message" label="Message" type="textarea" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project or opportunity..." disabled={isSubmitting} required rows={4} animationDelay="0.6s" isVisible={isVisible} />

            <div className={`transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
            animationDelay: '0.8s'
          }}>
              <Button type="submit" disabled={isSubmitting} className={`w-full group transition-all duration-300 ${isSuccess ? 'bg-green-600 hover:bg-green-700' : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'}`}>
                {isSubmitting ? <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </> : isSuccess ? <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Message Sent!
                  </> : <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>;
};