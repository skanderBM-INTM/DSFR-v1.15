/**
 * Générateur d'écran DSFR pour Figma
 * 
 * Instructions d'utilisation :
 * 1. Ouvrez votre fichier Figma "DSFR - Composants - v1.15" dans Figma Desktop
 * 2. Ouvrez la console développeur Figma :
 *    - Raccourci Mac : Option + Cmd + I
 *    - Ou via le menu : Plugins > Development > Open Console
 * 3. Collez l'intégralité du code ci-dessous et appuyez sur Entrée
 * 
 * Résultat :
 * Figma crée instantanément un Frame Desktop 1440px avec les vraies instances
 * de vos composants DSFR (Header, Stepper, FranceConnect, Input, Button, Footer).
 */

(function generateDSFRFinancialAidScreen() {
  const page = figma.currentPage;

  // Création du Frame principal Desktop (1440px)
  const rootFrame = figma.createFrame();
  rootFrame.name = "Demande d'aide financière - DSFR Desktop 1440";
  rootFrame.resize(1440, 1300);
  rootFrame.fills = [{ type: 'SOLID', color: { r: 0.98, g: 0.98, b: 0.99 } }]; // fond DSFR #f6f6f6
  rootFrame.layoutMode = "VERTICAL";
  rootFrame.primaryAxisSizingMode = "AUTO";
  rootFrame.counterAxisSizingMode = "FIXED";
  rootFrame.itemSpacing = 40;
  rootFrame.paddingTop = 0;
  rootFrame.paddingBottom = 48;
  rootFrame.paddingLeft = 0;
  rootFrame.paddingRight = 0;

  // 1. Header Desktop (node: 148:52) ou Header générique
  const headerNode = figma.getNodeById("148:52") || figma.getNodeById("153:159413");
  if (headerNode && typeof headerNode.createInstance === 'function') {
    const headerInstance = headerNode.createInstance();
    headerInstance.layoutAlign = "STRETCH";
    rootFrame.appendChild(headerInstance);
  }

  // 2. Conteneur central (Largeur DSFR container: 800px)
  const container = figma.createFrame();
  container.name = "Conteneur - Formulaire DSFR";
  container.layoutMode = "VERTICAL";
  container.primaryAxisSizingMode = "AUTO";
  container.counterAxisSizingMode = "FIXED";
  container.resize(800, 700);
  container.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // fond blanc carte
  container.strokes = [{ type: 'SOLID', color: { r: 0.88, g: 0.88, b: 0.88 } }];
  container.strokeWeight = 1;
  container.cornerRadius = 4;
  container.itemSpacing = 24;
  container.paddingTop = 32;
  container.paddingBottom = 32;
  container.paddingLeft = 32;
  container.paddingRight = 32;
  container.layoutAlign = "CENTER";

  // 3. Stepper (node: 156:27708)
  const stepperNode = figma.getNodeById("156:27708");
  if (stepperNode && typeof stepperNode.createInstance === 'function') {
    const stepperInstance = stepperNode.createInstance();
    stepperInstance.layoutAlign = "STRETCH";
    container.appendChild(stepperInstance);
  }

  // 4. Bouton FranceConnect (node: 11985:75836)
  const fcNode = figma.getNodeById("11985:75836");
  if (fcNode && typeof fcNode.createInstance === 'function') {
    const fcInstance = fcNode.createInstance();
    container.appendChild(fcInstance);
  }

  // 5. Champs de formulaire (Input node: 14819:199027)
  const inputNode = figma.getNodeById("14819:199027");
  if (inputNode && typeof inputNode.createInstance === 'function') {
    const input1 = inputNode.createInstance();
    input1.name = "Champ - Numéro fiscal";
    input1.layoutAlign = "STRETCH";
    container.appendChild(input1);

    const input2 = inputNode.createInstance();
    input2.name = "Champ - Revenu fiscal de référence";
    input2.layoutAlign = "STRETCH";
    container.appendChild(input2);
  }

  // 6. Bouton de soumission (Button node: 155:24848)
  const btnNode = figma.getNodeById("155:24848");
  if (btnNode && typeof btnNode.createInstance === 'function') {
    const btnInstance = btnNode.createInstance();
    btnInstance.name = "Bouton - Valider et continuer";
    container.appendChild(btnInstance);
  }

  rootFrame.appendChild(container);

  // 7. Footer Desktop (node: 166:771) ou Footer générique
  const footerNode = figma.getNodeById("166:771") || figma.getNodeById("153:159416");
  if (footerNode && typeof footerNode.createInstance === 'function') {
    const footerInstance = footerNode.createInstance();
    footerInstance.layoutAlign = "STRETCH";
    rootFrame.appendChild(footerInstance);
  }

  // Ajout au canvas et focus
  page.appendChild(rootFrame);
  figma.viewport.scrollAndZoomIntoView([rootFrame]);
  figma.notify("🎉 Écran DSFR généré avec succès avec vos composants officiels !");
})();
