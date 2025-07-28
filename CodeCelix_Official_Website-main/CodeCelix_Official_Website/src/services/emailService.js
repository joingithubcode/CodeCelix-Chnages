import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_9sflmxm';
const TEMPLATE_ID = 'template_rjr7rl8';
const PUBLIC_KEY = 'pk4sjgd18B4VLxBco';

export const sendContactEmail = async (formData) => {
    try {
        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            formData,
            PUBLIC_KEY
        );
        return { success: true, response };
    } catch (error) {
        return { success: false, error };
    }
};
