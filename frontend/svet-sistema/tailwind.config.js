/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C3E50', // Azul petróleo
          green: '#27AE60',   // Verde água
          white: '#ECF0F1',   // Branco gelo
        },
        secondary: {
          mint: '#A8E6CF',      // Verde menta
          orange: '#F39C12',    // Laranja suave
          gray: '#BDC3C7',      // Cinza suave
        },
        feedback: {
          success: '#2ECC71',   // Verde esmeralda
          error: '#E74C3C',     // Vermelho suave
          warning: '#F1C40F',   // Amarelo dourado
          info: '#3498DB',      // Azul céu
        },
        text: {
          base: '#333333',      // Texto padrão
          label: '#7F8C8D',     // Labels e placeholders
          highlight: '#F39C12', // Destaques
        },
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        // Títulos
        h1: ['40px', { lineHeight: '48px', fontWeight: '700' }],
        h2: ['28px', { lineHeight: '36px', fontWeight: '600' }],
        h3: ['22px', { lineHeight: '30px', fontWeight: '600' }],

        // Textos
        base: ['16px', { lineHeight: '24px', fontWeight: '400' }],
        sm: ['14px', { lineHeight: '20px', fontWeight: '400' }],
        xs: ['12px', { lineHeight: '16px', fontWeight: '400' }],

        // Botões e destaques
        button: ['16px', { lineHeight: '24px', fontWeight: '600' }],
        buttonSm: ['14px', { lineHeight: '20px', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
}
