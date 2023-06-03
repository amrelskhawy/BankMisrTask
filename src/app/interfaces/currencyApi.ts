export default interface Currency {
  success:   boolean;
  timestamp: number;
  base:      string;
  date:      Date | string;
  rates:     { [key: string]: number };
}
