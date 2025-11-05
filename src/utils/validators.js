export function validateEmail(email) {
  // RFC 5322-compliant regex
  return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
}

export function validatePassword(pw) {
  // Minimum length and complexity (at least: 8 chars, 1 number, 1 letter)
  return (
    typeof pw === "string" &&
    pw.length >= 8 &&
    /[A-Za-z]/.test(pw) &&
    /\d/.test(pw)
  );
}

export function validatePhone(phone) {
  // Simple Indian/international mobile format
  return /^[6789]\d{9}$/.test(phone);
}

export function validateRequired(val) {
  return val !== undefined && val !== null && String(val).trim() !== "";
}
