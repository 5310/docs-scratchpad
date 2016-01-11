function onInstall(e) {
  onOpen(e);
}

function onOpen(e) {
  var auto = PropertiesService.getDocumentProperties().getProperty('auto');
  DocumentApp.getUi().createAddonMenu()
      .addItem('Open', 'showSidebar')
      .addItem(auto == 'true' ? 'Don\'t open automatically' : 'Open automatically', 'toggleAutoShow')
      .addToUi();
  if (auto == 'true') showSidebar();
}

function showSidebar() {
  var ui = HtmlService.createHtmlOutputFromFile('Sidebar')
      .setTitle('Scratchpad')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  DocumentApp.getUi().showSidebar(ui);
}

function toggleAutoShow() {
  var documentProperties = PropertiesService.getDocumentProperties();
  var auto = documentProperties.getProperty('auto');
  documentProperties.setProperty('auto', !auto+'');
  if (auto != 'true') showSidebar();
}

function getContent() {
  var documentProperties = PropertiesService.getDocumentProperties();
  var content = documentProperties.getProperty('content');
  return content;
}
function setContent(content) {
  var documentProperties = PropertiesService.getDocumentProperties();
  documentProperties.setProperty('content', content);
}