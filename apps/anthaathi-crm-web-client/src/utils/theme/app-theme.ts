import { createLightTheme } from 'baseui/themes';

export const appTheme = createLightTheme(
  {
    primaryA: '#25282f',
    primaryFontFamily:
      '\'IBM Plex Sans\',system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
    primary: '#056ac8',
  },
  {
    borders: {
      useRoundedCorners: true,
      buttonBorderRadius: '4px',
      inputBorderRadius: '4px',
      popoverBorderRadius: '8px',
      surfaceBorderRadius: '4px',
    },
    typography: {
      headingFontFamily:
        'Kanit, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
    },
    sizing: {
      maxAppWidth: '1200px',
      maxAppWidthDense: '1000px',
    },
    colors: {
      primaryHeaderA: '#056ac8',
      primaryHeaderB: '#045aaa',
      primarySideBarA: '#2e3439',
      primarySideBarB: '#1e2225',
      notificationA: '#EEF6FC',
      notificationB: '#1f82c9',
      notificationC: '#d3dae6',
      notificationD: '#f1d86f',
      notificationE: '#ff7e62',
      notificationF: '#ee789d',
      notificationG: '#8f959e',
      notificationH: '#343741',
      notificationI: '#0071c2',
      notificationJ: '#727783',
      notificationK: '#187ec7',
      yellowLight: '#FCD86E',
      blueLight: '#309FDB',
    },
  }
);

declare module 'baseui/themes' {
  export interface Typography {
    headingFontFamily: string;
    primaryFontFamily: string;
  }

  export interface Sizing {
    maxAppWidth: string;
    maxAppWidthDense: string;
  }

  export interface ColorTokens {
    primaryHeaderA: string;
    primaryHeaderB: string;
    primarySideBarA: string;
    primarySideBarB: string;
    notificationA: string;
    notificationB: string;
    notificationC: string;
    notificationD: string;
    notificationE: string;
    notificationF: string;
    notificationG: string;
    notificationH: string;
    notificationI: string;
    notificationJ: string;
    notificationK: string;
    yellowLight: string;
    blueLight: string;
  }
}
