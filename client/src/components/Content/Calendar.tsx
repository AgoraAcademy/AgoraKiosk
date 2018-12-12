import * as React from "react";
import * as PropTypes from "prop-types";
import ReactUWP from 'react-uwp'
import { Layout } from 'antd'
import Button from "react-uwp/Button";


const { Header, Footer, Sider, Content } = Layout;

import { connect } from 'dva'

export interface IHomeProps {
    dispatch: any,
    main: any
}


class Calendar extends React.Component<IHomeProps> {
    public static contextTypes = { theme: PropTypes.object };
    public context: { theme: ReactUWP.ThemeType };


    public render():JSX.Element {
        const { theme } = this.context;
        const { calendarDisplayed } = this.props.main

        let src
        switch (calendarDisplayed) {
            case "admin":
                src = "https://outlook.office365.com/owa/calendar/4df7c267053b42f29f1199a211a85038@agoraacademy.onmicrosoft.com/3cfb80fe48284348887c22bc11706d8d5532634878826545195/calendar.html"
                break;
            case "library":
                src = "https://outlook.office365.com/owa/calendar/fb05973f3618480c972b91860270aa1a@agoraacademy.onmicrosoft.com/4c03f8d7c3b249fa8c24e175f8a52a612343157416127063085/calendar.html"
                break;
            case "16f_lobby":
                src = "https://outlook.office365.com/owa/calendar/01947c366a7b413cbd75ff60d8f980ba@agoraacademy.onmicrosoft.com/cf5e7ea7a114447ba090572142398c6013980768712305112614/calendar.html"
                break;
            case "16f_small":
                src = "https://outlook.office365.com/owa/calendar/9e7c9f3343d444149199b9b971563f68@agoraacademy.onmicrosoft.com/ee0c8bff2fc9447b82de71c131689cfd11258428203476571674/calendar.html"
                break;
            case "16f_large":
                src = "https://outlook.office365.com/owa/calendar/e11050b5c2d74a22a73d984cc636e2ce@agoraacademy.onmicrosoft.com/01d315fab02f47899c648816fc84ed975412301919790765403/calendar.html"
                break;
            case "16f_operation_desk":
                src = "https://outlook.office365.com/owa/calendar/fc219742c00f49b99d12ad6f776103cc@agoraacademy.onmicrosoft.com/3762f6f8b8184b01b1bb13d6c733bf0e8750324752684042135/calendar.html"
                break;
            case "16g_public_computer":
                src = "https://outlook.office365.com/owa/calendar/bf586aa6c1ab48268723c47003fc49f6@agoraacademy.onmicrosoft.com/ccfa46bfea9e42228bac16c53e9991897377298165676631238/calendar.html"
                break;  
            default:
                // admin
                src = "https://outlook.office365.com/owa/calendar/4df7c267053b42f29f1199a211a85038@agoraacademy.onmicrosoft.com/3cfb80fe48284348887c22bc11706d8d5532634878826545195/calendar.html"
                break;
        }
        return (
            <Layout>
                <Content>
                    <iframe 
                        style={{
                            height: "100vh", 
                            width: "100%"
                        }}
                        src={src}
                    />
                </Content>
            </Layout>
        );
    }
}

function mapStateToProps({main}) {
    return { main }
}

export default connect(mapStateToProps)(Calendar)