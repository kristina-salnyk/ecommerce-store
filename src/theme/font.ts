const size: Readonly<Record<string, string>> = {
  xs: '11px',
  s: '14px',
  m: '16px',
  l: '20px',
  xl: '24px',
  xxl: '28px',
};

const weight: Readonly<Record<string, string>> = {
  normal: '400',
  medium: '500',
  semi: '600',
  bold: '700',
  heavy: '900',
};

const type: Readonly<Record<string, string>> = {
  montserratMedium: 'Montserrat-Medium',
  montserratRegular: 'Montserrat-Regular',
  montserratSemiBold: 'Montserrat-SemiBold',
};

export default {
  size,
  weight,
  type,
};
