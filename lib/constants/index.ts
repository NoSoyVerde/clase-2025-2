export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Tienda Next 2025"
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Este es el proyecto Next de práctica en DAW"
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "https://localhost:3000"

// Valores por defecto para formularios de autenticación (solo para desarrollo)
export const signUpDeafaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
}

export const signInDeafaultValues = {
  email: "",
  password: "",
}