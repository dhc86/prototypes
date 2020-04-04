import { FormControl } from '@angular/forms';

export function phoneValidator(control: FormControl ): { [s: string]: boolean } {
  if (!control.value.match(/^604/)) {
    return { invalidPhone: true };
  }
}
