/** @OnlyCurrentDoc */

function myFunction() {
  var spreadsheet = SpreadsheetApp.getActive();
  var adminPanel = spreadsheet.getSheetByName('Панель управления');
  var currentList = spreadsheet.getSheetByName('данные');
  var archive = spreadsheet.getSheetByName('архив');
  var dynamic = spreadsheet.getSheetByName('для динамики');

  adminPanel.getRange("E29").setValue('');
  archive.insertRowsAfter(1, 1);
  currentList.insertRowsAfter(1, 1);
  adminPanel.getRange('D27:F27').copyTo(archive.getRange('A2:C2'), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
  adminPanel.getRange('D27:F27').copyTo(currentList.getRange('A2:C2'), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);

  // добавление в динамику
  dynamic.getRange('E5:G5').insertCells(SpreadsheetApp.Dimension.ROWS);
  adminPanel.getRange('D27:F27').copyTo(dynamic.getRange('E5:G5'), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);

  adminPanel.getRange('D27:F27').clear({contentsOnly: true, skipFilteredRows: true});
  adminPanel.getRange("E29").setValue('👍');
};

function ArchiveOnly() {
  var spreadsheet = SpreadsheetApp.getActive();
  var adminPanel = spreadsheet.getSheetByName('Панель управления');
  var archive = spreadsheet.getSheetByName('архив');

  adminPanel.getRange("E37").setValue('');
  archive.insertRowsAfter(1, 1);
  adminPanel.getRange('D35:F35').copyTo(archive.getRange('A2:C2'), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
  adminPanel.getRange('D35:F35').clear({contentsOnly: true, skipFilteredRows: true});
  adminPanel.getRange("E37").setValue('👍');
};

function currentOnly() {
  var spreadsheet = SpreadsheetApp.getActive();
  var adminPanel = spreadsheet.getSheetByName('Панель управления');
  var currentList = spreadsheet.getSheetByName('данные');
  var dynamic = spreadsheet.getSheetByName('для динамики');

  adminPanel.getRange('E45').setValue('');
  currentList.insertRowsAfter(1, 1);
  adminPanel.getRange('D43:F43').copyTo(currentList.getRange('A2:C2'), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);

  // добавление в динамику
  dynamic.getRange('E5:G5').insertCells(SpreadsheetApp.Dimension.ROWS);
  adminPanel.getRange('D43:F43').copyTo(dynamic.getRange('E5:G5'), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);

  adminPanel.getRange('D43:F43').clear({contentsOnly: true, skipFilteredRows: true});

  adminPanel.getRange('E45').setValue('👍');
};

function clearing() {
  var ss = SpreadsheetApp.getActive();
  var currentList = ss.getSheetByName('данные');
  var adminPanel = ss.getSheetByName('Панель управления');

  let selectedCat = adminPanel.getRange("D53").getValue();
  let currentData = currentList.getRange("A:C").getValues();

  var newData = [];

  for (var i = 0; i < currentData.length; i++) {
    if (currentData[i][0] === selectedCat) {
      newData.push(currentData[i]);
    }
  }

  currentList.getRange("A1:C" + currentList.getLastRow()).clear();

  if (newData.length > 0) {
    var newCurrentList = currentList.getRange(1, 1, newData.length, newData[0].length);
    newCurrentList.setValues(newData);
  }

  adminPanel.getRange('D53').setValue('');
};

function sort() {
  var ss = SpreadsheetApp.getActive();
  var currentStat = ss.getSheetByName('Текущая статистика');
  var allStat = ss.getSheetByName('Общая статистика');

  currentStat.getRange("D5:F31").sort({column: 5, ascending: false});
  allStat.getRange("D5:F31").sort({column: 5, ascending: false});
};
