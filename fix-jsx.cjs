const fs = require('fs');
function fixJSX(file) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<\s+([A-Za-z0-9_]+)/g, '<$1');
    content = content.replace(/<\s*\/\s*([A-Za-z0-9_]+)/g, '</$1');
    content = content.replace(/\/\s+>/g, '/>');
    fs.writeFileSync(file, content);
}
fixJSX('src/App.jsx');
fixJSX('src/components.jsx');
