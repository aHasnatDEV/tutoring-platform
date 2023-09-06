import React, { useEffect, useState } from 'react';

const InputOtp = () => {
  const [otp, setOTP] = useState(["", "", "", ""]);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (value !== "" && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  useEffect(() => {
    const handlePaste = (e) => {
      const clipboardData = e.clipboardData || window.clipboardData;
      const pastedData = clipboardData.getData("Text").slice(0, 4);
      if (/^\d{4}$/.test(pastedData)) {
        const newOTP = pastedData.split("");
        setOTP(newOTP);
      }
    };

    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  return (
    <div className="flex items-center justify-center gap-8 h-full">
      {otp.map((digit, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          className="w-12 h-12 text-3xl text-center border border-black rounded-lg outline-none focus:border-primary focus:border-[4px]"
          value={digit}
          onChange={(e) => handleInputChange(e, index)}
        />
      ))}
    </div>
  );
};

export default InputOtp;
