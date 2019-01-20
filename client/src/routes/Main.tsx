import * as React from 'react';
import { Layout } from 'antd'
import NavMenu from '../components/shared/NavMenu';
import { Route, Switch } from 'dva/router';
import './Main.less'
import Home from '../components/Content/Home'
import Calendar from '../components/Content/Calendar';
import ReservationCalendarMenu from '../components/Menu/ReservationCalendarMenu'
import NoticeMD from '../components/Content/NoticeMD';
const { Header, Footer, Sider, Content } = Layout;

export interface IMainProps {
    newslist?: Array<{ title: string, content: 'string' }>;
};

export interface IMainState {
    siderExpanded: boolean
}

class Main extends React.Component<IMainProps> {
    public state: IMainState = {
        siderExpanded: false
    }
    public render(): JSX.Element {
        return (
            <Layout>
                <NavMenu 
                    expandSider = {() => this.setState({siderExpanded: !this.state.siderExpanded})}
                />
                <Sider width={this.state.siderExpanded? 240: 0 } className={"global-sider"}>
                    <Switch>
                        <Route exact path="/" component={ReservationCalendarMenu} />
                    </Switch>
                </Sider>
                <Content>
                        <Switch>
                            <Route path="/notice" component={NoticeMD} />
                            <Route exact path="/" component={Calendar}/>
                        </Switch>
                </Content>
            </Layout>
        );
    };
}
export default Main