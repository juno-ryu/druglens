const WEB_APP_URL = 'WEB_APP_URL';
const WEB_APP_TEMPLATE = 'carpen';

const doGet = (e) => {
  const spreadsheetId = e.parameter.id;
  PropertiesService.getScriptProperties().setProperty('spreadsheetId', spreadsheetId);
  return HtmlService.createHtmlOutputFromFile(WEB_APP_TEMPLATE).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
};

const removeWhitespace = (str) => {
  return str.replace(/[\x00-\x1F\s]+/g, ' ').trim();
};

const translateCell = (value, sourceLang, row, languageIndexes) => {
  let translatedValue = value;

  for (const [targetLang, langIndex] of Object.entries(languageIndexes)) {
    if (row[langIndex] !== '::REQUIRED::') {
      translatedValue = LanguageApp.translate(row[langIndex], sourceLang, targetLang);
      break;
    }
  }

  return translatedValue;
};

const transformCell = (value, lang, row, languageIndexes) => {
  if (value === '::EMPTY::') return '';

  for (const language of Object.keys(languageIndexes)) {
    if (value === `::EQUAL_${language}::` && languageIndexes[language]) {
      return row[languageIndexes[language]];
    }
  }

  return value === '::REQUIRED::' ? translateCell(value, lang, row, languageIndexes) : value;
};

const getSuper = () => {
  const superId = PropertiesService.getScriptProperties().getProperty('spreadsheetId');
  const superInstance = SpreadsheetApp.openById(superId);
  return superInstance;
};

const getSheetTitle = () => {
  const superInstance = getSuper();
  return superInstance.getName();
};

const getSheetNames = () => {
  const superInstance = getSuper();
  const [guide, ...sheets] = superInstance.getSheets();
  return sheets.map((sheet) => sheet.getName()).filter(Boolean);
};

const getSingleSheetData = (name) => {
  const superInstance = getSuper();
  const sheet = superInstance.getSheetByName(name);
  if (!sheet) throw new Error(`${name} sheet not found`);

  const [header, ...rows] = sheet.getDataRange().getValues();
  const [key, ...languages] = header;

  const languageIndexes = languages.reduce((acc, lang, index) => {
    acc[lang] = index + 1;
    return acc;
  }, {});

  const data = rows.map((row) => {
    const [key, ...values] = row;
    return languages.reduce(
      (acc, lang, idx) => {
        acc[lang] = transformCell(values[idx], lang, row, languageIndexes);
        return acc;
      },
      { key },
    );
  });

  return { name, languages, data };
};

const getAllSheetData = () => {
  return getSheetNames().map((name) => getSingleSheetData(name));
};
