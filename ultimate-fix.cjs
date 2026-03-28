const fs = require('fs');

function fixJSX(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix broken tags and spaces
    content = content.replace(/<\s+([A-Za-z])/g, '<$1');
    content = content.replace(/<\s*\/\s*([A-Za-z])/g, '</$1');
    content = content.replace(/\/\s+>/g, '/>');
    content = content.replace(/([a-zA-Z]+)\s+-\s+([a-zA-Z]+)/g, '$1-$2');
    content = content.replace(/<\s+>/g, '<>');
    content = content.replace(/<\s*\/\s*>/g, '</>');

    // Apply exact type additions
    content = content.replace(/export const useInView = \(options = \{/g, 'export const useInView = (options: IntersectionObserverInit = {');
    content = content.replace(/export const Section = \(\{([\s\S]*?)\}\) =>/g, 'interface SectionProps { id?: string; className?: string; children: React.ReactNode; }\nexport const Section: React.FC<SectionProps> = ({$1}) =>');
    content = content.replace(/const BentoCard = \(\{([\s\S]*?bg = "from-white\/5 to-transparent"[\s\S]*?)\}\) =>/g, 'interface BentoCardProps { title: React.ReactNode; tag: string; img: string; alt: string; style?: React.CSSProperties; centerTitle?: boolean; bg?: string; }\nconst BentoCard: React.FC<BentoCardProps> = ({$1}) =>');
    content = content.replace(/const Disclosure = \(\{\s*q,\s*a\s*\}\) =>/g, 'interface DisclosureProps { q: string; a: React.ReactNode; }\nconst Disclosure: React.FC<DisclosureProps> = ({ q, a }) =>');

    // Add remaining smaller types inline
    content = content.replace(/const e = \{\};/g, 'const e: Record<string, string> = {};');
    content = content.replace(/const \[color, setColor\] = useState\('black'\);/g, "const [color, setColor] = useState<keyof typeof variants>('black');");
    content = content.replace(/onPick = \(key\) =>/g, 'onPick = (key: keyof typeof variants) =>');
    content = content.replace(/const wrapRef = useRef\(null\);/g, 'const wrapRef = useRef<HTMLDivElement>(null);');
    content = content.replace(/const ref = useRef\(null\);/g, 'const ref = useRef<HTMLDivElement>(null);');

    // Mappings and events
    content = content.replace(/const obs = new IntersectionObserver\(\(entries\) => \{/g, 'const obs = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {');
    content = content.replace(/cards.map\(\(p, i\) => \(/g, 'cards.map((p: any, i: number) => (');
    content = content.replace(/items.map\(\(it, idx\) => \(/g, 'items.map((it: any, idx: number) => (');
    content = content.replace(/const \[errors, setErrors\] = useState\(\{\}\);/g, 'const [errors, setErrors] = useState<Record<string, string>>({});');
    content = content.replace(/const onSubmit = \(ev\) => \{/g, 'const onSubmit = (ev: React.FormEvent) => {');
    content = content.replace(/onChange=\{\(e\) => setState/g, 'onChange={(e: any) => setState');
    content = content.replace(/onClick=\{\(e\) => e.stopPropagation\(\)\}/g, 'onClick={(e: React.MouseEvent) => e.stopPropagation()}');

    fs.writeFileSync(file, content);
}

fs.copyFileSync('../premium-audio-ui.emergent.cloud/static/js/App.js', 'src/App.tsx');
fs.copyFileSync('../premium-audio-ui.emergent.cloud/static/js/components.js', 'src/components.tsx');

fixJSX('src/components.tsx');
fixJSX('src/App.tsx');

let appC = fs.readFileSync('src/App.tsx', 'utf8');
appC = appC.replace(/\.forEach\(\(entry\) => \{/g, '.forEach((entry: any) => {');
appC = appC.replace(/const observer = new IntersectionObserver\(\(entries, obs\) => \{/g, 'const observer = new IntersectionObserver((entries: IntersectionObserverEntry[], obs: IntersectionObserver) => {');
appC = appC.replace(/import App from '\.\/App\.jsx'/g, "import App from './App'");
appC = appC.replace(/import \{([\s\S]*?)\} from "\.\/components\.js";/g, 'import {$1} from "./components";');

fs.writeFileSync('src/App.tsx', appC);

console.log('Processed cleanly');
