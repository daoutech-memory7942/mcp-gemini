import fs from 'fs';

const tokens = JSON.parse(fs.readFileSync('figma-design-token.json', 'utf-8'));
const variables = {};
const variableMap = {};

// First pass: collect all variables by ID
for (const collection of tokens.collections) {
  for (const variable of collection.variables) {
    variableMap[variable.id] = variable;
  }
}

// Second pass: resolve aliases and get values
for (const collection of tokens.collections) {
  for (const variable of collection.variables) {
    const name = `--${variable.name.replace(/\//g, "-")}`;
    let value = variable.valuesByMode["5543:0"] || variable.valuesByMode["4205:0"];

    if (value && value.type === "VARIABLE_ALIAS") {
      let alias = variableMap[value.id];
      if(alias) {
        let aliasValue = alias.valuesByMode["5543:0"] || alias.valuesByMode["4205:0"];
        if (aliasValue && aliasValue.type === "VARIABLE_ALIAS") {
            let secondAlias = variableMap[aliasValue.id];
            if(secondAlias) {
                 value = secondAlias.valuesByMode["5543:0"] || secondAlias.valuesByMode["4205:0"];
            }
        } else {
            value = aliasValue;
        }
      }
    }

    if (variable.resolvedType === "COLOR" && value && value.r !== undefined) {
      const { r, g, b, a } = value;
      variables[name] = `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
    } else if (variable.resolvedType === "FLOAT" && typeof value === 'number') {
      variables[name] = value + 'px';
    }
  }
}

let cssString = ":root {\n";
for (const [name, value] of Object.entries(variables)) {
  cssString += `  ${name}: ${value};\n`;
}
cssString += "}\n";

fs.writeFileSync('src/new-variables.css', cssString);