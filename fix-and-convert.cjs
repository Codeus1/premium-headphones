const fs = require('fs');

function fixAndConvert(oldFile, newFile) {
    if (!fs.existsSync(oldFile)) return;
    let content = fs.readFileSync(oldFile, 'utf8');
    
    // Fix dashed properties: aria - label -> aria-label, data - reveal -> data-reveal
    content = content.replace(/([a-zA-Z]+)\s+-\s+([a-zA-Z]+)/g, '$1-$2');
    
    // Write new file
    fs.writeFileSync(newFile, content);
    fs.unlinkSync(oldFile);
    console.log('Converted', oldFile, 'to', newFile);
}

fixAndConvert('src/App.jsx', 'src/App.tsx');
fixAndConvert('src/components.jsx', 'src/components.tsx');
