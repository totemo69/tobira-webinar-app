/* istanbul ignore file */
import { add, divide, multiply, subtract, round } from 'lodash';

export function calculateTax(n1, isTaxable = false) {
  // Temp implementation
  const taxRate = 10.21;
  const taxPercentage = divide(taxRate, 100);
  if (isTaxable === 'true') {
    return round(multiply(n1, taxPercentage), 2);
  }
  return 0;
}

export function calculateTotal(n1, n2) {
  return round(add(n1, n2), 2);
}

export function calculateRemainingBalance(n1, n2) {
  return round(subtract(parseInt(n1, 10), n2), 2);
}
