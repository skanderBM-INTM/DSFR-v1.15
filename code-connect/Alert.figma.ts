// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=1935-224
// component=Alerte

import figma from 'figma';

const type = figma.properties.enum('État', {
  'Information': 'fr-alert--info',
  'Succès': 'fr-alert--success',
  'Erreur': 'fr-alert--error',
  'Avertissement': 'fr-alert--warning'
}) || 'fr-alert--info';

const size = figma.properties.enum('Taille', {
  'SM': 'fr-alert--sm',
  'MD': ''
}) || '';

const hasClose = figma.properties.boolean('Fermeture');

export default figma.html`
<div class="fr-alert ${type} ${size}">
  <h3 class="fr-alert__title">Titre de l'alerte</h3>
  <p>Message informatif ou explicatif de l'alerte.</p>
  ${hasClose ? figma.html`<button class="fr-btn--close fr-btn" title="Masquer le message" type="button">Masquer le message</button>` : ''}
</div>
`;
