import React, { useState } from "react";
import styles from "./Stepper.module.scss";
import Button from "../../Button/Button";

interface StepperProps {
  steps: React.ReactNode[];
}

function Stepper({ steps }: StepperProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className={styles.stepperContainer}>
      <div className={styles.stepsWrapper}>
        {steps.map((_, index) => (
          <div key={index} className={styles.step}>
            <div
              className={`${styles.circle} ${
                index === currentStep ? styles.active : ""
              }`}
              onClick={() => goToStep(index)}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && <div className={styles.line}></div>}
          </div>
        ))}
      </div>
      <div className={styles.content}>{steps[currentStep]}</div>
      <div className={styles.buttons}>
        <Button
          variant="secondary"
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        <Button onClick={nextStep} disabled={currentStep === steps.length - 1}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Stepper;
