"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { X, CheckCircle, AlertCircle, Info, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ToastContext = createContext(null);

const variants = {
  success: {
    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
    title: "Success",
    color: "bg-green-500",
  },
  error: {
    icon: <XCircle className="w-6 h-6 text-red-500" />,
    title: "Error",
    color: "bg-red-500",
  },
  warning: {
    icon: <AlertCircle className="w-6 h-6 text-yellow-500" />,
    title: "Warning",
    color: "bg-yellow-500",
  },
  info: {
    icon: <Info className="w-6 h-6 text-blue-500" />,
    title: "Info",
    color: "bg-blue-500",
  },
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider
      value={{
        success: (msg) => addToast("success", msg),
        error: (msg) => addToast("error", msg),
        warning: (msg) => addToast("warning", msg),
        info: (msg) => addToast("info", msg),
      }}
    >
      {children}

      {/* Toast Stack */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col space-y-3 z-50">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.section
              key={toast.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="max-w-xs w-full bg-white shadow-lg rounded-xl p-4 border flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3"
            >
              <div className="flex-shrink-0">{variants[toast.type].icon}</div>
              <div className="flex-1 w-full">
                <p className="font-semibold text-gray-800">{variants[toast.type].title}</p>
                <p className="text-gray-500 text-sm">{toast.message}</p>
                <div className="h-1 bg-gray-200 mt-2 rounded overflow-hidden">
                  <motion.div
                    className={`${variants[toast.type].color} h-1`}
                    initial={{ width: "100%" }}
                    animate={{ width: 0 }}
                    transition={{ duration: 4, ease: "linear" }}
                  />
                </div>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-gray-400 hover:text-gray-600 mt-2 sm:mt-0"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.section>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
