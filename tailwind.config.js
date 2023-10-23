export default {
  content: ["./public/index.html", "./src/**/*.{js,vue}"],
  theme: {
    colors: {
      primary: "#373745",
      secondary: "#454138",
      light: "#FFFFFD",
    },
    extend: {
      fontFamily: {
        courier: ["Courier New", "monospace"],
        "courier-prime": ["Courier Prime", "monospace"],
      },
    },
  },
  plugins: [],
};
