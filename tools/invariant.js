export default function invariant(condition, message, ...run) {
    if (!condition) {
        run.map(o=>o())
        throw new Error(`Invariant failed: ${message}`);
    }
}
