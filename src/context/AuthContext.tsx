import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('simpleQuranUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('simpleQuranUser');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // For now, using localStorage for demo purposes
      // In production, replace this with actual API call
      const storedUsers = localStorage.getItem('simpleQuranUsers');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      const foundUser = users.find(
        (u: any) => u.email === email && u.password === password
      );

      if (foundUser) {
        const userWithoutPassword = {
          id: foundUser.id,
          name: foundUser.name,
          email: foundUser.email,
          createdAt: foundUser.createdAt,
        };
        setUser(userWithoutPassword);
        localStorage.setItem('simpleQuranUser', JSON.stringify(userWithoutPassword));
        return true;
      }

      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // For now, using localStorage for demo purposes
      // In production, replace this with actual API call
      const storedUsers = localStorage.getItem('simpleQuranUsers');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      // Check if user already exists
      const existingUser = users.find((u: any) => u.email === email);
      if (existingUser) {
        return false;
      }

      const newUser = {
        id: `user_${Date.now()}`,
        name,
        email,
        password, // In production, this should be hashed on the backend
        createdAt: new Date().toISOString(),
      };

      users.push(newUser);
      localStorage.setItem('simpleQuranUsers', JSON.stringify(users));

      const userWithoutPassword = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        createdAt: new Date(newUser.createdAt),
      };

      setUser(userWithoutPassword);
      localStorage.setItem('simpleQuranUser', JSON.stringify(userWithoutPassword));

      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('simpleQuranUser');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
