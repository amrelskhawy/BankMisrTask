export default interface SymbolInterface {
  motd:    MOTD;
  success: boolean;
  symbols: { [key: string]: Symbol };
}

export interface MOTD {
  msg: string;
  url: string;
}

export interface Symbol {
  description: string;
  code:        string;
}
