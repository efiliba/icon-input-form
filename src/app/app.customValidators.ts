import { FormGroup, AbstractControl, FormControl } from "@angular/forms";

export const confirmValues = (keys1: string | string[], keys2: string | string[], resultKey = 'confirmValues') =>
  (group: FormGroup): {[key: string]: any} => {
    // const getValue = (controls: {[key: string]: FormControl}, keys: string[]) =>
    const getValue = (controls, keys: string | string[]): string =>
      (keys instanceof Array ? keys : [keys]).reduce((acc, key) => acc[key].controls || acc[key].value, controls);
      
    const value1 = getValue(group.controls, keys1);
    const value2 = getValue(group.controls, keys2);
    return !value1 || !value2 || value1 == value2 ? null : {
      [resultKey]: {
        valid: false
      }
    };
  };