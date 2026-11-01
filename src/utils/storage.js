const KEYS = {
  users: "twiggy_users",
  currentUser: "twiggy_current_user",
  foods: "twiggy_foods",
  orders: "twiggy_orders",
  donations: "twiggy_donations"
};

export function read(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export { KEYS };