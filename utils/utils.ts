export const fa2enDigits = (s: String) => s.replace(/[۰-۹]/g, (w: String) => String.fromCharCode(w.charCodeAt(0) - 1728) );
export const en2faDigits = (s: String) => s.replace(/[0-9]/g, (w: String) => String.fromCharCode(w.charCodeAt(0) + 1728) );
