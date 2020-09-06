import Typography from 'typography';
import noriegaTheme from 'typography-theme-noriega';

const typography = new Typography({
  ...noriegaTheme,
  googleFonts: [
    { name: 'Raleway', styles: ['400', '500', '600', '700'] },
    { name: 'Roboto', styles: ['400', '500', '600', '700'] },
  ],
  headerFontFamily: ['Raleway', 'sans-serif'],
  bodyFontFamily: ['Raleway', 'sans-serif'],
  overrideThemeStyles: () => ({
    em: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '400',
    },
  }),
});

export const { scale, rhythm, options } = typography;
export default typography;
