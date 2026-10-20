// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=12356-77678
// component=Stepper

import figma from 'figma';

const steps = figma.properties.enum('Étapes', {
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
}) || '3';

export default figma.html`
<div class="fr-stepper">
  <h2 class="fr-stepper__title">
    <span class="fr-stepper__state">Étape 1 sur ${steps}</span>
    Titre de l'étape
  </h2>
  <div class="fr-stepper__steps" data-fr-current-step="1" data-fr-steps="${steps}"></div>
  <p class="fr-stepper__details">
    <span class="fr-text--bold">Étape suivante :</span> Étape suivante
  </p>
</div>
`;
