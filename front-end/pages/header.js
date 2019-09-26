import { Link, Router } from '../routes'
import {
    Layout, Menu, Item, Breadcrumb, Dropdown, Button,
    Card, Row, Col
} from 'antd'
// import css from './css/index'

const MenuItem = Menu.Item;
const { Header, Content, Footer } = Layout;
const preProcMenu = (
    <Menu>
        <Menu.Item>
            <Link route='preproc' params={{ path: 'labsel' }}>
                Label
        </Link>
        </Menu.Item>
        <Menu.Item>
            <Link route='preproc' params={{ path: 'one-hot' }}>
                One-hot Encoding
        </Link>
        </Menu.Item>
        <Menu.Item>
            <Link route='preproc' params={{ path: 'delete-rc' }}>
                Delete Row/Column
        </Link>
        </Menu.Item>
        <Menu.Item>
            <Link route='preproc' params={{ path: 'replaceW' }}>
                Replace W
        </Link>
        </Menu.Item>
        <Menu.Item>
            <Link route='preproc' params={{ path: 'certain' }}>
                Select Certain
        </Link>
        </Menu.Item>
    </Menu>
);

const algoMenu = (
    <Menu>
        <Menu.Item>
            <Link route='mlalgo' params={{ path: 'nba' }}>
                Naive Bayes algorithm
        </Link>
        </Menu.Item>
        <Menu.Item>
            <Link route='mlalgo' params={{ path: 'lra' }}>
                Logistic Regression algorithm
        </Link>
        </Menu.Item>
        <Menu.Item>
            <Link route='mlalgo' params={{ path: 'svm' }}>
                Support Vector Machine
        </Link>
        </Menu.Item>
        <Menu.Item>
            <Link route='mlalgo' params={{ path: 'bag' }}>
                Bagging algorithm
        </Link>
        </Menu.Item>
        <Menu.Item>
            <Link route='mlalgo' params={{ path: 'clus' }}>
                Clustering algorith
        </Link>
        </Menu.Item>
    </Menu>
);

const Head = () => (
    <div>
        <Layout className="layout">
            <Header>
                <Dropdown overlay={preProcMenu} placement="topLeft" theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}>
                    <Button>Pre Processing</Button>
                </Dropdown>
                <Dropdown overlay={algoMenu} placement="topLeft" theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']} id="dropdown"
                    style={{ lineHeight: '64px' }}>
                    <Button>Algorithms</Button>
                </Dropdown>
            </Header>
        </Layout>
    </div>

)
export default Head;
