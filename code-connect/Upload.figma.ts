// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=10366-72136
// component=Ajout de fichier

import figma from 'figma';

export default figma.html`
<div class="fr-upload-group">
  <label class="fr-label" for="file-upload">
    Ajouter des fichiers
    <span class="fr-hint-text">Taille maximale : 10 Mo. Formats acceptés : PDF, JPG, PNG.</span>
  </label>
  <input class="fr-upload" type="file" id="file-upload" name="file-upload">
</div>
`;
