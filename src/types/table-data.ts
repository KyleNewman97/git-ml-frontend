export abstract class TableData {
  static columnNames(): string[] {
    return [];
  }

  static columnWidths(): string[] {
    return [];
  }

  abstract rowData(): string[];
}
