import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export interface OrderData {
  orderId: string;
  email: string;
  paymentId: string;
  timestamp: number;
}

/**
 * Generate a JWT token for an order
 */
export function generateOrderToken(data: OrderData): string {
  return jwt.sign(data, JWT_SECRET, {
    expiresIn: '365d', // Token valid for 1 year
  });
}

/**
 * Verify and decode a JWT token
 */
export function verifyOrderToken(token: string): OrderData | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as OrderData;
    return decoded;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}
