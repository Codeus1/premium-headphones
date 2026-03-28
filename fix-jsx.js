const fs = require('fs');

function fixJSX(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix < div or < \n div
    content = content.replace(/<\s+([A-Za-z])/g, '<');
    // Fix </ div> or < /\n div >
    content = content.replace(/<\s*\/\s*([A-Za-z])/g, '</');
    // Fix / > to />
    content = content.replace(/\/\s+>/g, '/>');

    fs.writeFileSync(file, content);
    console.log('Fixed', file);
}

fixJSX('src/App.jsx');
fixJSX('src/components.jsx');
