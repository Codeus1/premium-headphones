const fs = require('fs');

function replace(file, find, replaceValue) {
    let text = fs.readFileSync(file, 'utf8');
    text = text.replace(find, replaceValue);
    fs.writeFileSync(file, text);
}

replace('src/components.tsx', /const e = \{\};/g, 'const e: Record<string, string> = {};');
replace('src/components.tsx', /const \[color, setColor\] = useState\('black'\);/g, "const [color, setColor] = useState<keyof typeof variants>('black');");
replace('src/components.tsx', /const wrapRef = useRef\(null\);/g, 'const wrapRef = useRef<HTMLDivElement>(null);');
replace('src/components.tsx', /const ref = useRef\(null\);/g, 'const ref = useRef<HTMLDivElement>(null);');

// App.tsx global reveal observer entry implicitly has any
replace('src/App.tsx', /\.forEach\(\(entry\) => \{/g, '.forEach((entry: any) => {');

console.log('Done typings 2');
