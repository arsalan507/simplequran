import axios from 'axios';

/**
 * Initialize payment - creates request via backend API
 */
export const initiatePayment = async (
  name: string,
  email: string,
  phone: string
): Promise<{ success: boolean; url?: string; error?: string }> => {
  try {
    // Call our backend API instead of Instamojo directly
    const response = await axios.post('/api/create-payment', {
      name,
      email,
      phone,
    });

    if (response.data.success && response.data.payment_url) {
      return {
        success: true,
        url: response.data.payment_url,
      };
    } else {
      return {
        success: false,
        error: response.data.error || 'Failed to create payment',
      };
    }
  } catch (error: any) {
    console.error('Payment initialization error:', error);

    if (error.response?.data) {
      return {
        success: false,
        error: error.response.data.error || 'Payment request failed',
      };
    }

    return {
      success: false,
      error: error.message || 'Payment initialization failed',
    };
  }
};
