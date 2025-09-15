"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { X, CheckCircle, AlertCircle, Info, XCircle } from "lucide-react";

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
  const [toast, setToast] = useState({ show: false, type: "success", message: "" });

  useEffect(() => {
    let timer;
    if (toast.show) {
      timer = setTimeout(() => setToast({ ...toast, show: false }), 4000);
    }
    return () => clearTimeout(timer);
  }, [toast]);

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
  };

  return (
    <ToastContext.Provider value={{
      success: (msg) => showToast("success", msg),
      error: (msg) => showToast("error", msg),
      warning: (msg) => showToast("warning", msg),
      info: (msg) => showToast("info", msg),
    }}>
      {children}

      {/* Toast UI */}
      {toast.show && (
        <div className="fixed bottom-5 right-5 max-w-xs w-full bg-white shadow-lg rounded-xl p-4 border flex items-start space-x-3 animate-slide-up z-50">
          <div className="flex-shrink-0">{variants[toast.type].icon}</div>
          <div className="flex-1">
            <p className="font-semibold text-gray-800">{variants[toast.type].title}</p>
            <p className="text-gray-500 text-sm">{toast.message}</p>
            <div className="h-1 bg-gray-200 mt-3 rounded overflow-hidden">
              <div className={`h-1 ${variants[toast.type].color} animate-progress`} />
            </div>
          </div>
          <button
            onClick={() => setToast({ ...toast, show: false })}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        .animate-progress {
          animation: shrink 4s linear forwards;
        }
        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
