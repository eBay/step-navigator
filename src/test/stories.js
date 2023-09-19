import component from '../index.marko';
import defaultFixture from './fixtures/default.js';

export default {
    title: 'Step Navigator',
    component
};

const {
    defaultStepper,
    defaultWithStyleOverrideCentered,
    stepperWidthProgressStepperWidth,
    stepperNoStatic,
    stepperHidden,
    stepperWithFixedWidthAndNotFluid,
    stepperWithCustomFooter,
    stepperWithPreviousButtonNotDisabled,
    stepperWithNextButtonDisabled
} = defaultFixture;

export const Default = () => ({
    input: defaultStepper.input
});

export const DefaultWithStyleOverrideCentered = () => (defaultWithStyleOverrideCentered);

export const StepperWidthProgressStepperWidth = () => (stepperWidthProgressStepperWidth);

export const StepperNoStatic = () => (stepperNoStatic);

export const StepperHidden = () => (stepperHidden);

export const StepperWithFixedWidthAndNotFluid = () => (stepperWithFixedWidthAndNotFluid);

export const StepperWithCustomFooter = () => (stepperWithCustomFooter);

export const StepperWithPreviousButtonNotDisabled = () => (stepperWithPreviousButtonNotDisabled);

export const StepperWithNextButtonDisabled = () => (stepperWithNextButtonDisabled);
