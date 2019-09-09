export function redirect(path) {
    return { type: 'REDIRECT', payload: path }
}
