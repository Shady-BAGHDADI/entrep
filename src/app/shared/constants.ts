export class SharedConstants {
  //Link change when i choose advanced or simple search form in form
  public static labelExtension = 'Recherche avancée';
  public static extended_labelExtension = 'Recherche simplifiée';
  public static noExtended_labelExtension = 'Recherche avancée';
  public static tooltipMsg =
    'Les prospects « hors champ » sont considérés comme hors périmètre de prospection pour diverses raisons : trop risqués, n’ayant pas le bon niveau de CA, hors marché, hors périmètre géographique, en cessation d’activité, en redressement ou en liquidation ...etc';
  public static DefaultProspectValue = {
    name: 'Tous les prospects',
    value: '',
  };

  public static DefaultnumeroportefeuilleValue: 'Mon portefeuille';

  // Name of my Project
  public static clientProspectsTitle = 'CRM Entreprises';

  // Description text when i switch between Tab
  public static tabDescription =
    'Recherche, sélection et modification de situations (stratégie et hors champs) des clients/prospects.';

  public static tabDescription2 =
    'Importez vos fichiers afin de modifier la statégie commeciale et le motif hors champs à appliquer à vos clients et prospects.';

  //checkbox using in model when i need to change header of table
  public static all = [
    { id: 'typeclient', name: 'C/P', checked: false, canBeSort: true },
    { id: 'codemarche', name: 'Marché', checked: false },
    { id: 'eds', name: 'EDS', checked: false, isExtended: true },
    {
      id: 'numeroportefeuille',
      name: 'Portefeuille',
      checked: false,
    },

    {
      id: 'siren',
      name: ' SIREN',
      checked: false,
      canBeSort: true,
    },
    {
      id: 'raisonsociale',
      name: 'Raison sociale',
      checked: false,
      canBeSort: true,
    },
    {
      id: 'chiffreaffaire',
      name: "Chiffre d'affaires (K€)",
      checked: false,
      canBeSort: true,
    },

    {
      id: 'representantlegal',
      name: 'Représentant légal',
      checked: false,
      canBeSort: true,
    },

    {
      id: 'strategierelationnelle',
      name: 'Stratégie relationelle',
      checked: false,
      canBeSort: true,
    },
    {
      id: 'groupecommercial',
      name: 'Groupe commercial',
      checked: false,
      canBeSort: true,
    },

    { id: 'leadergroupecommercial', name: 'Leader', checked: false },

    {
      id: 'libellegrouperisque',
      name: 'Groupe de risque',
      checked: false,
      canBeSort: true,
      parentId: 'eds',
    },
    //date dernier entretient
    {
      id: 'derniercri',
      name: 'Date dernier entretien',
      checked: false,
      canBeSort: true,
    },
    { id: 'quotationbdf', name: 'BDF', checked: false, canBeSort: true },
    {
      id: 'datequotationbdf',
      name: 'Date BDF',
      checked: false,
      canBeSort: true,
    },
    {
      id: 'principalinterlocuteur',
      name: 'Interlocuteur principal',
      checked: false,
      canBeSort: true,
    },
    {
      id: 'tophorschamp',
      name: 'Hors Champ / motif',
      checked: false,
      canBeSort: true,
    },
    { id: 'notationrisque', name: 'NOR', checked: false, canBeSort: true },

    {
      id: 'datenotationrisque',
      name: 'Date NOR',
      checked: false,
      canBeSort: true,
    },
    { id: 'nafinterne', name: 'NAF interne', checked: false, canBeSort: true },

    {
      id: 'adressesiegesociale',
      name: 'Adresse complète',
      checked: false,
    },

    { id: 'commune', name: 'Commune', checked: false, canBeSort: true },

    {
      id: 'nombresalarie',
      name: 'Nombre de salariés',
      checked: false,
      canBeSort: true,
      parentId: 'eds',
    },
    {
      id: 'daterevisionkyc',
      name: 'Date de prochaine révision KYC',
      checked: false,
      canBeSort: true,
    },
    {
      id: 'codepostal',
      name: 'Code Postal',
      checked: false,
      canBeSort: true,
      parentId: 'eds',
    },
    /*
    {
      id: 'representantlegalnom',
      name: 'Representant Legal Nom',
      checked: false,
    },
    {
      id: 'representantlegalprenom',
      name: 'Representant Legal Prenom',
      checked: false,
    },
    {
      id: 'representantlegalfonction',
      name: 'Representant Legal Fonction',
      checked: false,
    },
    {
      id: 'representantlegalclientprospect',
      name: 'Representant Legal Client Prospect',
      checked: false,
    },

    {
      id: 'datemajstrategiecommercial',
      name: 'Date Maj Strategie Commercial',
      checked: false,
    },

    {
      id: 'principalinterlocuteurnom',
      name: 'Interlocuteur principal Nom',
      checked: false,
    },
    {
      id: 'principalinterlocuteurprenom',
      name: 'Interlocuteur principal Prenom',
      checked: false,
    },
    {
      id: 'principalinterlocuteurfonction',
      name: 'Interlocuteur principal Fonction',
      checked: false,
    },
    {
      id: 'principalinterlocuteurtelephone',
      name: 'Interlocuteur principal Telephone',
      checked: false,
    },
    {
      id: 'principalinterlocuteuremail',
      name: 'Interlocuteur principal Email',
      checked: false,
    },

    { id: 'naf2', name: 'NAF 2', checked: false, canBeSort: true },

    { id: 'agencegestionaire', name: 'Agence Gestionaire', checked: false },
    { id: 'numeroportefeuille', name: 'Numéro Portefeuille', checked: false },
    {
      id: 'prenomagentgestionnaireportefeuille',
      name: 'Prenom Agent Gestionnaire Portefeuille',
      checked: false,
    },
    {
      id: 'nomagentgestionnaireportefeuille',
      name: 'Nom Agent Gestionnaire Portefeuille',
      checked: false,
    },
    { id: 'formejuridique', name: 'Forme Juridique', checked: false },

    { id: 'integremasse', name: 'Integre Masse', checked: false },
    { id: 'ancienclient', name: 'Ancien Client', checked: false },
    {
      id: 'motifhorschamp',
      name: 'Motif Hors Champ',
      checked: false,
      canBeSort: true,
    },
    { id: 'datemajhorschamp', name: 'Date Maj Hors Champ', checked: false },
    { id: 'datebilan', name: 'Date Bilan', checked: false },

    { id: 'codepostal', name: 'Code Postal', checked: false, canBeSort: true },

    { id: 'pays', name: 'Pays', checked: false },

    { id: 'marcheintitule', name: 'Marche Intitule', checked: false },

    {
      id: 'fonctionagentgestionnaireportefeuille',
      name: 'Fonction Agent Gestionnaire Portefeuille',
      checked: false,
    },


*/
  ];

  //initilisation for table headers
  /*public static initHeaders = [
    { id: 'typeclient', name: 'C/P', checked: true },
    { id: 'codemarche', name: 'Marché', checked: true },
    { id: 'eds', name: 'EDS', checked: true, isExtended: true },
    {
      id: 'numeroportefeuille',
      name: 'Portefeuille',
      checked: true,
    },

    { id: 'siren', name: ' SIREN', checked: true },
    {
      id: 'raisonsociale',
      name: 'Raison Social',
      checked: true,
    },
    { id: 'chiffreaffaire', name: 'CA (K€)', checked: true },

    {
      id: 'representantlegal',
      name: 'Représentant légal',
      checked: true,
      canBeSort: true,
    },
  ];*/
  public static initHeadersSynthetique = [
    {
      id: 'groupecommercial',
      name: 'Relation commerciale',
      checked: true,
      canBeSort: true,
    },
    { id: 'siren', name: ' SIREN', checked: true },
    { id: 'notationrisque', name: 'NOR', checked: true, canBeSort: true },
    { id: 'montantpnb', name: 'PNB (k€)', checked: true, canBeSort: true },
    { id: 'encours', name: 'Encours (k€)', checked: true, canBeSort: true },
    { id: 'caconfie', name: 'CA Confié (k€)', checked: true, canBeSort: true },
    { id: 'collecte', name: 'Collecte (k€)', checked: true, canBeSort: true },
    {
      id: 'representantlegal',
      name: 'Représentant légal',
      checked: false,
      canBeSort: true,
    },
    {
      id: 'strategierelationnelle',
      name: 'Stratégie relationelle',
      checked: false,
      canBeSort: true,
    },
    {
      id: 'derniercri',
      name: 'Date dernier entretien',
      checked: false,
      canBeSort: true,
    },
    {
      id: 'libellegrouperisque',
      name: 'Groupe de risque',
      checked: false,
      canBeSort: true,
    },
    { id: 'chiffreaffaire', name: 'CA (K€)', checked: false },
    { id: 'dernierbilan', name: 'Date dernier bilan', checked: false },
    { id: 'principalisation', name: 'Principalisation', checked: false },
    { id: 'fiche', name: 'Fiche', checked: true },
    { id: 'outils', name: 'Outils', checked: true },
  ];
  public static initHeadersIdentite = [
    {
      id: 'groupecommercial',
      name: 'Relation commerciale',
      checked: true,
      canBeSort: true,
    },
    { id: 'typeclient', name: 'C/P', checked: true, canBeSort: true },
    {
      id: 'libellegrouperisque',
      name: 'Groupe de risque',
      checked: true,
      canBeSort: true,
      parentId: 'eds',
    },
    {
      id: 'representantlegal',
      name: 'Représentant légal',
      checked: true,
      canBeSort: true,
    },
    {
      id: 'principalinterlocuteur',
      name: 'Interlocuteur principal',
      checked: true,
      canBeSort: true,
    },
    { id: 'equipecommercial', name: ' Equipe commerciale', checked: true },
    {
      id: 'adressesiegesociale',
      name: 'Adresse complète',
      checked: true,
    },

    { id: 'siren', name: ' SIREN', checked: false },
    {
      id: 'numeroportefeuille',
      name: 'Portefeuille',
      checked: false,
    },
    { id: 'codemarche', name: 'Marché', checked: false },
    { id: 'eds', name: 'EDS', checked: false },
  ];
  //initilisation fo table data , i use that with behaviour subject but it make a problem (two call server)
  // public static initDataTable = {
  //   success: true,
  //   totalCount: 0,
  //   pageCount: 0,
  //   currentPage: 0,
  //   data: [
  //     {
  //       columns: [{ name: '', value: '' }],
  //     },
  //   ],
  // };

  // i need to that to use modification of columns when the pop up open
  public static popupHeadersText = 'Sélection des colonnes à afficher';

  public static popupNotif =
    'Sélection 7 colonnes (affichage 8 maximum, 24 disponibles)';

  // i need that to display the popup when i change strategies or horsChamp when i select
  //at least one checkbox in the table
  public static popup_Headers_Text = 'Modification multiple';

  //UI label :
  public static UILabel = {
    typeclientprospect: 'Type de clients/prospects',
    reinitialiser: 'Réinitialiser',
    displySearchFormTable: {
      nodatafound: 'Aucune donnée disponible dans le tableau',
      nestedSelct: {
        horschamp: 'Hors champ',
        strategie: 'Stratégie',
        labelNestedSelect: 'Effectuer une modification',
      },
      strategiesList: [
        'Conquérent',
        'Offensif',
        'Défensif',
        'Maintien',
        'Risque',
        'Sans',
        'Inconnue',
      ],
      strategies: ['Hors champ', 'Stratégie'],
    },
    displySearchFormResult: {
      plier: 'Plier',
      deplier: 'Déplier',
      votrerecherche: 'Votre recherche',
    },
    ModificationMotifHorsChamp: {
      headerPopupMsg: 'Modifier le positionnement Hors Champ',
      question: 'Le prospect est-il Hors Champ (HC) ?',
      whyIsOk: 'Si oui, pourquoi ?',
    },
  };

  // text for popup error puc
  public static popupPucTitle = "Une erreur s'est produite";
  public static popupPucDescripion =
    "Vous pouvez déclarer un incident en contactant le service support. Merci d'y reporter les informations ci-dessous.";
  public static popupPucAffectation = "Groupe d'affectation de l'incident";
  public static popupPucDate = 'Date';
  public static popupPucError = 'Code erreur';
  public static popupPucCorrelation = 'Identifiant de corrélation';
  public static popupPucClose = 'Fermer';
}
