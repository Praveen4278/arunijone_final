# Arunijone.com X Freelancer - Developer Handoff Document

## 1. GRID SYSTEM
| Property | Value |
|----------|-------|
| Desktop Width | 1440px |
| Container Width | 1420px |
| Maximum Width | 1440px |
| Columns | - |
| Column Width | - |
| Gutter Width | - |
| Outer Margin | 10px |

---

## 2. COLOR SYSTEM
| Color Token | HEX Value |
|-------------|-----------|
| Background (White) | #FFFFFF |
| Background (Light Gray) | #F6F7F9 |
| Primary (Blue) | #0161FE |
| Primary (Blue 2) | #1F64FF |
| Primary (Blue 3) | #4D90FE |
| Text (Primary) | #111111 |
| Text (Secondary) | rgba(17, 17, 17, 0.6) |
| Text (Tertiary) | rgba(17, 17, 17, 0.8) |
| Text (Secondary Gray) | rgba(109, 109, 110, 0.8) |
| Text (Dark Gray) | #232323 |
| Border (Dark) | #202833 |
| Border (Light) | #8E8383 |

---

## 3. TYPOGRAPHY SYSTEM
| Style | Font Family | Font Weight | Font Size | Line Height | Letter Spacing |
|-------|-------------|-------------|-----------|-------------|----------------|
| Heading Large | SF Pro Display | 500 | 81px | 90px | - |
| Heading 1 | SF Pro Display | 400 | 46px | 54px | - |
| Heading 2 | SF Pro Display | 400 | 36px | 38px | - |
| Heading 2 (Centered) | SF Pro Display | 400 | 36px | 42px | - |
| Heading 3 | SF Pro Display | 400 | 32px | 40px | - |
| Body XL | SF Pro Display | 300 | 18px | 19.88px | - |
| Body Large | SF Pro Display | 400 | 20px | 23.25px | - |
| Body Large (Title Case) | SF Pro | 400 | 20px | 30px | -0.0296em |
| Body Medium | SF Pro Display | 400 | 16px | 24px | - |
| Body Medium (2) | SF Pro Display | 400 | 16px | 22.35px | - |
| Body Small | SF Pro Display | 400 | 16px | 20.41px | - |
| Caption | SF Pro Display | 400 | 14px | 17.96px | - |
| Label (Uppercase) | SF Pro | 510 | 14px | 18px | 0.1279em |
| Button Text | SF Pro Display | 500 | 16px | 24px | - |
| Button Text (Plus Jakarta) | Plus Jakarta Sans | 500 | 15.78px | 22.47px | -0.005em |

---

## 4. BORDER RADIUS SYSTEM
| Radius Token | Value |
|--------------|-------|
| radius-xs | 6px |
| radius-sm | 12px |
| radius-md | 20px |
| radius-lg | 20.41px |
| radius-xl | 22.36px |
| radius-2xl | 23.69px |
| radius-3xl | 38px |
| radius-4xl | 85px |
| radius-5xl | 98.68px |
| radius-full | 1000px |
| radius-button | 111.79px |
| radius-large | 236.84px |

---

## 5. SHADOW SYSTEM
No shadows found in the design.

---

## 6. SPACING SYSTEM
| Spacing Token | Value (px) |
|---------------|------------|
| spacing-4 | 4 |
| spacing-5 | 5 |
| spacing-6 | 6 |
| spacing-10 | 10 |
| spacing-12 | 12 |
| spacing-13 | 13 |
| spacing-14 | 14 |
| spacing-15 | 15 |
| spacing-16 | 16 |
| spacing-17 | 17 |
| spacing-20 | 20 |
| spacing-21 | 21 |
| spacing-24 | 24 |
| spacing-25 | 25 |
| spacing-26 | 26 |
| spacing-28 | 28 |
| spacing-32 | 32 |
| spacing-40 | 40 |
| spacing-42 | 42 |
| spacing-43 | 43 |
| spacing-44 | 44 |
| spacing-46 | 46 |
| spacing-49 | 49 |
| spacing-50 | 50 |
| spacing-53 | 53 |
| spacing-54 | 54 |
| spacing-55 | 55 |
| spacing-66 | 66 |
| spacing-67 | 67 |
| spacing-72 | 72 |
| spacing-85 | 85 |
| spacing-87 | 88 |
| spacing-98 | 99 |
| spacing-100 | 100 |
| spacing-115 | 115 |
| spacing-111 | 112 |
| spacing-132 | 133 |
| spacing-138 | 139 |
| spacing-200 | 200 |
| spacing-225 | 226 |
| spacing-236 | 237 |
| spacing-280 | 281 |
| spacing-291 | 292 |
| spacing-309 | 310 |
| spacing-320 | 321 |
| spacing-350 | 351 |
| spacing-417 | 418 |
| spacing-466 | 467 |
| spacing-473 | 474 |
| spacing-502 | 503 |
| spacing-551 | 552 |
| spacing-553 | 554 |
| spacing-613 | 614 |
| spacing-661 | 662 |
| spacing-760 | 761 |
| spacing-856 | 857 |
| spacing-916 | 917 |
| spacing-1040 | 1041 |
| spacing-1262 | 1263 |
| spacing-1303 | 1304 |
| spacing-1326 | 1327 |
| spacing-1327 | 1328 |
| spacing-1336 | 1337 |
| spacing-1420 | 1421 |

---

## 7. COMPLETE CSS VARIABLES
```css
:root {
  /* Colors */
  --color-white: #FFFFFF;
  --color-bg-light: #F6F7F9;
  --color-primary: #0161FE;
  --color-primary-2: #1F64FF;
  --color-primary-3: #4D90FE;
  --color-text-primary: #111111;
  --color-text-secondary: rgba(17, 17, 17, 0.6);
  --color-text-tertiary: rgba(17, 17, 17, 0.8);
  --color-text-gray: rgba(109, 109, 110, 0.8);
  --color-text-dark: #232323;
  --color-border-dark: #202833;
  --color-border-light: #8E8383;

  /* Border Radius */
  --radius-xs: 6px;
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 20.41314125061035px;
  --radius-xl: 22.355138778686523px;
  --radius-2xl: 23.686382293701172px;
  --radius-3xl: 38px;
  --radius-4xl: 85px;
  --radius-5xl: 98.68194580078125px;
  --radius-full: 1000px;
  --radius-button: 111.78555297851562px;
  --radius-large: 236.84442138671875px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-26: 26px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-43: 43px;
  --spacing-44: 44px;
  --spacing-46: 46px;
  --spacing-49: 49px;
  --spacing-50: 50px;
  --spacing-53: 53px;
  --spacing-54: 54px;
  --spacing-55: 55px;
  --spacing-66: 66px;
  --spacing-67: 67px;
  --spacing-72: 72px;
  --spacing-85: 85px;
  --spacing-88: 88px;
  --spacing-99: 99px;
  --spacing-100: 100px;
  --spacing-112: 112px;
  --spacing-115: 115px;
  --spacing-133: 133px;
  --spacing-139: 139px;
  --spacing-200: 200px;
  --spacing-226: 226px;
  --spacing-237: 237px;
  --spacing-281: 281px;
  --spacing-292: 292px;
  --spacing-310: 310px;
  --spacing-321: 321px;
  --spacing-351: 351px;
  --spacing-418: 418px;
  --spacing-467: 467px;
  --spacing-474: 474px;
  --spacing-503: 503px;
  --spacing-552: 552px;
  --spacing-554: 554px;
  --spacing-614: 614px;
  --spacing-662: 662px;
  --spacing-761: 761px;
  --spacing-857: 857px;
  --spacing-917: 917px;
  --spacing-1041: 1041px;
  --spacing-1263: 1263px;
  --spacing-1304: 1304px;
  --spacing-1327: 1327px;
  --spacing-1328: 1328px;
  --spacing-1337: 1337px;
  --spacing-1421: 1421px;

  /* Typography */
  --font-sf-pro-display: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-sf-pro: 'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-plus-jakarta-sans: 'Plus Jakarta Sans', sans-serif;

  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 510;
  --font-weight-bold: 600;
}
```

---

## 8. COMPLETE TAILWIND CONFIG VALUES
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        'bg-light': '#F6F7F9',
        primary: '#0161FE',
        'primary-2': '#1F64FF',
        'primary-3': '#4D90FE',
        'text-primary': '#111111',
        'text-secondary': 'rgba(17, 17, 17, 0.6)',
        'text-tertiary': 'rgba(17, 17, 17, 0.8)',
        'text-gray': 'rgba(109, 109, 110, 0.8)',
        'text-dark': '#232323',
        'border-dark': '#202833',
        'border-light': '#8E8383',
      },
      borderRadius: {
        xs: '6px',
        sm: '12px',
        md: '20px',
        lg: '20.41314125061035px',
        xl: '22.355138778686523px',
        '2xl': '23.686382293701172px',
        '3xl': '38px',
        '4xl': '85px',
        '5xl': '98.68194580078125px',
        full: '1000px',
        button: '111.78555297851562px',
        large: '236.84442138671875px',
      },
      spacing: {
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '10': '10px',
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '17': '17px',
        '20': '20px',
        '21': '21px',
        '24': '24px',
        '25': '25px',
        '26': '26px',
        '28': '28px',
        '32': '32px',
        '40': '40px',
        '42': '42px',
        '43': '43px',
        '44': '44px',
        '46': '46px',
        '49': '49px',
        '50': '50px',
        '53': '53px',
        '54': '54px',
        '55': '55px',
        '66': '66px',
        '67': '67px',
        '72': '72px',
        '85': '85px',
        '88': '88px',
        '99': '99px',
        '100': '100px',
        '112': '112px',
        '115': '115px',
        '133': '133px',
        '139': '139px',
        '200': '200px',
        '226': '226px',
        '237': '237px',
        '281': '281px',
        '292': '292px',
        '310': '310px',
        '321': '321px',
        '351': '351px',
        '418': '418px',
        '467': '467px',
        '474': '474px',
        '503': '503px',
        '552': '552px',
        '554': '554px',
        '614': '614px',
        '662': '662px',
        '761': '761px',
        '857': '857px',
        '917': '917px',
        '1041': '1041px',
        '1263': '1263px',
        '1304': '1304px',
        '1327': '1327px',
        '1328': '1328px',
        '1337': '1337px',
        '1421': '1421px',
      },
      fontFamily: {
        'sf-pro-display': ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'sf-pro': ['SF Pro', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 510,
        bold: 600,
      },
    },
  },
}
```

---

## 9. DESIGN TOKENS (JSON)
```json
{
  "color": {
    "white": "#FFFFFF",
    "bgLight": "#F6F7F9",
    "primary": "#0161FE",
    "primary2": "#1F64FF",
    "primary3": "#4D90FE",
    "textPrimary": "#111111",
    "textSecondary": "rgba(17, 17, 17, 0.6)",
    "textTertiary": "rgba(17, 17, 17, 0.8)",
    "textGray": "rgba(109, 109, 110, 0.8)",
    "textDark": "#232323",
    "borderDark": "#202833",
    "borderLight": "#8E8383"
  },
  "borderRadius": {
    "xs": "6px",
    "sm": "12px",
    "md": "20px",
    "lg": "20.41314125061035px",
    "xl": "22.355138778686523px",
    "2xl": "23.686382293701172px",
    "3xl": "38px",
    "4xl": "85px",
    "5xl": "98.68194580078125px",
    "full": "1000px",
    "button": "111.78555297851562px",
    "large": "236.84442138671875px"
  },
  "spacing": {
    "4": "4px",
    "5": "5px",
    "6": "6px",
    "10": "10px",
    "12": "12px",
    "13": "13px",
    "14": "14px",
    "15": "15px",
    "16": "16px",
    "17": "17px",
    "20": "20px",
    "21": "21px",
    "24": "24px",
    "25": "25px",
    "26": "26px",
    "28": "28px",
    "32": "32px",
    "40": "40px",
    "42": "42px",
    "43": "43px",
    "44": "44px",
    "46": "46px",
    "49": "49px",
    "50": "50px",
    "53": "53px",
    "54": "54px",
    "55": "55px",
    "66": "66px",
    "67": "67px",
    "72": "72px",
    "85": "85px",
    "88": "88px",
    "99": "99px",
    "100": "100px",
    "112": "112px",
    "115": "115px",
    "133": "133px",
    "139": "139px",
    "200": "200px",
    "226": "226px",
    "237": "237px",
    "281": "281px",
    "292": "292px",
    "310": "310px",
    "321": "321px",
    "351": "351px",
    "418": "418px",
    "467": "467px",
    "474": "474px",
    "503": "503px",
    "552": "552px",
    "554": "554px",
    "614": "614px",
    "662": "662px",
    "761": "761px",
    "857": "857px",
    "917": "917px",
    "1041": "1041px",
    "1263": "1263px",
    "1304": "1304px",
    "1327": "1327px",
    "1328": "1328px",
    "1337": "1337px",
    "1421": "1421px"
  },
  "typography": {
    "fontFamily": {
      "sfProDisplay": "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
      "sfPro": "SF Pro, -apple-system, BlinkMacSystemFont, sans-serif",
      "plusJakartaSans": "Plus Jakarta Sans, sans-serif"
    },
    "fontWeight": {
      "light": 300,
      "regular": 400,
      "medium": 500,
      "semibold": 510,
      "bold": 600
    }
  }
}
```

---

## 10. PIXEL-PERFECT CHECKLIST
- [ ] All colors match the HEX values exactly
- [ ] All border radii are preserved with decimal values
- [ ] All spacing values are implemented correctly
- [ ] Typography (font family, size, weight, line height, letter spacing) matches the design
- [ ] Image fill mode (cover/stretch) is correct
- [ ] Auto Layout properties (gap, padding, alignment) are preserved
- [ ] Constraints are respected
- [ ] Opacity values are applied
- [ ] All text content is exactly as in the design
- [ ] Button states are implemented

---

## 11. ELEMENTS DIMENSIONS AND LAYOUT

### FRAMES

#### Home - Desktop (#1326:4063)
| Property | Value |
|----------|-------|
| Type | FRAME |
| Width | 1440px (inferred) |
| Height | - |
| Fill | #FFFFFF |

#### Banner (#1326:4067)
| Property | Value |
|----------|-------|
| Type | FRAME |
| Width | Fill Container |
| Height | 87.76px |
| Fill | #F6F7F9 |
| Border Radius | 22.355138778686523px |

#### Contact Button (#1326:4072)
| Property | Value |
|----------|-------|
| Type | FRAME |
| Width | Hug Content |
| Height | Hug Content |
| Fill | #0161FE |
| Border Radius | 111.78555297851562px |
| Padding | 15px 26px |
| Gap | 10px |

#### Hero Page (#1326:4085)
| Property | Value |
|----------|-------|
| Type | FRAME |
| Width | Fill Container |
| Height | 916px |
| Fill | #FEFEFE |
| Border Radius | 20.41314125061035px |

#### About Us Section (#1326:4101)
| Property | Value |
|----------|-------|
| Type | FRAME |
| Width | Fill Container |
| Height | 856px |
| Fill | #F6F7F9 |
| Border Radius | 20px |

---

### TEXT ELEMENTS

#### For Those Who Demand #1 Quality (#1326:4088)
| Property | Value |
|----------|-------|
| Type | TEXT |
| Content | For Those Who Demand #1 Quality |
| Font Family | SF Pro Display |
| Font Weight | 500 |
| Font Size | 81px |
| Line Height | 90px |
| Text Align | LEFT |
| Fill | #111111 |
| Width | 551px |
| Height | 261px |

#### Contact (#1326:4073)
| Property | Value |
|----------|-------|
| Type | TEXT |
| Content | Contact |
| Font Family | Plus Jakarta Sans |
| Font Weight | 500 |
| Font Size | 15.777778625488281px |
| Line Height | 22.47px |
| Letter Spacing | -0.005em |
| Text Align | CENTER |
| Fill | #FFFFFF |

#### Home (#1326:4076)
| Property | Value |
|----------|-------|
| Type | TEXT |
| Content | Home |
| Font Family | SF Pro Display |
| Font Weight | 400 |
| Font Size | 16px |
| Line Height | 22.35px |
| Text Align | CENTER |
| Fill | #0161FE |

#### About (#1326:4078)
| Property | Value |
|----------|-------|
| Type | TEXT |
| Content | About |
| Font Family | SF Pro Display |
| Font Weight | 400 |
| Font Size | 16px |
| Line Height | 22.35px |
| Text Align | CENTER |
| Fill | #111111 |

#### Service (#1326:4080)
| Property | Value |
|----------|-------|
| Type | TEXT |
| Content | Service |
| Font Family | SF Pro Display |
| Font Weight | 400 |
| Font Size | 16px |
| Line Height | 22.35px |
| Text Align | CENTER |
| Fill | #111111 |

#### Blogs (#1326:4082)
| Property | Value |
|----------|-------|
| Type | TEXT |
| Content | Blogs |
| Font Family | SF Pro Display |
| Font Weight | 400 |
| Font Size | 16px |
| Line Height | 22.35px |
| Text Align | CENTER |
| Fill | #111111 |

---

### IMAGES

#### Arunijone Logo Final v1 3 (#1326:4070)
| Property | Value |
|----------|-------|
| Type | IMAGE |
| Width | 49px |
| Height | 42px |
| Fill Mode | FILL (cover) |
| Border Radius | 12px |

#### image 266 (#1326:4086)
| Property | Value |
|----------|-------|
| Type | IMAGE |
| Width | 1303px |
| Height | 1040px |
| Fill Mode | FILL (cover) |
