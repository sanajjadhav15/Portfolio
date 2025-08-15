/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',      // Darker navy blue
        cardBackground: '#1e293b', // Slate gray
        accent: '#60a5fa',       // Professional blue
        secondary: '#3b82f6',    // Bright blue for highlights
        tertiary: '#06b6d4',     // Data visualization teal
        success: '#10b981',      // Success green
        warning: '#f59e0b',      // Warning amber
        danger: '#ef4444',       // Error red
        text: '#f8fafc',         // Light text
        textSecondary: '#cbd5e1', // Secondary text
        gradient1: '#667eea',    // Gradient start
        gradient2: '#764ba2',    // Gradient end
      },
      backgroundImage: {
        'gradient-data': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-card': 'linear-gradient(145deg, #1e293b 0%, #334155 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(96, 165, 250, 0.3)',
        'card': '0 8px 32px rgba(15, 23, 42, 0.4)',
      },
    },
  },
  plugins: [],
}

// Modern Data Analytics Theme
// Primary: Dark navy slate for professional look
// Accent: Bright blue for data visualization elements
// Additional colors for charts and data representations
