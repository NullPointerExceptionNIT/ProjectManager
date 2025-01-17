import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, fetchUserProfile, registerUser } from "../api";
import { API } from "../api";
const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const user = await fetchUserProfile(token);
          setUser(user);
        } catch (error) {
          setUser(null);
        }
      };
      getUser();
    }
  }, [token]);

  const login = async (username, password) => {
    const response = await loginUser({ username, password });
    if (response?.access_token) {
      setToken(response.access_token);
      localStorage.setItem("token", response.access_token);
      const userProfile = await fetchUserProfile(response.access_token);
      setUser(userProfile);
      return true;
    }
    return false;
  };

  const register = async (
    username,
    email,
    password,
    skills,
    experience,
    role
  ) => {
    role = parseInt(role);
    await registerUser({ username, email, password, skills, experience, role });
    navigate("/Login");
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    navigate("/Login");
  };
  const requestWithToken = async (config) => {
    try {
      const response = await API.request({
        ...config,
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    } catch (error) {
      if (error?.response?.status == 401) navigate("/");
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, user, login, register, logout, requestWithToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
