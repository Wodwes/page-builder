export function useBuilderPage() {
    const state = useState('BuilderPageState', () => ({
        components: [],
    }));

    const addComponent = (component, props) => {
        state.value.components.push({ component, props });
        console.log(component, props);

    };

    return { state, addComponent };
}
