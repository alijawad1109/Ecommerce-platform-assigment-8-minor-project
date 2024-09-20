// Checkout.js (Multi-Step Form)
import React from "react";
import Step1 from "./Checkout/Step1";
import Step2 from "./Checkout/Step2";
import Step3 from "./Checkout/Step3";

const Checkout = () => {
  const [step, setStep] = React.useState(1);

  const handleNextStep = () => setStep((prev) => prev + 1);

  return (
    <div className="checkout">
      {step === 1 && <Step1 nextStep={handleNextStep} />}
      {step === 2 && <Step2 nextStep={handleNextStep} />}
      {step === 3 && <Step3 />}
    </div>
  );
};

export default Checkout;
