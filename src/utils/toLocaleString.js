import { dateOptions } from '../config';

const toLocaleString = dateISO => new Date(dateISO).toLocaleString('en-US', dateOptions);

export default toLocaleString;
