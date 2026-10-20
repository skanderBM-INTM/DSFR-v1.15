// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=120-4762
// component=Button

import figma from 'figma';

const label = figma.properties.string('Libellé');
const disabled = figma.properties.enum('Désactivé', {
  'True': 'disabled',
  'False': ''
});
const iconPos = figma.properties.enum('Icône', {
  'Sans': '',
  'Droite': 'fr-btn--icon-right',
  'Gauche': 'fr-btn--icon-left',
  'Seule': ''
});

const classes = ['fr-btn', iconPos].filter(Boolean).join(' ');

export default figma.html`
  <button class="${classes}" ${disabled ? 'disabled' : ''}>${label}</button>
`;
