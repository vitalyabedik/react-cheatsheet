import CardItem from '../../components/Cards/CardItem'; // import { componentClass } from '../../data/code/component/componentClass';
import { componentClass } from '../../data';

const ClassComponent = () => {
    return (
        <>
            <CardItem
                title={'Базовая запись классовой компоненты'}
                code={componentClass}
            />
        </>
    );
};

export default ClassComponent;
