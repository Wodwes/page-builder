export function useBuilderPage() {

    // page state
    const state = useState('BuilderPageState', () => ({
        activeComponent: 'heading',
        activeComponentIndex: 0,
    }));

    // page data
    const page = useState('BuilderPageData', () => ([
        { component: 'heading', level: '1', size: '', style: '', text: 'Hello world 1' },
        { component: 'heading', level: '1', size: '', style: '', text: 'Hello world 2' },
        { component: 'heading', level: '1', size: '', style: '', text: 'Hello world 3' },
        { component: 'heading', level: '1', size: '', style: '', text: 'Hello world 3' },
        { component: 'heading', level: '1', size: '', style: '', text: 'Hello world 3' },
        { component: 'heading', level: '1', size: '', style: '', text: 'Hello world 3' },
        { component: 'heading', level: '1', size: '', style: '', text: 'Hello world 3' },
        { component: 'heading', level: '1', size: '', style: '', text: 'Hello world 3' },
        { component: 'heading', level: '1', size: '', style: '', text: 'Hello world 3' },
        { component: 'heading', level: '1', size: '', style: '', text: 'Hello world 3' },
        { component: 'heading', level: '1', size: '', style: '', text: 'Hello world 3' },
        { component: 'heading', level: '1', size: '', style: '', text: 'Hello world 3' },
        { component: 'heading', level: '1', size: '', style: '', text: 'Hello world 3' },
    ]));

    // add component to page
    const addComponent = (component, props) => {
        state.value.components.push({ component, props });
        console.log(component, props);
    };

    // expose variables and functions
    return { state, page, addComponent };
}
