import * as React from 'react';
import { Layout } from 'antd'
import NavMenu from '../components/shared/NavMenu';
import { Route, Switch } from 'dva/router';
import './Main.less'
import Home from '../components/Content/Home'
import Calendar from '../components/Content/Calendar';
const { Header, Footer, Sider, Content } = Layout;

export interface IMainProps {
    newslist?: Array<{ title: string, content: 'string' }>;
};

class Main extends React.Component<IMainProps> {
    public render(): JSX.Element {
        return (
            <Layout>
                <NavMenu/>
                <Sider width={0}/>
                <Content>
                        <Switch>
                            <Route exact path="/" component={Calendar}/>
                        </Switch>
                </Content>
            </Layout>
        );
    };
}
export default Main