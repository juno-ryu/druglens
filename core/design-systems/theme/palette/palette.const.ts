import { alpha, darken, getContrastRatio, lighten } from '@mui/material/styles';
import { Entries } from '@/core/utils/types/selector/object';

export type TypeCommonPalette = keyof typeof commonPalette;
export const commonPalette = {
  // Common
  ['white']: '#FFFFFF',
  ['black']: '#000000',
  ['transparent']: 'transparent',
  ['currentColor']: 'currentColor',
} as const;

export type TypeHexColorPalette = keyof typeof lightHexColorPalette;
export const lightHexColorPalette = {
  // Gray Color
  ['gray/50']: '#FAFAFA',
  ['gray/100']: '#F5F5F5',
  ['gray/200']: '#E7E7E8',
  ['gray/300']: '#D2D2D3',
  ['gray/400']: '#BCBCBC',
  ['gray/500']: '#88888A',
  ['gray/600']: '#6D6D70',
  ['gray/700']: '#4C4C50',
  ['gray/800']: '#313135',
  ['gray/900']: '#18181B',
  // Grashviolet Color
  ['grashviolet/50']: '#F6F6FE',
  ['grashviolet/100']: '#E8E8F3',
  ['grashviolet/200']: '#F6F6FE',
  ['grashviolet/300']: '#D9D9E4',
  ['grashviolet/400']: '#BDBDCA',
  ['grashviolet/500']: '#A1A1B1',
  ['grashviolet/600']: '#878797',
  ['grashviolet/700']: '#6E6E7E',
  ['grashviolet/800']: '#444453',
  ['grashviolet/900']: '#3E3E4B',
  // Primary Color
  ['primary/50']: '#F2F2FF',
  ['primary/100']: '#E6E6FF',
  ['primary/200']: '#CECEFF',
  ['primary/300']: '#AEAEFF',
  ['primary/400']: '#8E8EFF',
  ['primary/500']: '#6A6AFF',
  ['primary/600']: '#4E4EFF',
  ['primary/700']: '#3E3ECD',
  ['primary/800']: '#2F2F9B',
  ['primary/900']: '#212170',
  // Red Color (Danger)
  ['red/50']: '#FFF2F3',
  ['red/100']: '#FFD1D4',
  ['red/200']: '#FFA6AB',
  ['red/300']: '#FF757D',
  ['red/400']: '#FF4F5A',
  ['red/500']: '#DF0E01',
  ['red/600']: '#C60C01',
  ['red/700']: '#AC0B01',
  ['red/800']: '#930901',
  ['red/900']: '#790801',
  // Orange Color (Sale)
  ['orange/50']: '#FFF3DF',
  ['orange/100']: '#FFD9A5',
  ['orange/200']: '#FFBD6D',
  ['orange/300']: '#FF9532',
  ['orange/400']: '#FF760A',
  ['orange/500']: '#FF5C00',
  ['orange/600']: '#E95603',
  ['orange/700']: '#CC4102',
  ['orange/800']: '#A1330B',
  ['orange/900']: '#822C0C',
  // Yellow Color (Warring)
  ['yellow/50']: '#FFFDEA',
  ['yellow/100']: '#FFF6C5',
  ['yellow/200']: '#FFEE85',
  ['yellow/300']: '#FFDF46',
  ['yellow/400']: '#FFCD1B',
  ['yellow/500']: '#FFAB00',
  ['yellow/600']: '#E28200',
  ['yellow/700']: '#BB5A02',
  ['yellow/800']: '#984508',
  ['yellow/900']: '#7C390B',
  // Lime Color (Etc)
  ['lime/50']: '#FBFFE5',
  ['lime/100']: '#F4FFC6',
  ['lime/200']: '#E8FF94',
  ['lime/300']: '#D5FF56',
  ['lime/400']: '#BFF724',
  ['lime/500']: '#9FDD03',
  ['lime/600']: '#7BB100',
  ['lime/700']: '#5D8605',
  ['lime/800']: '#4B6A0A',
  ['lime/900']: '#3F590E',
  // Green Color (Success)
  ['green/50']: '#EDFCF4',
  ['green/100']: '#D4F7E3',
  ['green/200']: '#ADEDCC',
  ['green/300']: '#78DDAF',
  ['green/400']: '#41C68D',
  ['green/500']: '#1EAB74',
  ['green/600']: '#118A5D',
  ['green/700']: '#0E6E4D',
  ['green/800']: '#0D583F',
  ['green/900']: '#0C4834',
  // Cyan Color (Info)
  ['cyan/50']: '#F0FAFF',
  ['cyan/100']: '#DFF4FF',
  ['cyan/200']: '#B9EBFE',
  ['cyan/300']: '#7BDDFE',
  ['cyan/400']: '#34CCFC',
  ['cyan/500']: '#0AB8EF',
  ['cyan/600']: '#0093CB',
  ['cyan/700']: '#0076A4',
  ['cyan/800']: '#056387',
  ['cyan/900']: '#0A5170',
  // Blue Color (Etc)
  ['blue/50']: '#EFF6FF',
  ['blue/100']: '#DAEAFF',
  ['blue/200']: '#BEDAFF',
  ['blue/300']: '#91C4FF',
  ['blue/400']: '#5DA3FD',
  ['blue/500']: '#377FFA',
  ['blue/600']: '#2C67F0',
  ['blue/700']: '#194ADC',
  ['blue/800']: '#1B3CB2',
  ['blue/900']: '#1C388C',
  // Pink Color (Etc)
  ['pink/50']: '#FFF0FB',
  ['pink/100']: '#FFE3F9',
  ['pink/200']: '#FFC7F4',
  ['pink/300']: '#FF9AE8',
  ['pink/400']: '#FF5BD6',
  ['pink/500']: '#FF2BC1',
  ['pink/600']: '#EC0497',
  ['pink/700']: '#DB0081',
  ['pink/800']: '#B5006A',
  ['pink/900']: '#96055A',
  // Purple Color (Etc)
  ['purple/50']: '#F4F3FF',
  ['purple/100']: '#ECE9FE',
  ['purple/200']: '#DBD6FE',
  ['purple/300']: '#C0B6FC',
  ['purple/400']: '#A28CF9',
  ['purple/500']: '#845EF4',
  ['purple/600']: '#733CEB',
  ['purple/700']: '#6B34D9',
  ['purple/800']: '#5323B4',
  ['purple/900']: '#451E94',
} as const;

export const darkHexColorPalette = {
  // Gray Color
  ['gray/50']: '#18181B',
  ['gray/100']: '#313135',
  ['gray/200']: '#4C4C50',
  ['gray/300']: '#6D6D70',
  ['gray/400']: '#88888A',
  ['gray/500']: '#BCBCBC',
  ['gray/600']: '#D2D2D3',
  ['gray/700']: '#E7E7E8',
  ['gray/800']: '#F5F5F5',
  ['gray/900']: '#FAFAFA',
  // Grashviolet Color
  ['grashviolet/50']: '#3E3E4B',
  ['grashviolet/100']: '#444453',
  ['grashviolet/200']: '#6E6E7E',
  ['grashviolet/300']: '#878797',
  ['grashviolet/400']: '#A1A1B1',
  ['grashviolet/500']: '#BDBDCA',
  ['grashviolet/600']: '#D9D9E4',
  ['grashviolet/700']: '#E8E8F3',
  ['grashviolet/800']: '#F6F6FE',
  ['grashviolet/900']: '#F6F6FE',
  // Primary Color
  ['primary/50']: '#212170',
  ['primary/100']: '#2F2F9B',
  ['primary/200']: '#3E3ECD',
  ['primary/300']: '#4E4EFF',
  ['primary/400']: '#6A6AFF',
  ['primary/500']: '#8E8EFF',
  ['primary/600']: '#AEAEFF',
  ['primary/700']: '#CECEFF',
  ['primary/800']: '#E6E6FF',
  ['primary/900']: '#F2F2FF',
  // Red Color (Danger)
  ['red/50']: '#790801',
  ['red/100']: '#930901',
  ['red/200']: '#AC0B01',
  ['red/300']: '#C60C01',
  ['red/400']: '#DF0E01',
  ['red/500']: '#FF4F5A',
  ['red/600']: '#FF757D',
  ['red/700']: '#FFA6AB',
  ['red/800']: '#FFD1D4',
  ['red/900']: '#FFF2F3',
  // Orange Color (Sale)
  ['orange/50']: '#822C0C',
  ['orange/100']: '#A1330B',
  ['orange/200']: '#CC4102',
  ['orange/300']: '#E95603',
  ['orange/400']: '#FF5C00',
  ['orange/500']: '#FF760A',
  ['orange/600']: '#FF9532',
  ['orange/700']: '#FFBD6D',
  ['orange/800']: '#FFD9A5',
  ['orange/900']: '#FFF3DF',
  // Yellow Color (Warring)
  ['yellow/50']: '#7C390B',
  ['yellow/100']: '#984508',
  ['yellow/200']: '#BB5A02',
  ['yellow/300']: '#E28200',
  ['yellow/400']: '#FFAB00',
  ['yellow/500']: '#FFCD1B',
  ['yellow/600']: '#FFDF46',
  ['yellow/700']: '#FFEE85',
  ['yellow/800']: '#FFF6C5',
  ['yellow/900']: '#FFFDEA',
  // Lime Color (Etc)
  ['lime/50']: '#3F590E',
  ['lime/100']: '#4B6A0A',
  ['lime/200']: '#5D8605',
  ['lime/300']: '#7BB100',
  ['lime/400']: '#9FDD03',
  ['lime/500']: '#BFF724',
  ['lime/600']: '#D5FF56',
  ['lime/700']: '#E8FF94',
  ['lime/800']: '#F4FFC6',
  ['lime/900']: '#FBFFE5',
  // Green Color (Success)
  ['green/50']: '#0C4834',
  ['green/100']: '#0D583F',
  ['green/200']: '#0E6E4D',
  ['green/300']: '#118A5D',
  ['green/400']: '#1EAB74',
  ['green/500']: '#41C68D',
  ['green/600']: '#78DDAF',
  ['green/700']: '#ADEDCC',
  ['green/800']: '#D4F7E3',
  ['green/900']: '#EDFCF4',
  // Cyan Color (Info)
  ['cyan/50']: '#0A5170',
  ['cyan/100']: '#056387',
  ['cyan/200']: '#0076A4',
  ['cyan/300']: '#0093CB',
  ['cyan/400']: '#0AB8EF',
  ['cyan/500']: '#34CCFC',
  ['cyan/600']: '#7BDDFE',
  ['cyan/700']: '#B9EBFE',
  ['cyan/800']: '#DFF4FF',
  ['cyan/900']: '#F0FAFF',
  // Blue Color (Etc)
  ['blue/50']: '#1C388C',
  ['blue/100']: '#1B3CB2',
  ['blue/200']: '#194ADC',
  ['blue/300']: '#2C67F0',
  ['blue/400']: '#377FFA',
  ['blue/500']: '#5DA3FD',
  ['blue/600']: '#91C4FF',
  ['blue/700']: '#BEDAFF',
  ['blue/800']: '#DAEAFF',
  ['blue/900']: '#EFF6FF',
  // Pink Color (Etc)
  ['pink/50']: '#96055A',
  ['pink/100']: '#B5006A',
  ['pink/200']: '#DB0081',
  ['pink/300']: '#EC0497',
  ['pink/400']: '#FF2BC1',
  ['pink/500']: '#FF5BD6',
  ['pink/600']: '#FF9AE8',
  ['pink/700']: '#FFC7F4',
  ['pink/800']: '#FFE3F9',
  ['pink/900']: '#FFF0FB',
  // Purple Color (Etc)
  ['purple/50']: '#451E94',
  ['purple/100']: '#5323B4',
  ['purple/200']: '#6B34D9',
  ['purple/300']: '#733CEB',
  ['purple/400']: '#845EF4',
  ['purple/500']: '#A28CF9',
  ['purple/600']: '#C0B6FC',
  ['purple/700']: '#DBD6FE',
  ['purple/800']: '#ECE9FE',
  ['purple/900']: '#F4F3FF',
} as const;

export const hexColorPalette = lightHexColorPalette;

export type TypeAugmentColorPalette = `augment/${TypeHexColorPalette}`;
export const getAugmentColorPalette = (palette: typeof lightHexColorPalette | typeof darkHexColorPalette) =>
  Object.fromEntries(
    (Object.entries(palette) as Entries<typeof palette>).map(([name, hex]) => [
      `augment/${name}`,
      {
        main: alpha(hex, 1.0),
        light: lighten(hex, 0.2),
        dark: darken(hex, 0.2),
        contrastText: getContrastRatio(hex, '#fff') > 2.2 ? commonPalette['white'] : palette['gray/800'],
      },
    ]),
  );

export type TypeCustomColorPalette = keyof typeof customColorPalette;
export const customColorPalette = {
  // Gray Dim
  ['gray/dim/50']: '#0000000A', // #000000/4%
  ['gray/dim/100']: '#00000014', // #000000/8%
  ['gray/dim/200']: '#0000001f', // #000000/12%
  ['gray/dim/300']: '#0000003d', // #000000/24%
  ['gray/dim/400']: '#00000052', // #000000/32%
  ['gray/dim/500']: '#00000066', // #000000/40%
  ['gray/dim/600']: '#0000008f', // #000000/56%
  ['gray/dim/700']: '#000000b8', // #000000/72%
  ['gray/dim/800']: '#000000cc', // #000000/80%
  // Primary Dim
  ['primary/dim/100']: '#4d4dff0a', // #4E4EFF/4%
  ['primary/dim/200']: '#4d4dff14', // #4E4EFF/8%
  ['primary/dim/300']: '#4d4dff1f', // #4E4EFF/12%
  ['primary/dim/400']: '#4d4dff29', // #4E4EFF/16%
  ['primary/dim/500']: '#4d4dff4d', // #4E4EFF/30%
  ['primary/dim/600']: '#4d4dff80', // #4E4EFF/50%
  // Gradient
  ['partnership/VVIP']: 'linear-gradient(95deg, #FFE584 -5.38%, #F6AE34 36.14%, #F1CF4D 72.71%, #F08700 103.7%)',
  ['partnership/VIP']: 'linear-gradient(95deg, #8AAAEE -5.38%, #5F85D7 36.14%, #84A6F2 72.71%, #345DB2 103.7%)',
  ['partnership/Partner']: 'linear-gradient(95deg, #A6A6FC -5.38%, #77F 36.14%, #A3A3FF 72.71%, #4E4EFF 103.7%)',
} as const;

export type TypeStatePalette = keyof ReturnType<typeof getStatePalette>;
export const getStatePalette = (palette: typeof lightHexColorPalette | typeof darkHexColorPalette) => ({
  ['state/danger']: palette['red/500'],
  ['state/sale']: palette['orange/500'],
  ['state/warning']: palette['yellow/500'],
  ['state/success']: palette['green/500'],
  ['state/info']: palette['cyan/500'],
});

export const statePalette = getStatePalette(lightHexColorPalette);