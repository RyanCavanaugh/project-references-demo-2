import leftpad from '../utilities/leftpad';
import * as json from '../json-client/client';

export function makeButton() {
    return leftpad(json.fetchJSON('http://example.com'), 14);
}
