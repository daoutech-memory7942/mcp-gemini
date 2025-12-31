import figmaTokens from './figma-design-token.json';

// Helper function to convert Figma color to rgba string
function rgba(color) {
  return `rgba(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(color.b * 255)}, ${color.a})`;
}

// Helper to set nested properties
function set(obj, path, value) {
  const keys = path.split('/');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

// Function to parse figma tokens
function parseTokens() {
  const theme = {
    colors: {},
    fontSize: {},
  };

  const variablesById = {};
  figmaTokens.collections.forEach(collection => {
    collection.variables.forEach(variable => {
      variablesById[variable.id] = variable;
    });
  });

  const resolveValue = (variable) => {
    const modeKey = Object.keys(variable.valuesByMode)[0];
    let valueNode = variable.valuesByMode[modeKey];

    if (valueNode.type === 'VARIABLE_ALIAS') {
      const alias = variablesById[valueNode.id];
      if (alias) {
        return resolveValue(alias);
      }
      return null;
    }
    return valueNode;
  };

  figmaTokens.collections.forEach(collection => {
    collection.variables.forEach(variable => {
      const value = resolveValue(variable);
      if (value === null) return;

      if (variable.resolvedType === 'COLOR') {
        set(theme.colors, variable.name, rgba(value));
      } else if (variable.resolvedType === 'FLOAT') {
        if (variable.name.startsWith('font/')) {
            const path = variable.name.replace('font/', '');
            set(theme.fontSize, path, `${value}px`);
        }
      }
    });
  });

  return theme;
}

const customTheme = parseTokens();

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: customTheme.colors,
      fontSize: customTheme.fontSize,
    },
  },
  plugins: [],
}

