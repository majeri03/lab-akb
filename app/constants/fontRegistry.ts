/**
 * Berisi pemetaan nama font yang digunakan dalam aplikasi.
 * Memudahkan pemeliharaan agar nama font konsisten dan mudah diperbarui.
 */

export const FontRegistry = {
  // Font Statis
  AntonReg: 'Anton-Regular',
  MerriweatherItalic: 'Merriweather-Italic',
  MerriweatherReg: 'Merriweather-Regular',
  NunitoBold: 'Nunito-Bold',
  NunitoLight: 'Nunito-Light',
  PlayfairBlack: 'PlayfairDisplay-Black',
  PlayfairReg: 'PlayfairDisplay-Regular',
  SourceCodeBold: 'SourceCodePro-Bold',
  SourceCodeReg: 'SourceCodePro-Regular',

  // Font Variabel
  EpilogueVar: 'Epilogue-Variable',
  JostVar: 'Jost-Variable',
  LexendVar: 'Lexend-Variable',
  RecursiveVar: 'Recursive-Variable',
  WorkSansVar: 'WorkSans-Variable',
} as const; 