import { animate, trigger, state, style, transition, group, query } from '@angular/animations';

export const fadeAnimation = trigger('fade', [
  // Solid state.
  state(
    'solid',
    style({
      backgroundColor: '#f8f9fac7'
    })
  ),
  // Faded state.
  state(
    'faded',
    style({
      backgroundColor: 'transparent'
    })
  ),
  transition('faded => solid', [
    // Set the initial color to fade from.
    query('.navbar-brand', [
      style({
        color: 'white'
      })
    ]),
    group([
      // Change the navbar brand color (from it's current color) into purple.
      query('.navbar-brand', [
        animate(
          '500ms ease-out',
          style({
            color: '#bba7c4'
          })
        )
      ]),
      // Change from the state faded into solid in parallel with the navbar brand fade.
      animate('500ms')
    ])
  ]),
  transition('solid => faded', [
    // Set the initial color to fade from.
    query('.navbar-brand', [
      style({
        color: '#bba7c4'
      })
    ]),
    group([
      // Fade the navbar brand color (from it's current color) into white.
      query('.navbar-brand', [
        animate(
          '500ms ease-out',
          style({
            color: 'white'
          })
        )
      ]),
      // Change from the state solid into faded in parallel with the navbar brand fade.
      animate('500ms')
    ])
  ])
]);
