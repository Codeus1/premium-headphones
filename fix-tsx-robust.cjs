const fs = require('fs');

function fixJSX(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Core structural fixes
    // Fix < div or < \n div
    content = content.replace(/<\s+([A-Za-z])/g, '<$1');
    // Fix </ div> or < /\n div >
    content = content.replace(/<\s*\/\s*([A-Za-z])/g, '</$1');
    // Fix / > to />
    content = content.replace(/\/\s+>/g, '/>');

    // Fix dashed properties: aria - label -> aria-label
    content = content.replace(/([a-zA-Z]+)\s+-\s+([a-zA-Z]+)/g, '$1-$2');

    // Fix fragments
    content = content.replace(/<\s+>/g, '<>');
    content = content.replace(/<\s*\/\s*>/g, '</>');

    // TypeScript types insertion for specific components
    
    // useInView options
    content = content.replace(
        /export const useInView = \(options = \{/g,
        'export const useInView = (options: IntersectionObserverInit = {'
    );

    // Section Component
    content = content.replace(
        /export const Section = \(\{([\s\S]*?)\}\) =>/g,
        'interface SectionProps { id?: string; className?: string; children: React.ReactNode; }\nexport const Section: React.FC<SectionProps> = ({}) =>'
    );

    // BentoCard Component
    content = content.replace(
        /const BentoCard = \(\{([\s\S]*?bg = "from-white\/5 to-transparent"[\s\S]*?)\}\) =>/g,
        'interface BentoCardProps { title: React.ReactNode; tag: string; img: string; alt: string; style?: React.CSSProperties; centerTitle?: boolean; bg?: string; }\nconst BentoCard: React.FC<BentoCardProps> = ({}) =>'
    );

    // Disclosure Component
    content = content.replace(
        /const Disclosure = \(\{\s*q,\s*a\s*\}\) =>/g,
        'interface DisclosureProps { q: string; a: React.ReactNode; }\nconst Disclosure: React.FC<DisclosureProps> = ({ q, a }) =>'
    );

    fs.writeFileSync(file, content);
    console.log('Processed', file);
}

// Re-copy from original for a fresh start
fs.copyFileSync('../premium-audio-ui.emergent.cloud/static/js/App.js', 'src/App.tsx');
fs.copyFileSync('../premium-audio-ui.emergent.cloud/static/js/components.js', 'src/components.tsx');

fixJSX('src/App.tsx');
fixJSX('src/components.tsx');
