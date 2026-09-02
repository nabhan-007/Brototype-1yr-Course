const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validateCredentials = (email, password) => {
  const trimmedEmail = (email || "").trim();
  if (!trimmedEmail) return "Email is required";
  if (!isValidEmail(trimmedEmail)) return "Enter a valid email address";
  if (!password || password.trim().length === 0) return "Password is required";
  return null;
};

const validateRegistration = (email, password, name, confirmPassword) => {
  const trimmedName = (name || "").trim();
  if (!trimmedName) return "Name is required";
  if (trimmedName.length < 2) return "Name must be at least 2 characters";
  if (!/[a-zA-Z]/.test(trimmedName)) return "Name must contain at least one letter";

  if (!password || password.trim().length < 8)
    return "Password must be at least 8 characters";
  if (confirmPassword !== password) return "Passwords do not match";

  return validateCredentials(email, password);
};

module.exports = { isValidEmail, validateCredentials, validateRegistration };
