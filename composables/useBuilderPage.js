export function useBuilderPage() {
    const toast = useToast()

    // page state
    const state = useState('BuilderPageState', () => ({
        activeComponent: null,
        activeComponentIndex: null,
    }));

    // page data
    const page = useState('BuilderPageData', () => ([
        { component: "paragraph", size: "", style: "", text: "Enter paragraph text" }
    ]));

    // add component to page
    const addComponent = (component) => {
        let CurrComponent = null

        if (component === 'heading') {
            CurrComponent = { component: 'heading', level: '1', size: '', style: '', text: 'Enter heading text' }
        } else if (component === 'paragraph') {
            CurrComponent = { component: 'paragraph', size: '', style: '', text: 'Enter paragraph text' }
        }

        if (!CurrComponent) return

        page.value.push(CurrComponent);

        toast.add({ description: `${CurrComponent.component.charAt(0).toUpperCase() + CurrComponent.component.slice(1)} has been added to the page`, icon: 'i-lucide:check' })

        CurrComponent = null
    };

    // expose variables and functions
    return { state, page, addComponent };
}
