export default interface SymbolInterface {
  motd:    MOTD;
  success: boolean;
  symbols: { [key: string]: {
      description: string;
      code:        string;
    }};
}

export interface MOTD {
  msg: string;
  url: string;
}
