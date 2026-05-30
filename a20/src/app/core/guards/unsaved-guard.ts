import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Promise<boolean>;
}

export const unsavedGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component: CanComponentDeactivate
) => {
  return component && component.canDeactivate
    ? component.canDeactivate()
    : true;
};