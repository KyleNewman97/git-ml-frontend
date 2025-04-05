import { TableData } from "../../../types/table-data";

export interface ICommit {
  author: string;
  dateTime: string;
  hash: string;
  message: string;
}

export class Commit extends TableData {
  author: string;
  dateTime: Date;
  hash: string;
  message: string;

  constructor(commit: ICommit) {
    super();

    this.author = commit.author;
    this.dateTime = new Date(commit.dateTime);
    this.hash = commit.hash.substring(0, 8);
    this.message = commit.message;
  }

  static override columnNames(): string[] {
    return ["Created", "Message", "Author", "Hash"];
  }

  static override columnWidths(): string[] {
    return ["w-1/6", "w-1/2", "w-1/6", "w-1/6"];
  }

  rowData(): string[] {
    return [
      this.dateTime.toLocaleString(),
      this.message,
      this.author,
      this.hash,
    ];
  }
}
