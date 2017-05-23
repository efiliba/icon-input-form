import { FormGroup, AbstractControl, FormControl } from "@angular/forms";

export const confirmValues = (keys1: string[], keys2: string[], resultKey = 'confirmValues') => (group: FormGroup): {[key: string]: any} => {
  const value1 = getValue(group.controls, keys1);
  const value2 = getValue(group.controls, keys2);
  return !value1 || !value2 || value1 == value2 ? null : {
    [resultKey]: {
      valid: false
    }
  };
};

// const getValue = (controls: {[key: string]: FormControl}, keys: string[]) =>
const getValue = (controls, keys: string[]): string =>
  keys.reduce((controls, key) => controls[key].controls || controls[key].value, controls);