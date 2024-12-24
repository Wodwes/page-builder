export function useApp() {
  const state = useState('AppState', () => ({
    showSidebar: true
  }));

  return { state };
}
