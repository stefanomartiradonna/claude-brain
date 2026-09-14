const SHEET_ID = '1dO1fiHyKYrRn1tk_n8hyCPW3zt0rGkVUNozc4tuqCBU';
const TAB = 'inbox_raw';
const MAX_CELL = 45000;

const FONTI = [
  { fonte: 'f6s', query: 'from:f6s.com newer_than:10d' },
  { fonte: 'TWIS', query: 'from:dealflowit@substack.com subject:TWIS newer_than:10d' }
];

function raccogliEmail() {
  const sheet = getTab_();
  const giaVisti = new Set(
    sheet.getRange(2, 1, Math.max(sheet.getLastRow() - 1, 1), 1).getValues().flat()
  );

  let nuove = 0;
  FONTI.forEach(({ fonte, query }) => {
    GmailApp.search(query, 0, 20).forEach(thread => {
      thread.getMessages().forEach(msg => {
        const id = msg.getId();
        if (giaVisti.has(id)) return;
        sheet.appendRow([
          id,
          fonte,
          msg.getDate(),
          msg.getFrom(),
          msg.getSubject(),
          msg.getPlainBody().slice(0, MAX_CELL)
        ]);
        giaVisti.add(id);
        nuove++;
      });
    });
  });

  console.log(`${nuove} email aggiunte a ${TAB}`);
}

function getTab_() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(TAB);
  if (!sheet) {
    sheet = ss.insertSheet(TAB);
    sheet.appendRow(['message_id', 'fonte', 'data', 'mittente', 'oggetto', 'corpo']);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function creaTrigger() {
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'raccogliEmail')
    .forEach(t => ScriptApp.deleteTrigger(t));

  ScriptApp.newTrigger('raccogliEmail')
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.MONDAY)
    .atHour(6)
    .create();
}
