
export default function pad(s: string, minLength: number): string | undefined {
    if (s.length >= minLength) return s;
    return " " + pad(s, minLength - 1);
}
