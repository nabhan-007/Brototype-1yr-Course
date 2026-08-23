const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validateCredentials = (email, password) => {
  const trimmedEmail = (email || "").trim();
  if (!trimmedEmail) return "Email is required";
  if (!isValidEmail(trimmedEmail)) return "Enter a valid email address";
  if (!password || password.trim().length === 0) return "Password is required";
  return null;
};

module.exports = { isValidEmail, validateCredentials };
