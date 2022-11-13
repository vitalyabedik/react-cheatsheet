import { Typography, Image } from 'antd';

import courseProgram from '../../assets/images/courseProgram.png';

const { Title } = Typography;

const Home = () => {
    return (
        <>
            <Title level={2}>Программа курса Redev</Title>
            <Image src={courseProgram} />
        </>
    );
};

export default Home;
