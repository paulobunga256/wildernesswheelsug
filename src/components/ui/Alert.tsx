import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, Info } from "lucide-react";
import Button from "./Button";

interface AlertProps {
  type: "success" | "error" | "info";
  message: string;
  onClose: () => void;
}

const Alert = ({ type, message, onClose }: AlertProps) => {
  let icon, iconColor;

  switch (type) {
    case "success":
      icon = <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />;
      iconColor = "text-emerald-500";
      break;
    case "error":
      icon = <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />;
      iconColor = "text-red-500";
      break;
    case "info":
      icon = <Info className="w-16 h-16 text-blue-500 mx-auto mb-6" />;
      iconColor = "text-blue-500";
      break;
    default:
      icon = <Info className="w-16 h-16 text-blue-500 mx-auto mb-6" />;
      iconColor = "text-blue-500";
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl max-w-lg w-full p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {icon}
        <h2 className={`text-2xl font-bold text-slate-900 mb-4 ${iconColor}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h2>
        <p className="text-slate-600 mb-8">{message}</p>
        <Button onClick={onClose}>Return Home</Button>
      </motion.div>
    </motion.div>
  );
};

export default Alert;
