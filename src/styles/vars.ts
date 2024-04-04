import { COLOR, NOT_FONT_SIZE } from './palette'

export const VARS = {
  color: {
    a: {
      bg: {
        light: 'var(--color-a-bg-light)',
        dark: 'var(--color-a-bg-dark)',
      },
      content: {
        light: 'var(--color-a-content-light)',
        dark: 'var(--color-a-content-dark)',
      },
      line: {
        light: 'var(--color-a-line-light)',
        dark: 'var(--color-a-line-dark)',
      },
    },
    b: {
      bg: {
        light: 'var(--color-b-bg-light)',
        dark: 'var(--color-b-bg-dark)',
      },
      content: {
        light: 'var(--color-b-content-light)',
        dark: 'var(--color-b-content-dark)',
      },
      line: {
        light: 'var(--color-b-line-light)',
        dark: 'var(--color-b-line-dark)',
      },
    },
    c: {
      bg: {
        light: 'var(--color-c-bg-light)',
        dark: 'var(--color-c-bg-dark)',
      },
      content: {
        light: 'var(--color-c-content-light)',
        dark: 'var(--color-c-content-dark)',
      },
    },
  },
  size: {
    gold: 'var(--size-gold)',
    silver: 'var(--size-silver)',
    layout: {
      with: 'var(--size-layout-with)',
    },
    screen: {
      xs: 'var(--size-screen-xs)',
      s: 'var(--size-screen-s)',
      m: 'var(--size-screen-m)',
    },
  },
  global: {
    fontSize: 'var(--glb-font-size)',
  },
  decorator: {
    shadow: {
      0: 'var(--decorator-shadow-0)',
      1: 'var(--decorator-shadow-1)',
      2: 'var(--decorator-shadow-2)',
    },
    bevelHighlight: {
      full: 'var(--decorator-bevel-highlight)',
      top: 'var(--decorator-bevel-highlight-top)',
      left: 'var(--decorator-bevel-highlight-left)',
      right: 'var(--decorator-bevel-highlight-right)',
      bottom: 'var(--decorator-bevel-highlight-bottom)',
    },
  },
  component: {
    button: {
      xs: {
        gapElements: 'var(--component-button-xs-gap-elements)',
        paddingBlock: 'var(--component-button-xs-padding-block)',
        paddingInline: 'var(--component-button-xs-padding-inline)',
        height: 'var(--component-button-xs-height)',
        fontSize: 'var(--component-button-xs-font-size)',
        borderRadius: 'var(--component-button-xs-border-radius)',
      },
      s: {
        size: 'var(--component-button-s-size)',
        padding: 'var(--component-button-s-padding)',
        iconSize: 'var(--component-button-s-icon-size)',
        borderRadius: 'var(--component-button-s-border-radius)',
      },
      m: {
        size: 'var(--component-button-m-size)',
        padding: 'var(--component-button-m-padding)',
        iconSize: 'var(--component-button-m-icon-size)',
        borderRadius: 'var(--component-button-m-border-radius)',
      },
    },
    link: {
      translate: {
        value: 'var(--component-link-translate-value)',
        transition: 'var(--component-link-translate-transition)',
      },
    },
  },
  screen: {
    /*
      Por el momento no es posible utilizar variables nativas CSS en la
      declaración de los media queries.
    */
    width: {
      l: 'calc(47rem + (1.625rem * 4 + 2.625rem) * 2)',
      m: '56.25rem',
      s: '26.5625rem',
      xs: '23.4375rem',
    },
  },
}

export const BGC_DARK_A = COLOR.gs_16
export const BGC_BRIGHT_A = COLOR.gs_1

export const LAYOUT_WIDTH = `calc(${NOT_FONT_SIZE['2xl']} * 6)`
