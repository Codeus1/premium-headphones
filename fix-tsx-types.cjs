const fs = require('fs');

function replace(file, find, replaceValue) {
    let text = fs.readFileSync(file, 'utf8');
    text = text.replace(find, replaceValue);
    fs.writeFileSync(file, text);
}

// components.tsx
replace('src/components.tsx', /const obs = new IntersectionObserver\(\(entries\) => \{/g, 'const obs = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {');
replace('src/components.tsx', /const onPick = \(key\) => \{/g, 'const onPick = (key: string) => {');
replace('src/components.tsx', /cards.map\(\(p, i\) => \(/g, 'cards.map((p: any, i: number) => (');
replace('src/components.tsx', /items.map\(\(it, idx\) => \(/g, 'items.map((it: any, idx: number) => (');
replace('src/components.tsx', /const \[errors, setErrors\] = useState\(\{\}\);/g, 'const [errors, setErrors] = useState<Record<string, string>>({});');
replace('src/components.tsx', /const onSubmit = \(ev\) => \{/g, 'const onSubmit = (ev: React.FormEvent) => {');
replace('src/components.tsx', /onChange=\{\(e\) => setState/g, 'onChange={(e: any) => setState');
replace('src/components.tsx', /onClick=\{\(e\) => e.stopPropagation\(\)\}/g, 'onClick={(e: React.MouseEvent) => e.stopPropagation()}');

// App.tsx
replace('src/App.tsx', /const observer = new IntersectionObserver\(\(entries, obs\) => \{/g, 'const observer = new IntersectionObserver((entries: IntersectionObserverEntry[], obs: IntersectionObserver) => {');

console.log('Done typings');
