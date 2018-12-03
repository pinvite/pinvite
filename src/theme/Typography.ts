enum Typeface {
  NotoSansJP = 'Noto Sans JP',
}

enum FontStyle {
  Light   = 'normal',
  Regular = 'normal',
  Normal  = 'normal',
}

// https://material.io/design/typography/the-type-system.html#
// Web browsers calculate the REM (the root em size) based on the root element size.
// The default for modern web browsers is 16px, so the conversion is SP_SIZE/16 = rem.
enum FontSize {
  Size96sp = '6rem',     // 96/16
  Size60sp = '3.75rem',  // 60/16
  Size48sp = '3rem',     // 48/16
  Size34sp = '2.125rem', // 34/16
  Size24sp = '1.5rem',   // 24/16
  Size20sp = '1.25rem',  // 20/16
  Size16sp = '1rem',     // 16/16
  Size14sp = '0.875rem', // 14/16
  Size12sp = '0.75rem',  // 12/16
  Size10sp = '0.625rem', // 10/16
}

enum LetterSpacing {
  SpacingMinus1_5 = '-0.09375rem',  //-1.5/16
  SpacingMinus0_5 = '-0.03125rem',  //-0.5/16
  Spacing0        = '0rem',         //0/16
  Spacing0_1      = '0.00625rem',   //0.1/16
  Spacing0_15     = '0.009375rem',  //0.15/16
  Spacing0_25     = '0.015625rem',  //0.25/16
  Spacing0_4      = '0.025rem',     //0.4/16
  Spacing0_5      = '0.03125rem',   //0.5/16
  Spacing1_25     = '0.078125rem',  //1.25/16
  Spacing1_5      = '0.09375rem',   //1.5/16
}

// https://material.io/design/typography/the-type-system.html#
interface IMaterialDesignType {
  readonly fontFamily: Typeface,
  readonly fontSize: FontSize,
  readonly fontStyle: FontStyle,
  readonly letterSpacing: LetterSpacing,
}

interface IMaterialDesignTypeSet {
  readonly H1: IMaterialDesignType,
  readonly H2: IMaterialDesignType,
  readonly H3: IMaterialDesignType,
  readonly H4: IMaterialDesignType,
  readonly H5: IMaterialDesignType,
  readonly H6: IMaterialDesignType,
  readonly Subtitle1: IMaterialDesignType,
  readonly Subtitle2: IMaterialDesignType,
  readonly Body1: IMaterialDesignType,
  readonly Body2: IMaterialDesignType,
  readonly BUTTON: IMaterialDesignType,
  readonly Caption: IMaterialDesignType,
  readonly OVERLINE: IMaterialDesignType,
}

const MaterialDesignTypeSet = {
  H1: {
    fontFamily: Typeface.NotoSansJP,
    fontSize: FontSize.Size96sp,
    fontStyle: FontStyle.Normal,
    letterSpacing: LetterSpacing.SpacingMinus1_5,
  },
  H2: {
    fontFamily: Typeface.NotoSansJP,
    fontSize: FontSize.Size60sp,
    fontStyle: FontStyle.Normal,
    letterSpacing: LetterSpacing.SpacingMinus0_5,
  },
  H3: {
    fontFamily: Typeface.NotoSansJP,
    fontSize: FontSize.Size48sp,
    fontStyle: FontStyle.Normal,
    letterSpacing: LetterSpacing.Spacing0,
  },
  H4: {
    fontFamily: Typeface.NotoSansJP,
    fontSize: FontSize.Size34sp,
    fontStyle: FontStyle.Normal,
    letterSpacing: LetterSpacing.Spacing0_25,
  },
  H5: {
    fontFamily: Typeface.NotoSansJP,
    fontSize: FontSize.Size24sp,
    fontStyle: FontStyle.Normal,
    letterSpacing: LetterSpacing.Spacing0,
  },
  H6: {
    fontFamily: Typeface.NotoSansJP,
    fontSize: FontSize.Size20sp,
    fontStyle: FontStyle.Normal,
    letterSpacing: LetterSpacing.Spacing0_15,
  },
  Subtitle1: {
    fontFamily: Typeface.NotoSansJP,
    fontSize: FontSize.Size16sp,
    fontStyle: FontStyle.Normal,
    letterSpacing: LetterSpacing.Spacing0_15,
  },
  Subtitle2: {
    fontFamily: Typeface.NotoSansJP,
    fontSize: FontSize.Size14sp,
    fontStyle: FontStyle.Normal,
    letterSpacing: LetterSpacing.Spacing0_1,
  },
  Body1: {
    fontFamily: Typeface.NotoSansJP,
    fontSize: FontSize.Size16sp,
    fontStyle: FontStyle.Normal,
    letterSpacing: LetterSpacing.Spacing0_5,
  },
  Body2: {
    fontFamily: Typeface.NotoSansJP,
    fontSize: FontSize.Size14sp,
    fontStyle: FontStyle.Normal,
    letterSpacing: LetterSpacing.Spacing0_25,
  },
  BUTTON: {
    fontFamily: Typeface.NotoSansJP,
    fontSize: FontSize.Size14sp,
    fontStyle: FontStyle.Normal,
    letterSpacing: LetterSpacing.Spacing1_25,
  },
  Caption: {
    fontFamily: Typeface.NotoSansJP,
    fontSize: FontSize.Size12sp,
    fontStyle: FontStyle.Normal,
    letterSpacing: LetterSpacing.Spacing0_4,
  },
  OVERLINE: {
    fontFamily: Typeface.NotoSansJP,
    fontSize: FontSize.Size10sp,
    fontStyle: FontStyle.Normal,
    letterSpacing: LetterSpacing.Spacing1_5,
  },
}
