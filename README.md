# Linear Function Calculator

A web-based calculator for generating CSS `calc()` functions that convert between pixel values and viewport width units (vw). This tool helps create responsive CSS values using linear interpolation.

## 🎯 Purpose

This calculator solves the common problem of creating fluid, responsive layouts in CSS. It generates `calc()` expressions that smoothly scale between different viewport widths, eliminating the need for multiple media queries.

## ✨ Features

- **Visual Graph**: Interactive SVG graph displaying the linear relationship between viewport width and pixel values
- **Real-time Calculation**: Instant calculation as you input values
- **Copy to Clipboard**: One-click copying of the generated CSS code
- **Clean Interface**: Minimalist dark theme with clear visualization

## 🚀 How to Use

1. **Open the Tool**: Open `index.html` in your web browser
2. **Input Values**:
   - **max-width**: Maximum pixel value (e.g., 24 for 24px)
   - **min-width**: Minimum pixel value (e.g., 16 for 16px)
   - **min-vw**: Minimum viewport width in vw units (e.g., 32 for 320px viewport width, since 1vw = 1% of viewport)
   - **max-vw**: Maximum viewport width in vw units (e.g., 120 for 1200px viewport width)
3. **Get Result**: The calculator automatically generates a `calc()` expression
4. **Copy**: Click "Copy to Clipboard" to copy the result

## 📐 Example

**Input:**
- max-width: `24`
- min-width: `16`
- min-vw: `32` (320px viewport width)
- max-vw: `120` (1200px viewport width)

**Output:**
```css
calc(0.909vw + 13.09px)
```

This creates a font size (or any other property) that smoothly scales from 16px at 320px viewport width to 24px at 1200px viewport width.

## 🛠️ Technical Details

### Files Structure
```
Linear_Function/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Styling
├── script/
│   └── script.js      # Calculation logic
└── img/               # Images (if any)
```

### Formula

The calculator uses the linear function formula:
```
y = ax + b
```

Where:
- `y` = pixel value
- `x` = viewport width as a decimal (vw/100, e.g., 32vw becomes 0.32)
- `a` = slope (rate of change)
- `b` = y-intercept (base value in pixels)

The final CSS output is: `calc(a*vw + b*px)`

## 💻 Usage in CSS

You can use the generated expression for any CSS property that accepts length values:

```css
/* Font size */
font-size: calc(0.909vw + 13.09px);

/* Padding */
padding: calc(0.909vw + 13.09px);

/* Margins */
margin-top: calc(0.909vw + 13.09px);

/* Width/Height */
width: calc(0.909vw + 13.09px);
```

## 🌐 Browser Compatibility

This tool works in all modern browsers that support:
- CSS `calc()` function
- Viewport width units (vw)
- ES6 JavaScript

## 📝 License

This project is open source and available for use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**amgSTRIDeR**
- GitHub: [@amgSTRIDeR](https://github.com/amgSTRIDeR)