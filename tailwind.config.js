module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
      },
      fontSize: {
        "13": ["13px", { lineHeight: "1.25rem" }],
      },
      colors: {
        primary: '#0090FF'
      }
    
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
