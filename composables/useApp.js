export function useApp() {
  const state = useState('useApp', () => ({
    fullScreenLoader: true,
  }));

  return { state };
}
