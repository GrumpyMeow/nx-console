import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const GROW_SHRINK = trigger('growShrink', [
  state('void', style({ width: '0' })),
  state('collapse', style({ width: '0' })),
  state('expand', style({ width: '*' })),
  transition(
    `expand <=> collapse`,
    animate(`300ms cubic-bezier(0.4, 0.0, 0.2, 1)`)
  )
]);

export const GROW_SHRINK_VERT = trigger('growShrinkVert', [
  state('void', style({ height: '0' })),
  state('collapse', style({ height: '0', overflow: 'hidden' })),
  state('expand', style({ height: '*' })),
  transition(
    `expand => collapse`,
    animate(`400ms 300ms cubic-bezier(0.4, 0.0, 0.2, 1)`)
  ),
  transition(
    `collapse => expand`,
    animate(`400ms cubic-bezier(0.4, 0.0, 0.2, 1)`)
  )
]);
