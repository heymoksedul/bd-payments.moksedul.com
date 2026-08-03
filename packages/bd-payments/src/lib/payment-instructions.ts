/**
 * Expand an admin-authored payment-instruction template into display lines.
 *
 * Supports `{{amount}}`, `{{number}}` and `{{orderNumber}}` placeholders, then
 * splits on newlines and drops blank lines.
 */
export function renderInstructions(
  template: string,
  vars: { amount: string; number: string; orderNumber?: string },
): string[] {
  return template
    .replace(/\{\{\s*amount\s*\}\}/g, vars.amount)
    .replace(/\{\{\s*number\s*\}\}/g, vars.number)
    .replace(/\{\{\s*orderNumber\s*\}\}/g, vars.orderNumber ?? "your order number")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
}
