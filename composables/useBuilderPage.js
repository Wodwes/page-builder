export function useBuilderPage() {
    const toast = useToast()

    // page state
    const state = useState('BuilderPageState', () => ({
        activeComponent: null,
        activeComponentIndex: null,
    }));

    // page data
    const page = useState('BuilderPageData', () => ([]));

    // add component to page
    const addComponent = (component) => {

        let CurrComponent = null
        if (component === 'heading') {
            CurrComponent = { component: 'heading', level: '1', size: '', style: '', text: 'Enter heading text' }
        }

        page.value.push(CurrComponent);
        toast.add({
            description: `${CurrComponent.component.charAt(0).toUpperCase() + CurrComponent.component.slice(1)} has been added to the page`,
            icon: 'i-lucide:check'
        })
    };

    // expose variables and functions
    return { state, page, addComponent };
}
