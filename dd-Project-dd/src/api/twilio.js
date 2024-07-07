import axios from 'axios';

const TWILIO_API_BASE_URL = 'https://api.twilio.com';

const sendSMS = async (phoneNumber, message) => {
  try {
    const response = await axios.post(`${TWILIO_API_BASE_URL}/sendSMS`, {
      phoneNumber,
      message,
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to send SMS via Twilio API');
  }
};

export { sendSMS };