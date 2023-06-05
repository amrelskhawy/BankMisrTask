export default interface Historical {
  motd:       MOTD;
  success:    boolean;
  timeseries: boolean;
  base:       string;
  start_date: Date;
  end_date:   Date;
  rates:      { [key: string]: Rate };
}

export interface MOTD {
  msg: string;
  url: string;
}

export interface Rate {
  EGP: number;
}
