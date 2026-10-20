const fs = require('fs');
const path = require('path');

const COMPONENTS = [
  'accordion',
  'alert',
  'badge',
  'breadcrumb',
  'button',
  'callout',
  'card',
  'checkbox',
  'connect',
  'consent',
  'footer',
  'form',
  'header',
  'highlight',
  'input',
  'link',
  'logo',
  'modal',
  'navigation',
  'notice',
  'pagination',
  'password',
  'quote',
  'radio',
  'search',
  'select',
  'sidemenu',
  'skiplink',
  'stepper',
  'summary',
  'tab',
  'table',
  'tag',
  'tile',
  'toggle',
  'tooltip',
  'upload'
];

const ROOT = path.resolve(__dirname, '..');
const SKILL_DIR = path.join(ROOT, 'skills', 'dsfr');

function cleanMarkdown(content) {
  if (!content) return '';
  // Supprimer frontmatter YAML
  let cleaned = content.replace(/^---[\s\S]*?---\s*\r?\n/m, '');
  // Supprimer directives :::dsfr-doc-* et :::
  cleaned = cleaned.replace(/^:::dsfr-doc[^\n]*\n?/gm, '');
  cleaned = cleaned.replace(/^:::fr-[^\n]*\n?/gm, '');
  cleaned = cleaned.replace(/^:::[^\n]*\n?/gm, '');
  return cleaned;
}

function extractFrontmatter(content) {
  const match = content.match(/^---([\s\S]*?)---/);
  if (!match) return {};
  const lines = match[1].split('\n');
  const res = {};
  for (const line of lines) {
    const m = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (m) {
      res[m[1]] = m[2].replace(/^["']|["']$/g, '').trim();
    }
  }
  return res;
}

function extractHtmlBlocks(content) {
  const blocks = [];
  const regex = /```(?:html|HTML)\r?\n([\s\S]*?)```/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const code = match[1].trim();
    if (code.length > 0) {
      blocks.push(code);
    }
  }
  return blocks;
}

function createCompleteHtml(snippet, title) {
  return `<!DOCTYPE html>
<html lang="fr" data-fr-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DSFR - ${title}</title>
  <!-- CSS DSFR officiel v1.15.4 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@1.15.4/dist/dsfr.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@1.15.4/dist/utility/utility.min.css">
</head>
<body>
  <div class="fr-container fr-my-4w">
    <h1>${title}</h1>
    <div class="fr-my-2w">
${snippet.split('\n').map(l => '      ' + l).join('\n')}
    </div>
  </div>

  <!-- JS DSFR officiel -->
  <script type="module" src="https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@1.15.4/dist/dsfr.module.min.js"></script>
</body>
</html>`;
}

console.log('🚀 Synchronisation du Skill DSFR...');
fs.mkdirSync(path.join(SKILL_DIR, 'composants'), { recursive: true });

const indexedComponents = [];

for (const comp of COMPONENTS) {
  const srcDocDir = path.join(ROOT, 'src', 'dsfr', 'component', comp, '_part', 'doc');
  const targetDir = path.join(SKILL_DIR, 'composants', comp);
  const examplesDir = path.join(targetDir, 'examples');
  const assetsDir = path.join(targetDir, 'assets');

  if (!fs.existsSync(srcDocDir)) {
    console.log(`⚠️  Documentation introuvable pour ${comp}`);
    continue;
  }

  fs.mkdirSync(examplesDir, { recursive: true });
  fs.mkdirSync(assetsDir, { recursive: true });

  const indexRawPath = path.join(srcDocDir, 'index.md');
  let title = comp;
  let shortDesc = '';

  if (fs.existsSync(indexRawPath)) {
    const raw = fs.readFileSync(indexRawPath, 'utf8');
    const fm = extractFrontmatter(raw);
    title = fm.title || comp;
    shortDesc = fm.shortDescription || fm.description || '';
    const cleaned = cleanMarkdown(raw);

    const indexContent = `# ${title}

${shortDesc ? `> **${shortDesc}**\n` : ''}
## Navigation

- [Documentation Code](./code.md) - Structure HTML et classes BEM
- [Accessibilité](./accessibilite.md) - Critères RGAA obligatoires
- [Design](./design.md) - Règles d'usage et variantes
- [Exemples](./examples/) - Gabarits HTML complets

${cleaned}
`;
    fs.writeFileSync(path.join(targetDir, 'index.md'), indexContent, 'utf8');
  }

  // Accessibilité
  const accRawPath = path.join(srcDocDir, 'accessibility', 'index.md');
  if (fs.existsSync(accRawPath)) {
    const raw = fs.readFileSync(accRawPath, 'utf8');
    fs.writeFileSync(path.join(targetDir, 'accessibilite.md'), `# Accessibilité : ${title}\n\n` + cleanMarkdown(raw), 'utf8');
  }

  // Design
  const desRawPath = path.join(srcDocDir, 'design', 'index.md');
  if (fs.existsSync(desRawPath)) {
    const raw = fs.readFileSync(desRawPath, 'utf8');
    fs.writeFileSync(path.join(targetDir, 'design.md'), `# Design : ${title}\n\n` + cleanMarkdown(raw), 'utf8');
  }

  // Code & Exemples
  const codeRawPath = path.join(srcDocDir, 'code', 'index.md');
  let snippetCount = 0;
  if (fs.existsSync(codeRawPath)) {
    const raw = fs.readFileSync(codeRawPath, 'utf8');
    fs.writeFileSync(path.join(targetDir, 'code.md'), `# Code : ${title}\n\n` + cleanMarkdown(raw), 'utf8');

    const snippets = extractHtmlBlocks(raw);
    snippets.forEach((snippet, i) => {
      const htmlFile = path.join(examplesDir, `example-${i + 1}.html`);
      fs.writeFileSync(htmlFile, createCompleteHtml(snippet, `${title} - Exemple ${i + 1}`), 'utf8');
      snippetCount++;
    });
  }

  // Copie des assets
  const srcAssetsDir = path.join(srcDocDir, '_asset');
  if (fs.existsSync(srcAssetsDir)) {
    try {
      fs.cpSync(srcAssetsDir, assetsDir, { recursive: true });
    } catch (e) {}
  }

  indexedComponents.push({ comp, title, shortDesc, snippetCount });
  console.log(`✅ ${comp} synchronisé (${snippetCount} snippets HTML)`);
}

// Générer SKILL.md
const skillMdContent = `---
name: dsfr
description: Guide officiel et catalogue complet des composants du Système de Design de l'État (DSFR) v1.15. Spécifications HTML officielles, classes CSS BEM, accessibilité RGAA et exemples pour concevoir et développer des interfaces conformes de l'État.
---

# Système de Design de l'État (DSFR) v1.15

Ce skill fournit la référence officielle et exhaustive des composants du DSFR pour concevoir, prototyper et développer des interfaces conformes aux normes graphiques et légales de l'État français (RGAA, bloc-marque Marianne, accessibilité).

## Règles impératives de développement DSFR

1. **Pas d'improvisation CSS** : toujours utiliser les classes BEM officielles du DSFR (\`fr-*\`) et les utilitaires officiels (\`fr-mt-*\`, \`fr-grid-row\`, etc.). Ne jamais inventer de classes custom sans raison.
2. **Accessibilité (RGAA)** :
   - Tous les champs de formulaire doivent être associés à un \`<label class="fr-label">\` via \`for="id"\`.
   - Les boutons d'accordéon, de modale ou de menu burger doivent comporter \`aria-controls\` et \`data-fr-opened\` ou \`aria-expanded\`.
   - Utiliser systématiquement les balises sémantiques (\`<header role="banner">\`, \`<main role="main">\`, \`<footer role="contentinfo">\`).
3. **Bloc-marque Marianne** :
   - Utiliser la structure exacte \`<p class="fr-logo">République<br>Française</p>\` dans le header et le footer.
4. **Feuilles de style & Scripts** :
   - CSS Core & composants : \`https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@1.15.4/dist/dsfr.min.css\`
   - CSS Utilitaires : \`https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@1.15.4/dist/utility/utility.min.css\`
   - JavaScript modulaire : \`https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@1.15.4/dist/dsfr.module.min.js\`

---

## Catalogue des composants disponibles (${indexedComponents.length})

| Composant | Description | Documentation | Exemples |
| :--- | :--- | :--- | :--- |
${indexedComponents.map(c => `| **${c.title}** (\`${c.comp}\`) | ${c.shortDesc || 'Composant officiel DSFR'} | [Code](composants/${c.comp}/code.md) • [Accessibilité](composants/${c.comp}/accessibilite.md) | [${c.snippetCount} exemple(s)](composants/${c.comp}/examples/) |`).join('\n')}

---

## Utilisation des composants

Pour implémenter un composant :
1. Consulter sa documentation technique dans \`composants/<nom>/code.md\`.
2. Vérifier les exigences d'accessibilité dans \`composants/<nom>/accessibilite.md\`.
3. Réutiliser la structure canonique disponible dans \`composants/<nom>/examples/example-1.html\`.
`;

fs.writeFileSync(path.join(SKILL_DIR, 'SKILL.md'), skillMdContent, 'utf8');
console.log(`\n🎉 Skill DSFR généré avec succès dans ${SKILL_DIR}/SKILL.md !`);
