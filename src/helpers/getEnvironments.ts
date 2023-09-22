export const getEnvironments = () => {
  return {
    ...import.meta.env,
    VITE_BASE_URL: import.meta.env.VITE_BASE_URL,
  };
};
