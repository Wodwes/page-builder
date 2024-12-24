import { useStorage } from '@vueuse/core';

export function useApp() {
  const state = useState('useApp', () => ({
    showSidebar: useStorage('persisted-sidebar', true)
  }));

  return { state };
}
