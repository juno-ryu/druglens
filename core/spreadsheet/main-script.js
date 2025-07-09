const WEB_APP_URL = 'WEB_APP_URL';
const WEB_APP_TEMPLATE = 'main';

const showModal = () => {
  const id = SpreadsheetApp.getActiveSpreadsheet().getId();
  const template = HtmlService.createTemplateFromFile(WEB_APP_TEMPLATE);
  template.embedSrc = `${WEB_APP_URL}?id=${id}`;

  const html = template.evaluate();
  html.setWidth(1000);
  html.setHeight(1000);

  SpreadsheetApp.getUi().showModalDialog(html.setSandboxMode(HtmlService.SandboxMode.IFRAME), 'i18n');
};

const onOpen = () => {
  SpreadsheetApp.getUi().createMenu('Custom Menu').addItem('Open Modal', 'showModal').addToUi();
};
