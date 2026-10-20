// url=https://www.figma.com/design/XiiBNxBwz86ZPxPidaJsOM/DSFR---Composants---v1.15?node-id=447-7150
// component=Modale Mobile

import figma from 'figma';

export default figma.html`
<dialog aria-labelledby="modal-title" id="modal-id" class="fr-modal" role="dialog">
  <div class="fr-container fr-container--fluid fr-container-md">
    <div class="fr-grid-row fr-grid-row--center">
      <div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
        <div class="fr-modal__body">
          <div class="fr-modal__header">
            <button class="fr-btn--close fr-btn" aria-controls="modal-id" type="button">Fermer</button>
          </div>
          <div class="fr-modal__content">
            <h1 id="modal-title" class="fr-modal__title">Titre de la modale</h1>
            <p>Contenu principal et informations détaillées de la boîte de dialogue.</p>
          </div>
          <div class="fr-modal__footer">
            <ul class="fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-lg">
              <li><button class="fr-btn" type="button">Valider</button></li>
              <li><button class="fr-btn fr-btn--secondary" aria-controls="modal-id" type="button">Annuler</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</dialog>
`;
