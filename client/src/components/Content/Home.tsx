import * as React from "react";
import * as PropTypes from "prop-types";
import ReactUWP from 'react-uwp'
import { Layout } from 'antd'
import Button from "react-uwp/Button";
import * as util from '../../util';

const { Header, Footer, Sider, Content } = Layout;

import { connect } from 'dva'

export interface IHomeProps {
    dispatch: any,
    learnerProfile: object,
}
/**
 *主页面
 *
 * @class Home
 * @extends {React.Component<IHomeProps>}
 */
class Home extends React.Component<IHomeProps> {
    public static contextTypes = { theme: PropTypes.object };
    public context: { theme: ReactUWP.ThemeType };

    public test(): any {
        console.log(util.userAgentApplication)
    }
    public render():JSX.Element {
        const { theme } = this.context;
        const { learnerProfile } = this.props;
        return (
            <Layout>
                <Content>
                    <Button onClick={this.test()}>Yes!</Button>
                </Content>
            </Layout>
        );
    }
}

function mapStateToProps({main, learnerProfile}) {
    return { main, learnerProfile }
}

export default connect(mapStateToProps)(Home)