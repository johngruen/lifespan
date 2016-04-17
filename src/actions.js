export function genericAction(param) {
  return { type: 'GENERIC', param };
}

export function handleDateSubmit() {
  console.log('date');
  return { type: 'DATE_SUBMITTED' };
}

export function validateNumericInput(param) {
  return { type: 'HANDLE_DATE_VALIDATION', param };
}

export function test() {
  return { type: 'TEST' };
}
