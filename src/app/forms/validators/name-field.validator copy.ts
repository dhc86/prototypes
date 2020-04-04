import { FormControl } from '@angular/forms';

export function nameValidator(control: FormControl ): { [s: string]: boolean } {
  if (!control.value.match(/^[a-zA-Z]+$/)) {
    return { invalidName: true };
  }
}
