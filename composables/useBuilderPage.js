export function useBuilderPage() {
  const toast = useToast();

  // page state
  const state = useState('BuilderPageState', () => ({
    activeComponent: null,
    activeComponentIndex: null,
  }));

  // page data
  const page = useState('BuilderPageData', () => []);

  // add component to page
  const addComponent = (component) => {
    let CurrComponent = null;

    if (component === 'heading') {
      CurrComponent = { component: 'heading', level: 1, size: 'text-2xl', weight: 'font-semibold', style: 'font-style-none', text: 'Enter heading text', alignment: 'text-left' };
    } else if (component === 'paragraph') {
      CurrComponent = { component: 'paragraph', size: '', style: '', weight: 'font-normal', text: 'Enter paragraph text', alignment: 'text-left' };
    } else if (component === 'button') {
      CurrComponent = { component: 'button', size: 'text-4xl ', style: '', display: '', alignment: 'text-left', text: 'Click me' };
    }

    if (!CurrComponent) return;

    page.value.push(CurrComponent);

    toast.add({ description: `${CurrComponent.component.charAt(0).toUpperCase() + CurrComponent.component.slice(1)} has been added to the page`, icon: 'i-lucide:check' });

    CurrComponent = null;
  };

  // expose variables and functions
  return { state, page, addComponent };
}
