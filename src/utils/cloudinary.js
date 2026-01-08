export const imgCloudinaryFetch = (url, width = 800) => {
  // Validación de seguridad: si no hay URL, no hacemos nada
  if (!url) return '';

  // Si la imagen es de Unsplash (tus fotos actuales)
  // Le inyectamos los parámetros de optimización automáticamente
  if (url.includes('images.unsplash.com')) {
    // Si ya tiene parámetros, los respetamos, si no, agregamos formato y calidad
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}w=${width}&auto=format&fit=crop&q=80`;
  }

  // Si en el futuro usas Cloudinary real, aquí iría esa lógica.
  // Por ahora, devolvemos la URL original.
  return url;
};